const smsCodeModel = require('../model/smsCode');
const userModel = require('../model/user');
const sms = require('../utils/smsUtil');

async function sendCode(req,res,next) {
    try {
        const { phone } = req.body;
        console.log(phone,'phone');
        const userdata = await userModel.findOne({
            phone,
        });
        if (!userdata) {//判断用户是否已经注册
            let sixStr = '';
            for (let i = 0;i<6;i++) {
                sixStr += Math.floor(Math.random() * 10) + '';
            }
            const smsRes =await sms(phone,sixStr);
            if (smsRes.Code == 'OK'){ //判断验证码是否正常发送
                await smsCodeModel.create({
                    phone,
                    code: sixStr,
                })
                res.json({
                    code: 200,
                    msg: '短信发送成功'
                })
            } else {
                res.json({
                    code: 400,
                    msg: smsRes.Code,
                })
            }
        } else {
            res.json({
                code: 400,
                msg: '该用户已经被注册',
            })
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {
  sendCode,
};
