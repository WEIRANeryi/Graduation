const mongoose = require('mongoose');
const rq = require('request-promise');
const cheerio = require('cheerio');
const bookModel = require('../model/book');
const titleModel = require('../model/title');
const articleModel = require('../model/article');
const readedModel = require('../model/readed')

async function addBook(req,res,next) {
    try {
        const {url, img, author, title} = req.body;
        const data = await rq.get(url);
        const $ = cheerio.load(data);
        let desc;
        desc = $('meta[name="description"]').attr('content');
        const book = await bookModel.create({
            title,
            img,
            author,
            desc,
        })

        let titlesArrUrl = [];
        let titleText = [];
        const titleEle = $('.catalog a');
        let titleArr = url.split('/')//将拿到的url字符串转为数组
        titleArr.pop();
        let baseUrl = titleArr.join('/') + '/';
        titleEle.each((index,item) => {
            titlesArrUrl.push(baseUrl + $(item).attr('href'))
            titleText.push($(item).text())
        })
        for (let i = 0;i< titlesArrUrl.length;i++){
            let item = titlesArrUrl[i];
            let index = i;
            const articleData = await rq.get(item);
            const $ = cheerio.load(articleData);
            const content = $('.content').text();

            const title = await titleModel.create({
                bookId: book._id,
                title: titleText[index],
                index: Number(index),
                total: titlesArrUrl.length
            })
            const article = await articleModel.create({
                bookId: book._id,
                content,
                index,
                titleId: title._id,
            })
        }
        res.json({
            code: 200,
            msg: '爬取成功',
        })
    }catch (err) {
        next(err)
    }
}

async function getBook(req,res,next) {
    try {
        const bookData = await bookModel.find();
        if (bookData){
            res.json({
                code: 200,
                data: bookData
            })
        } else {
            res.json({
                code: 400,
                msg: '还没有添加进任何书籍信息哦'
            })
        }
    } catch (err) {
        next(err)
    }
}

async function getTitle(req,res,next) {
    try {
        const {id} = req.body;
        if (id){
            const Data = await titleModel.find({
                bookId: mongoose.Types.ObjectId(id)
            })
            if (Data){
                res.json({
                    code: 200,
                    data: Data,
                })
            } else {
                res.json({
                    code: 400,
                    msg: '没有查找到该书籍'
                })
            }
        } else {
            res.json({
                code: 400,
                msg: '请输入正确的路由'
            })
        }
    } catch (err) {
        next(err)
    }
}

async function getReaded(req,res,next) {
    try {
        const {id} = req.body;
        const userId = req.user.userId;
        const readedData = await readedModel.find({
            userId: mongoose.Types.ObjectId(userId)
        });
        const articleData = await articleModel.find({
            titleId: mongoose.Types.ObjectId(id)
        })
        const bookId = articleData[0].bookId
        const articleId = articleData[0]._id
        if (readedData[0]) {
            let books =  readedData[0].books
            for (let i = 0; i < books.length; i++) { //遍历获取到的读书数据，拿到每一项
                if (i == books.length - 1) { //判断是否是最后一项
                    let booksId = books[i].bookId + ''
                    if (booksId == bookId) { //判断最后一项是否是读的这本书，如果是就更新数据
                        books[i] = {
                            _id: books[i]._id,
                            bookId: books[i].bookId,
                            articleId: articleId
                        }
                        const updateData = await readedModel.update({
                            userId: mongoose.Types.ObjectId(userId)
                        },{
                            userId: userId,
                            books: books
                        })
                        if (updateData.ok == 1) {
                            next()
                        }
                    } else { //如果最后一项也不是正在读的这本书，就push这条数据进去
                        const updateData = await readedModel.update({
                            userId: mongoose.Types.ObjectId(userId)
                        },{
                            userId: userId,
                            books: [
                                ...books,
                                {
                                    bookId: bookId,
                                    articleId: articleId
                                }
                            ]
                        })
                        if (updateData.ok == 1) {
                            next()
                        }
                    }
                }
            }
        } else {
            await readedModel.create({
                userId: userId,
                books: [{
                    bookId: bookId,
                    articleId: articleId
                }]
            })
            next();
        }
    } catch (err) {
        next(err)
    }
}

async function getArticle(req,res,next) {
    try {
        const {id} = req.body;
        if (id) {
            const data = await articleModel.find({
                titleId: mongoose.Types.ObjectId(id)
            })
            if (data) {
                res.json({
                    code: 200,
                    data
                })
            } else {
                res.json({
                    code: 400,
                    msg: '没有查找到相应的文章，请输入正常的路由'
                })
            }
        } else {
            res.json({
                code: 400,
                msg: '请输入正确的路由'
            })
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    addBook,
    getBook,
    getTitle,
    getArticle,
    getReaded
};
