<template lang="html">
  <section :class="cname">
    <swiper
      ref="mySwiper"
      :options="options"
      :not-next-tick="options.notNextTick"
    >
      <swiper-slide v-for="item in items" :key="item.src">
        <router-link :to="{ name: item.href }">
          <img :src="item.src" alt="" />
        </router-link>
      </swiper-slide>
      <div
        class="swiper-pagination"
        v-if="options.pagination"
        slot="pagination"
      ></div>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Slider',
  props: {
    cname: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      // 默认props值为对象时需要用return 返回
      default () {
        return {
          autoplay: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          },
          notNextTick: false
        }
      }
    },
    items: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style lang="scss">
@import "../../node_modules/swiper/css/swiper.css";
</style>
