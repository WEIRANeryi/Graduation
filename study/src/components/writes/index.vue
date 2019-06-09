<template>
  <div class="container w960">
    <div class="write-top">
      <span>发表评论</span>
    </div>
    <div class="write-msg">
      <input type="text" v-model="commentMsg">
    </div>
    <Button class="btn" type="primary" @click="publish">发表</Button>
  </div>
</template>

<script>
import {Button,Message} from 'element-ui'
export default {
  name: "write",
  components: {
    Button
  },
  data: function () {
    return {
      commentMsg: '',
      postId: '',
    }
  },
  methods: {
    publish() {
      this.$axios.post(this.$api.addComment,{
        commentMsg: this.commentMsg,
        postId: this.$route.params.id
      }).then(res => {
        if (res.code === 200) {
          Message({
            message: '发表评论成功',
            type: 'success'
          })
        } else {
          Message({
            message: res.msg,
            type: 'warning'
          })
        }
      })
    }
  },
  created() {
    this.postId = this.$route.params.id
  }
}
</script>

<style scoped lang="scss">
.container {
  .write-top {
    span {
      color: #000;
      font-weight: 700;
      line-height: 14px;
      font-size: 14px;
    }
  }
  .write-title {
    margin-top: 10px;
    input {
      width: 400px;
    }
  }
  .write-msg {
    margin-top: 20px;
    input {
      width: 400px;
      height: 150px;
    }
  }
  .btn {
    margin-top: 10px;
  }
}
</style>
