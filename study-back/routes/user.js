const {Router} = require('express');
const router = Router();
const {register} = require('../controller/user');

/* GET users listing. */
router.post('/register',register);

module.exports = router;
