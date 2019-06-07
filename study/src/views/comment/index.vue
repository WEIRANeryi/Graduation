<template>
  <div class="container w960">
    <div class="comment-title">
      <span>我是笔记标题</span>
      <span class="postindex" @click="handleJump">笔记首页</span>
    </div>
    <div class="line"></div>
    <div class="comment-post clear-f">
      <div class="post-user">
        <img src="../../../img/personal-img/avatar.jpg" alt="">
        <span>用户1</span>
      </div>
      <div class="post-msg">
        我是笔记正文
      </div>
    </div>
    <div class="line2"></div>
    <div class="comments clear-f">
      <div class="comment-item clear-f">
        <div class="comment-user">
          <img src="../../../img/personal-img/avatar.jpg" alt="">
          <span>用户1</span>
        </div>
        <div class="comment-msg">
          我是评论正文
        </div>
      </div>
      <div class="line2"></div>
    </div>
    <myWrite class="write"/>
  </div>
</template>

<script>
import myWrite from '@/components/writes'
export default {
  name: "comment",
  components: {
    myWrite
  },
  methods: {
    handleJump () {
      this.$router.push({
        name: 'post'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  .comment-title {
    span {
      font-size: 18px;
      font-weight: bold;
      color: #333;
      line-height: 42px;
    }
    .postindex {
      font-size: 18px;
      font-weight: bold;
      color: #333;
      line-height: 42px;
      float: right;
      margin-right: 50px;
      cursor: pointer;
    }
  }
  .line {
    width: 100%;
    height: 5px;
    background-color: #000;
  }
  .comment-post {
    .post-user {
      float: left;
      img {
        width: 100px;
        height: 100px;
        margin: 20px 0 10px 30px;
      }
      span {
        margin: 20px 0 10px 60px;
      }
    }
    .post-msg {
      float: left;
      margin: 20px 0 0 30px;
      font-size: 18px;
    }
  }
  .line2 {
    width: 100%;
    height: 1px;
    margin-top: 10px;
    background-color: #000;
  }
  .comments {
    .comment-item {
      .comment-user {
        float: left;
        img {
          width: 100px;
          height: 100px;
          margin: 20px 0 10px 30px;
        }
        span {
          margin: 20px 0 10px 60px;
        }
      }
      .comment-msg {
        float: left;
        margin: 20px 0 0 30px;
        font-size: 18px;
      }
    }
  }
  .write {
    margin-top: 30px;
  }
}
</style>
