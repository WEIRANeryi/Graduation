const mongoose = require('mongoose');
const userModel = require('../model/user');
const smsCodeModel = require('../model/smsCode');
const validator = require('validator');
const signUtil = require('../utils/signToken');

async function register(req,res,next) {
    try {
        const {phone,code,password,sort} = req.body;
        let phoneStatus = validator.isMobilePhone(phone,'zh-CN');
        if (phoneStatus) { //判断手机号是否符合格式
            const userData = await userModel.findOne({
                phone,
            })
            if (!userData) { //判断用户是否已经被注册
                const smsCodeData = await smsCodeModel.findOne({
                    phone
                }).sort({_id:-1});
                if (smsCodeData) { //判断验证码是否存在
                    let smsCodeDate = new Date(smsCodeData.updateTime);
                    let nowTime = Math.round(Date.now() / 1000);
                    let smsCodeTime = Math.round(smsCodeDate.getTime() / 1000);
                    if (nowTime - smsCodeTime < 5*60) {
                        if (code == smsCodeData.code) { //判断验证码是否正确
                            await userModel.create({
                                phone,
                                password,
                                sort,
                            })
                            res.json({
                                code: 200,
                                msg: '用户创建成功'
                            })
                        } else {
                            res.json({
                                code: 400,
                                msg: '验证码错误，请正确输入'
                            })
                        }
                    } else {
                        res.json({
                            code: 400,
                            msg: '验证码已过期'
                        })
                    }
                } else {
                    res.json({
                        code: 400,
                        msg: '您还没有发送给验证码'
                    })
                }
            } else {
                res.json({
                    code: 400,
                    msg: '该用户已经被注册'
                })
            }
        }else {
            res.json({
                code: 400,
                msg: '您输入的手机号不符合格式，请正确输入'
            })
        }
    } catch (err) {
        next(err)
    }
} //用户注册方法

async function login(req,res,next) {
    try {
        const {phone,password} = req.body;
        let phoneStatus = validator.isMobilePhone(phone,'zh-CN');
        if (phoneStatus) {
            const userData = await userModel.findOne({
                phone
            })
            if (userData) { //判断用户是否注册
                if (password == userData.password) { //判断密码是否正确
                    const token =signUtil({
                        userId:userData._id,
                    });
                    res.json({
                        code: 200,
                        data: {
                            token,
                        }
                    })
                } else {
                    res.json({
                        code: 400,
                        msg: '密码错误，请正确输入',
                    })

                }
            } else {
                res.json({
                    code: 400,
                    msg: '该用户还没有注册'
                })
            }
        } else {
            res.json({
                code: 400,
                msg: '输入的手机号不符合格式，请正确输入'
            })
        }
    } catch (err) {
        next(err)
    }
} //用户登陆方法

async function getUser (req,res,next) {
    try {
        const userId = req.user.userId;
        const userData = await userModel.findById(mongoose.Types.ObjectId(userId));
        if (userData) { //判断用户是否存在
            res.json({
                code: 200,
                data: userData,
            })
        } else {
            res.json({
                code: 400,
                msg: '用户尚未注册'
            })
        }
    } catch (err) {
        next(err)
    }
} //获取用户信息方法

async function changeUser(req,res,next) {
    try {
        const userId = req.user.userId;
        const {avatar,phone,password,nickname,sort,sex} = req.body;
        const userData = await userModel.findById(mongoose.Types.ObjectId(userId));
        if (userData) {
            let phoneStatus = validator.isMobilePhone(phone,'zh-CN');
            if (phoneStatus) {
                const updataData = await userModel.update({
                    _id: mongoose.Types.ObjectId(userId)
                },{
                    avatar: avatar,
                    phone: phone,
                    password: password,
                    nickname: nickname,
                    sort: sort,
                    sex: sex,
                })
                console.log(updataData);
                if (updataData.ok == 1) {
                    res.json({
                        code: 200,
                        msg: '修改个人信息成功'
                    })
                } else {
                    res.json({
                        code: 400,
                        msg: '莫名的错误，请重新尝试更改'
                    })
                }
            } else {
                res.json({
                    code: 400,
                    msg: '输入的手机号不符合格式，请正确输入'
                })
            }
        } else {
            res.json({
                code: 400,
                msg: '该用户还没有注册'
            })
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    register,
    login,
    getUser,
    changeUser,
};
