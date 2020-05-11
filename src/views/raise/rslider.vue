<template>
  <panel title="金融头条" :class="$style.panel">
    <section :class="$style.content" class="rslider-container">
      <img src="http://m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png" alt="">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <p>百万白条券免费送，速来领取！！</p>
          <span> ></span>
        </swiper-slide>
        <swiper-slide>
          <p>签到领流量，1元500M</p>
          <span> ></span>
        </swiper-slide>
      </swiper>
    </section>
  </panel>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'Rslider',
  title: 'Vertical slider',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true,
        loop: true
      }
    }
  }
}
</script>

<style lang="scss" module>
@import "../../assets/css/element.scss";
.panel {
  @include panel;
  &>h4 {
    display:none;
  }
}
</style>

<style lang="scss">
.rslider-container {
  display:flex;
  margin-top:120px;
  img {
  width:146px;
  height:70px;
  }
  .swiper-container {
    height: 70px;
    padding:0px 10px 0px 30px;
    .swiper-slider {
      display: flex;
    }
    p {
      display: inline-block;
      font-size: 28px;
      color: #333;
      line-height:70px;
      width:420px;
    }
    span {
      color: #ddd;
      font-size: 28px;
      flex-shrink: 0;
    }
  }
}
</style>
