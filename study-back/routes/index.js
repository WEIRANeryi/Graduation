const {Router} = require('express');
const router = Router();
const userRoutes = require('./user');
const smsCodeRoutes = require('./smsCode');


router.use('/user',userRoutes);
router.use('/smsCode',smsCodeRoutes);

module.exports = router;
