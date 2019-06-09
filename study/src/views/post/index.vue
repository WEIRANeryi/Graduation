<template>
<div class="container">
  <myHeader />
  <div class="post-main">
    <div class="post-item" v-for="item in this.postData">
      <div class="item-left">
        <span>{{item.postData.commentNum}}</span>
      </div>
      <div class="item-mid" @click="handleJump(item.postData._id)">
        <span>{{item.postData.postTitle}}</span>
      </div>
      <div class="item-rig">
        <i class="iconfont icon-personalCenter"></i>
        <span>{{item.userData.nickname}}</span>
      </div>
    </div>
  </div>
  <myWrite class="write"/>
</div>
</template>

<script>
import myHeader from '@/components/header'
import myWrite from '@/components/write'
export default {
  name: "post",
  components: {
    myHeader,
    myWrite
  },
  data: function () {
    return {
      postData: [],
    }
  },
  methods: {
    handleJump (id) {
      this.$router.push({
        path: `/comment/${id}`,
      })
    },
  },
  created() {
    this.$axios.get(this.$api.getAllPost).then(res => {
      console.log(res);
      this.postData = res.data
    })
  }
}
</script>

<style scoped lang="scss">
.container {
  background-color: #fff;
  .post-main {
    padding-top: 20px;
    .post-item {
      display: flex;
      justify-content: space-between;
      width: 60%;
      margin: 0 auto;
      margin-top: 10px;
      .item-left {
        /*width: 100px;*/
        margin: 5px 0 5px 20px;
        span {
          display: inline-block;
          padding-left: 10px;
          padding-right: 10px;
          font-size: 20px;
          background-color: #f3f3f3;
        }
      }
      .item-mid {
        margin: 5px 0 5px 0;
        font-size: 20px;
        color: #409eff;
        cursor: pointer;
      }
      .item-rig {
        margin: 5px 10px 5px 0;
      }
    }
    .post-item:hover {
      background-color: #A3BFF0;
    }
  }
  .write {
    margin-top: 30px;
  }
}
</style>
