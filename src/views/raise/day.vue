<template>
  <panel title="每日签到" :class="$style.panel">
    <section :class="$style.content">
      <p>不抢白不抢</p>
      <img src="http://img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=376&height=160" alt="">
      <img src="http://img12.360buyimg.com/jrpmobile/jfs/t3298/196/6130416421/33755/a0536d3e/589bd5d4Nf32e7adc.jpg?width=374&height=160" alt="">
    </section>
  </panel>
</template>

<script>
export default {
  name: 'Day'
}
</script>

<style lang="scss" module>
@import '../../assets/css/element.scss';
.panel {
  @include panel;
  .content {
    position:relative;
    img {
      width:320px;
      display:inline-block;
    }
    p {
      font-size:28px;
      color:#999;
      position:absolute;
      top:-70px;
      right:20px;

    }
  }

}
</style>
