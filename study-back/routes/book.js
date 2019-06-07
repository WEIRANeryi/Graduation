const {Router} = require('express');
const router = Router();
const {auth} = require('../controller/auth')
const {addBook,getBook,getTitle,getArticle,getReaded} = require('../controller/book')


router.post('/',addBook);
router.get('/',getBook);
router.post('/title',getTitle)
router.post('/article',auth,getReaded,getArticle)

module.exports = router;
