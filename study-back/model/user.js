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
    sort: '' //用户分类 0代表学生 1代表教师
},{versionKey: false, timestamps: {createdAt: 'createTime',
        updatedAt: 'updateTime'}});

module.exports = mongoose.model('user',user);
