<template>
<div class="container">
  <myHeader />
  <div class="post-main">
    <div class="post-item">
      <div class="item-left">
        <span>30</span>
      </div>
      <div class="item-mid" @click="handleJump">
        <span>我是一条笔记</span>
      </div>
      <div class="item-rig">
        <i class="iconfont icon-personalCenter"></i>
        <span>用户1</span>
      </div>
    </div>
    <div class="post-item">
      <div class="item-left">
        <span>30</span>
      </div>
      <div class="item-mid" @click="handleJump">
        <span>我是一条笔记</span>
      </div>
      <div class="item-rig">
        <i class="iconfont icon-personalCenter"></i>
        <span>用户1</span>
      </div>
    </div>
    <div class="post-item">
      <div class="item-left">
        <span>30</span>
      </div>
      <div class="item-mid" @click="handleJump">
        <span>我是一条笔记</span>
      </div>
      <div class="item-rig">
        <i class="iconfont icon-personalCenter"></i>
        <span>用户1</span>
      </div>
    </div>
    <div class="post-item">
      <div class="item-left">
        <span>30</span>
      </div>
      <div class="item-mid" @click="handleJump">
        <span>我是一条笔记</span>
      </div>
      <div class="item-rig">
        <i class="iconfont icon-personalCenter"></i>
        <span>用户1</span>
      </div>
    </div>
    <div class="post-item">
      <div class="item-left">
        <span>30</span>
      </div>
      <div class="item-mid" @click="handleJump">
        <span>我是一条笔记</span>
      </div>
      <div class="item-rig">
        <i class="iconfont icon-personalCenter"></i>
        <span>用户1</span>
      </div>
    </div>
  </div>
  <myWrite class="write" />
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
  methods: {
    handleJump () {
      this.$router.push({
        name: 'comment'
      })
    },
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
