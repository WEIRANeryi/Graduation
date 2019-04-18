<template>
  <div class="container">
    <Header class="content">
      <img slot="left" src="../../../img/header-img/ncst.png" class="content-img" alt="">
      <div class="content-right" slot="right" v-if="!isLogin">
        <router-link to="/login">
          <i class="iconfont icon-denglu"></i>
          <span>登陆</span>
        </router-link>
        <div class="vertical-line"></div>
        <router-link to="/register">
          <i class="iconfont icon-zhuce1"></i>
          <span>注册</span>
        </router-link>
      </div>
      <div class="content-right" slot="right" v-else>
        <router-link to="/personal">
          <i class="iconfont icon-personalCenter"></i>
          <span>个人中心</span>
        </router-link>
      </div>
    </Header>
  </div>
</template>
<script>
  import {Header,Field} from 'mint-ui'
  export default {
    name: "headers",
    components: {
      Header,
      Field,
    },
    data () {
      return {
        isLogin: false
      }
    },
    created() {
      if (localStorage.getItem('token')) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    }
  }
</script>

<style scoped lang="scss">
  .container {
    height: 60px;
    .content {
      height: 60px;
      font-size: 20px;
      color: #555555;
      .content-img {
        height: 50px;
        width: auto;
        margin-left: 200px;
      }
      .content-right {
        height: 30px;
        display: flex;
        font-size: 22px;
        margin-right: 250px;
        .vertical-line {
          width: 1px;
          height: 60%;
          margin-left: 10px;
          margin-right: 10px;
          background-color: #555555;
        }
      }

    }
  }
</style>
