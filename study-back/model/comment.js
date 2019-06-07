const mongoose = require('mongoose');

const comment = new mongoose.Schema({
    commenterId: {
        type:  mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    },
    postId: {
        type:  mongoose.SchemaTypes.ObjectId,
        ref: 'post'
    },
    commentMsg: {
        type: String
    }
},{versionKey:false,timestamps:{createdAt: 'createTime',updatedAt: 'updateTime'}})

module.exports = mongoose.model('comment',comment)
