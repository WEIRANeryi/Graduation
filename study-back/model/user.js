const mongoose = require('mongoose');

const user = new mongoose.Schema({
   avatar: {
       type: String,
       default: 'http://image.yaojunrong.com/zhenxiang.jpg'
   },
    phone: {
        type: String,
        unique: true,
    },
    password: String,
    nickname: String,
},{versionKey: false, timestamps: {createdAt: 'createTime',
        updatedAt: 'updateTime'}});

modules.exports = mongoose.model('user',user);
