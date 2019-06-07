<template>
  <div class="container">
    <div class="top">
      <div class="top-content w1170">
        <div class="top-content-left">
          <img :src="userData.avatar" class="avatar" alt="">
          <div class="user-msg">
            <div class="user-name">
              <span >{{userData.nickname}}</span>
            </div>
            <div class="user-middle">
              <div class="user-classify">
                <span v-if="userData.sort == 0">学生</span>
                <span v-else>教师</span>
              </div>
              <div class="more" @click="changeDesStatus">
                <i class="iconfont icon-xiangxia"></i>
                <span >更多信息</span>
              </div>
            </div>
            <div class="user-des" v-show="desStatus">
              <span>{{userData.des}}</span>
            </div>
          </div>
        </div>
        <div class="top-content-right">
          <div class="study right-item">
            <p class="right-item-top">3</p>
            <p class="right-item-bo">我的课程</p>
          </div>
          <div class="study right-item">
            <p class="right-item-top">3</p>
            <p class="right-item-bo">我的笔记</p>
          </div>
          <div class="study right-item">
            <p class="right-item-top">3</p>
            <p class="right-item-bo">我的疑问</p>
          </div>
          <div class="right-item-btn" @click="handleJump">
            <div class="right">
              <i class="iconfont icon-shezhi"></i>
              <span>个人设置</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content w1170">
      <div class="content-list ">
        <ul class="lists">
          <li>
            <router-link to="/personal/course">
              <i class="iconfont icon-xuexi"></i>
              <span>我的课程</span>
            </router-link>
          </li>
          <li>
            <router-link to="/personal/note">
              <i class="iconfont icon-shenhebijijishibenxiezi"></i>
              <span>我的笔记</span>
            </router-link>
          </li>
          <!--<li>-->
            <!--<router-link to="/personal/question">-->
              <!--<i class="iconfont icon-tiwen"></i>-->
              <!--<span>我的疑问</span>-->
            <!--</router-link>-->
          <!--</li>-->
          <li>
            <router-link to="/personal/change">
              <i class="iconfont icon-shezhi"></i>
              <span>我的信息</span>
            </router-link>
          </li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import {Button} from 'mint-ui'
  export default {
    name: "personal",
    data () {
      return {
        desStatus: false,
        isLogin: false,
      }
    },
    components: {
      Button,
    },
    methods: {
      changeDesStatus () {
        this.desStatus = !this.desStatus;
      },
      handleJump () {
        this.$router.push({
          name: 'change'
        })
      },
    },
    created() {
      if (localStorage.getItem("token")) {
        this.isLogin = true
        this.$store.dispatch('getUserData')
      }
    },
    computed: {
      userData () {
        return this.$store.state.userData
      }
    }
  }
</script>

<style scoped lang="scss">
  .container {
    .top {
      background: url(../../../img/personal-img/temp1.png) no-repeat center top #000;
      background-size: cover;
      .top-content {
        display: flex;
        justify-content: space-between;
        color: #ffffff;
        .top-content-left {
          display: flex;
          .avatar {
            border-radius: 50%;
            padding-top: 20px;
            padding-bottom: 20px;
            width: 140px;
            height: 140px;
          }
          .user-msg {
            padding-top: 20px;
            padding-left: 30px;

            .user-name {
              padding-top: 35px;
              span {
                font-size: 24px;
              }
            }
            .user-middle {
              padding-top: 10px;
              display: flex;
              justify-content: space-between;
              font-size: 14px;
              width: 150px;
              .user-classify {

              }
              .more {
                border-left: 2px solid rgba(255,255,255,.4);
                padding-left: 10px;
                font-size: 12px;
                color: rgba(255,255,255,.6)
              }
            }
            .user-des {
              padding-top: 10px;
              font-size: 14px;
              line-height: 24px;
              color: rgba(255,255,255,.6)
            }
          }
        }
        .top-content-right {
          width: 400px;
          display: flex;
          justify-content: space-between;
          padding-top: 40px;
          .right-item {
            color: rgba(255,255,255,.8);
            .right-item-top {
              font-size: 24px;
              line-height: 28px;
            }
            .right-item-bo {
              font-size: 14px;
              line-height: 20px;
            }
          }
          .right-item-btn {
            margin-top: 30px;
            border: 1px solid rgba(255,255,255,.4);
            border-radius: 18px;
            height: 30px;
            font-size: 14px;
            color: rgba(255,255,255,.8);
            line-height: 20px;
            .right {
              padding: 5px;
            }
          }
        }
      }
    }
  }
  .content {
    margin-top: 50px;
    display: flex;
  }
  .lists {
    margin-right: 50px;
    li {
      margin-top: 40px;
      box-shadow: 0 12px 24px 0 rgba(28,31,33,.1);
      padding: 20px;
      padding-bottom: 10px;
      .iconfont {
        font-size: 40px;
      }
      span {
        font-size: 20px;
      }
    }
  }
</style>
