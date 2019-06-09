const mongoose = require('mongoose');
const rq = require('request-promise');
const cheerio = require('cheerio');
const bookModel = require('../model/book');
const titleModel = require('../model/title');
const articleModel = require('../model/article');
const readedModel = require('../model/readed')
const postModel = require('../model/post')
const userModel = require('../model/user')
const commentModel = require('../model/comment')

async function addPost (req,res,next) {
    try {
        const posterId = req.user.userId;
        const {postTitle,postMsg} = req.body;
        await postModel.create({
            posterId,
            postTitle,
            postMsg,
        })
        res.json({
            code: 200,
            msg: '发表笔记成功'
        })
    } catch (err) {
        next(err)
    }
}

async function getAllPost (req,res,next) {
    try {
        const Data = await postModel.find();
        for (let i = 0;i < Data.length;i++) {
            let userData = await userModel.find({
                _id: Data[i].posterId
            })
            let postData = Data[i]
            Data[i] = {
                postData: postData,
                userData: userData[0],
            }
        }
        if (Data) {
            res.json({
                code: 200,
                data: Data
            })
        }
    } catch (err) {
        next(err)
    }
}

async function getPost (req,res,next) {
    try {
        const {Id} = req.body
        if (Id) {
            const postData = await postModel.find({
                _id: mongoose.Types.ObjectId(Id)
            });
            let userId = postData[0].posterId
            const userData = await userModel.find({
                _id: mongoose.Types.ObjectId(userId)
            });
            if (postData) {
                if (userData) {
                    res.json({
                        code: 200,
                        data: {
                            postData,
                            userData
                        }
                    })
                } else {
                    res.json({
                        code: 400,
                        msg: '没有查找到该用户'
                    })
                }
            } else {
                res.json({
                    code: 400,
                    msg: '没有查找到该笔记'
                })
            }
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    addPost,
    getAllPost,
    getPost
};

