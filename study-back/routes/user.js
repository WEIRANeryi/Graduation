const {Router} = require('express');
const router = Router();
const {auth} = require('../controller/auth')
const {register,login,getUser,changeUser} = require('../controller/user');

/* GET users listing. */
router.post('/register',register);
router.post('/login',login);
router.get('/',auth, getUser);
router.post('/change',auth, changeUser);

module.exports = router;
