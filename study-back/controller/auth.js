const jwt = require('jsonwebtoken');

async function verifyToken (token) {
    return new Promise((resolve,reject) => {
        jwt.verify(token,'swwei',(err,data) => {
            if (err) {
                reject(err)
                return
            }
            resolve(data.data);
        })
    })
}

async function auth(req,res,next) {
    try {
        const {token} = req.headers || req.query || req.body;
        const userData = await verifyToken(token);
        req.user = userData;
        next();
    } catch (err) {
        next(err)
    }
}

module.exports = {
    auth,
}
