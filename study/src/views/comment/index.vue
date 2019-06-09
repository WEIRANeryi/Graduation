<template>
  <div class="container w960">
    <div class="comment-title">
      <span>{{this.postData.postTitle}}</span>
      <span class="postindex" @click="handleJump">笔记首页</span>
    </div>
    <div class="line"></div>
    <div class="comment-post clear-f">
      <div class="post-user">
        <img :src='this.posterData.avatar' alt="">
        <span>{{this.posterData.nickname}}</span>
        <br>
        <span v-if="this.posterData.sort">学生</span>
        <span v-else>教师</span>
      </div>
      <div class="post-msg">
        {{this.postData.postMsg}}
      </div>
    </div>
    <div class="line2"></div>
    <div class="comments clear-f" v-for="item in commentData">
      <div class="comment-item clear-f" >
        <div class="comment-user">
          <img :src="item.userData.avatar" alt="">
          <span>{{item.userData.nickname}}</span>
          <br>
          <span v-if="item.userData.sort">学生</span>
          <span v-else>教师</span>
        </div>
        <div class="comment-msg">
          {{item.commentData.commentMsg}}
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
  data: function () {
    return {
      postData: {},
      posterData: {},
      commentData: {},
    }
  },
  methods: {
    handleJump () {
      this.$router.push({
        name: 'post'
      })
    },
    getPostData (id) {
      this.$axios.post(this.$api.getPost,{
        Id: id
      }).then(res => {
        this.postData = res.data.postData[0]
        this.posterData = res.data.userData[0]
      })
    },
    getCommentData (id) {
      this.$axios.post(this.$api.getComment,{
        postId: id
      }).then(res => {
        this.commentData = res.data
      })
    }
  },
  created() {
    console.log(this.$route,'route');
    this.getPostData(this.$route.params.id)
    this.getCommentData(this.$route.params.id)
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
