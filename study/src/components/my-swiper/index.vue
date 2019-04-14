<template>
  <div>
    <swiper :options="swiperOption" autoplay="autoplay"  speed="speed" ref="mySwiper" >
      <swiper-slide>
        <router-link to="#" class="swiper-img-wrap">
          <img src="../../../img/swiper-img/swiper1.png" class="swiper-img">
          <!--<div class="swiper-title">95559</div>-->
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="#" class="swiper-img-wrap">
          <img src="../../../img/swiper-img/swiper2.png" class="swiper-img">
          <!--<div class="swiper-title">95559</div>-->
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="#" class="swiper-img-wrap">
          <img src="../../../img/swiper-img/swiper3.png" class="swiper-img">
          <!--<div class="swiper-title">95559</div>-->
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="#" class="swiper-img-wrap">
          <img src="../../../img/swiper-img/swiper4.png" class="swiper-img">
          <!--<div class="swiper-title">95559</div>-->
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper,swiperSlide} from 'vue-awesome-swiper'
  export default {
    name: "index",
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
          },
          autoplay:true,
          speed: 1000
        },
        swiperdata: [],
      }
    },
  }
</script>

<style lang="scss">
  @import "../../globalCss/px2-rem";
  .swiper-img-wrap{
    display: block;
    position: relative;
    color: rgba(255,255,255,.9);
    .swiper-img {
      height: 300px;
    }
  }

</style>
