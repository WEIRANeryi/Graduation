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

async function addComment (req,res,next) {
    try {
        const userId = req.user.userId;
        const {commentMsg,postId} = req.body
        console.log(userId,'userId');
        console.log(commentMsg,'commentMsg');
        console.log(postId,'postId');
        await commentModel.create({
            commenterId: userId,
            postId: postId,
            commentMsg: commentMsg,
        })
        res.json({
            code: 200,
            msg: '发表评论成功'
        })
    } catch (err) {
        next(err)
    }
}

async function getComment(req,res,next) {
    try {
        const {postId} = req.body
        if (postId) {
            const Data = await commentModel.find({
                postId: mongoose.Types.ObjectId(postId)
            })
            for (let i = 0;i < Data.length;i++) {
                let userData = await userModel.find({
                    _id: Data[i].commenterId
                })
                let commentData = Data[i]
                Data[i] = {
                    commentData: commentData,
                    userData: userData[0],
                }
            }
            if (Data) {
                res.json({
                    code: 200,
                    data: Data
                })
            }
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    addComment,
    getComment
};

