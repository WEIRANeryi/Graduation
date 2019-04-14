<template>
  <div class="container">
    <myHeader class="myHeader"></myHeader>
    <mySwiper class="mySwiper w1170"></mySwiper>
    <div class="content w1170">
      <div class="content-item ">
        <div class="item-top">
          <div class="item-top-left">
            <div class="Vertical-line"></div>
            <span>公共必修</span>
          </div>
          <div class="item-top-right">
            <Button  size="small">更多</Button>
          </div>
        </div>
        <div class="item-main">
          <router-link to="#" class="item-main-item">
            <img src="../../../img/item-img/item1.jpg" alt="">
            <p>形式与政策</p>
            <span>李松林等</span>
          </router-link>
          <router-link to="#" class="item-main-item">
            <img src="../../../img/item-img/item2.jpg" alt="">
            <p>形式与政策</p>
            <span>李松林等</span>
          </router-link>
          <router-link to="#" class="item-main-item">
            <img src="../../../img/item-img/item3.jpg" alt="">
            <p>形式与政策</p>
            <span>李松林等</span>
          </router-link>
          <router-link to="#" class="item-main-item">
            <img src="../../../img/item-img/item4.jpg" alt="">
            <p>形式与政策</p>
            <span>李松林等</span>
          </router-link>
        </div>
      </div>
      <div class="content-item ">
        <div class="item-top">
          <div class="item-top-left">
            <div class="Vertical-line"></div>
            <span>公共必修</span>
          </div>
          <div class="item-top-right">
            <Button size="small">更多</Button>
          </div>
        </div>
        <div class="item-main">
          <router-link to="#" class="item-main-item">
            <img src="../../../img/item-img/item1.jpg" alt="">
            <p>形式与政策</p>
            <span>李松林等</span>
          </router-link>
          <router-link to="#" class="item-main-item">
            <img src="../../../img/item-img/item2.jpg" alt="">
            <p>形式与政策</p>
            <span>李松林等</span>
          </router-link>
          <router-link to="#" class="item-main-item">
            <img src="../../../img/item-img/item3.jpg" alt="">
            <p>形式与政策</p>
            <span>李松林等</span>
          </router-link>
          <router-link to="#" class="item-main-item">
            <img src="../../../img/item-img/item4.jpg" alt="">
            <p>形式与政策</p>
            <span>李松林等</span>
          </router-link>
        </div>
      </div>
      <div class="content-item ">
        <div class="item-top">
          <div class="item-top-left">
            <div class="Vertical-line"></div>
            <span>公共必修</span>
          </div>
          <div class="item-top-right">
            <Button size="small">更多</Button>
          </div>
        </div>
        <div class="item-main">
          <router-link to="#" class="item-main-item">
            <img src="../../../img/item-img/item1.jpg" alt="">
            <p>形式与政策</p>
            <span>李松林等</span>
          </router-link>
          <router-link to="#" class="item-main-item">
            <img src="../../../img/item-img/item2.jpg" alt="">
            <p>形式与政策</p>
            <span>李松林等</span>
          </router-link>
          <router-link to="#" class="item-main-item">
            <img src="../../../img/item-img/item3.jpg" alt="">
            <p>形式与政策</p>
            <span>李松林等</span>
          </router-link>
          <router-link to="#" class="item-main-item">
            <img src="../../../img/item-img/item4.jpg" alt="">
            <p>形式与政策</p>
            <span>李松林等</span>
          </router-link>
        </div>
      </div>
      <div class="content-item ">
        <div class="item-top">
          <div class="item-top-left">
            <div class="Vertical-line"></div>
            <span>公共必修</span>
          </div>
          <div class="item-top-right">
            <Button size="small">更多</Button>
          </div>
        </div>
        <div class="item-main">
          <router-link to="#" class="item-main-item">
            <img src="../../../img/item-img/item1.jpg" alt="">
            <p>形式与政策</p>
            <span>李松林等</span>
          </router-link>
          <router-link to="#" class="item-main-item">
            <img src="../../../img/item-img/item2.jpg" alt="">
            <p>形式与政策</p>
            <span>李松林等</span>
          </router-link>
          <router-link to="#" class="item-main-item">
            <img src="../../../img/item-img/item3.jpg" alt="">
            <p>形式与政策</p>
            <span>李松林等</span>
          </router-link>
          <router-link to="#" class="item-main-item">
            <img src="../../../img/item-img/item4.jpg" alt="">
            <p>形式与政策</p>
            <span>李松林等</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import myHeader from '@/components/header'
  import mySwiper from '@/components/my-swiper'
  import {Button} from 'mint-ui'
  export default {
    name: "index",
    components: {
      myHeader,
      mySwiper,
      Button,
    },
    data () {
      return {

      }
    }
  }
</script>

<style scoped lang="scss">
  .container {
    .myHeader {

    }
    .mySwiper {
      margin-top: 30px;
    }
  }
  .content {
    .content-item {
      font-size: 18px;
      margin-top: 30px;
      .item-top {
        display: flex;
        justify-content: space-between;
        .item-top-left {
          display: flex;
          text-align: center;
          .Vertical-line {
            width: 3px;
            height: 100%;
            background-color: #42a85b;
          }
          span {
            margin-left: 5px;
            margin-top: 5px;
          }
        }
        .item-top-right {
          Button {
            background-color: #fff;
            border-radius: 10px;
          }
        }
      }
      .item-main {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        .item-main-item {
          img {
            width: 226px;
            height: 149px;
          }
          p {
            font-size: 16px;
            color: #000;
          }
          span {
            font-size: 14px;
          }
        }
      }
    }
  }
  .line {
    width: 100%;
    height: 1px;
    background-color: #000;
  }
</style>
