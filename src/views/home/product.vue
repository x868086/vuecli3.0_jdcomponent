<template>
  <panel title="新品推荐" :class="$style.panel">
    <div :class="$style.gray">更多尖货 ></div>
      <section :class="$style.content">
        <slider cname="product-slider" :options="swiperOption" :items="items"></slider>
      </section>
  </panel>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      swiperOption: {
        slidesPerView: 2.3,
        spaceBetween: 30,
        freeMode: true
      },
      items: [
        {
          href: 'home',
          src:
            'http://img12.360buyimg.com/jrpmobile/jfs/t13963/267/2355123229/48850/254f797a/5a3c59aeN9cb550f6.jpg?width=335&height=421'
        },
        {
          href: 'home',
          src:
            'http://img12.360buyimg.com/jrpmobile/jfs/t13021/306/1996997425/21953/bda69db3/5a2f6a17N9da099b1.jpg?width=335&height=421'
        },
        {
          href: 'home',
          src:
            'http://img12.360buyimg.com/jrpmobile/jfs/t14125/310/1997192193/46667/3c910f8b/5a2f6a36Nad95b650.jpg?width=335&height=421'
        },
        {
          href: 'home',
          src:
            'http://img12.360buyimg.com/jrpmobile/jfs/t15784/188/381232069/39444/8878571d/5a2f6a4aNbd5a574c.jpg?width=335&height=421'
        }
      ]
    }
  }
}
</script>

<style lang="scss" module>
@import '../../assets/css/element.scss';
.panel {
  @include panel;
  position:relative;
  .content {
    padding-bottom:40px;
  }
  .gray {
    font-size:28px;
    color:#999;
    position:absolute;
    top:45px;
    right:20px;
  }
}
</style>

<style lang="scss">
// 第三方ui库的样式类名className 无法在使用cssModule后正常拿到，所以这里单独写css样式，不使用cssModule
  .product-slider {
    width:100%;
    .swiper-container {
      padding:0px 24px;
    }
    width:100%;
    box-sizing:border-box;
    img {
      width:100%;
      height:314px;
    }
  }
</style>
