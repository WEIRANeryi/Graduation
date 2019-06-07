const mongoose = require('mongoose');

const post = new mongoose.Schema({
    posterId: {
        type:  mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    },
    postTitle: {
      type: String
    },
    postMsg: {
        type: String
    }
},{versionKey:false,timestamps:{createdAt: 'createTime',updatedAt: 'updateTime'}})

module.exports = mongoose.model('post',post)
