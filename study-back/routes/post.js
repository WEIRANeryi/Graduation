const {Router} = require('express');
const router = Router();
const {auth} = require('../controller/auth')
const {getAllPost,addPost,getPost} = require('../controller/post')

router.get('/',getAllPost);
router.post('/',auth,addPost)
router.post('/alone',getPost)

module.exports = router;
