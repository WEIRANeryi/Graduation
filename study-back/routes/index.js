const {Router} = require('express');
const router = Router();
const userRoutes = require('./user');
const smsCodeRoutes = require('./smsCode');
const bookRoutes = require('./book')
const postRoutes = require('./post')
const commentRoutes = require('./comment')

router.use('/details',bookRoutes)
router.use('/user',userRoutes);
router.use('/smsCode',smsCodeRoutes);
router.use('/post',postRoutes);
router.use('/comment',commentRoutes);

module.exports = router;
