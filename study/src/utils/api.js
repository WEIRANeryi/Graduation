export default {
  postLogin: '/user/login',  //用户登陆接口
  getUser: '/user',           //获取用户信息接口
  sendCode: '/smsCode',       //发送验证码接口
  postRegister: '/user/register',//注册用户接口
  changeUser: '/user/change',    //用户修改个人信息接口
  getBook: '/details',          //查看所有书籍信息
  getTitle: '/details/title',   //查看所选书籍目录
  getArticle: '/details/article', //查看所选文章内容
  addPost: '/post',           //添加一条笔记
  getAllPost: '/post',        //获取所有笔记内容
  getPost: '/post/alone',     //获取一条笔记内容
  addComment: '/comment',      //添加一条评论
  getComment: '/comment/alone' //获取评论内容
}
