const mongoose = require('mongoose');
const userModel = require('../model/user');

async function register(req,res,next) {
    try {
        const {phone,code,password} = req.body;

    } catch (err) {
        next(err)
    }
}

module.exports = {
    register,

};
