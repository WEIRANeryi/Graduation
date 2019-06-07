const mongoose = require('mongoose');

const readed = new mongoose.Schema({
    userId: {
       type:  mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    },
    books: [{
        bookId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'book',
        },
        articleId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'article',
        },
    }]
},{versionKey:false,timestamps:{createdAt: 'createTime',updatedAt: 'updateTime'}})

module.exports = mongoose.model('readed',readed)
