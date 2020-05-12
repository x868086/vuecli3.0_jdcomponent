<template>
  <panel :class="$style.panel">
    <section :class="$style.content">
      <div></div>
      <p>立即下载</p>
      <span>copy right 2020</span>
    </section>
  </panel>
</template>

<script>
export default {
  name: 'Special'
}
</script>

<style lang="scss" module>
@import '../../assets/css/element.scss';
html,body {
  background:#fff;
}
.panel {
  @include panel;
  &>h4 {
    display:none;
  }
  .content {
    width:100%;
    height:1136px;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    div {
      width:600px;
      height:800px;
      background:url(https://img12.360buyimg.com/jrpmobile/jfs/t8956/285/1249806938/50853/8cd3c8f0/59b65f36N05367075.png?) center center no-repeat;
      background-size:contain;
      margin-top:-400px;
    }
    p {
      @include btn($size:32px,$color:#fff,$bgcolor:#F1443E,$padding:5px,$radius:5px);
      height: 100px;
      line-height: 100px;
      width: 471px;
      background-image: linear-gradient(270deg,#F55C33 0,#EE2D1B 75%);
      box-shadow: 0 12px 32px 0 rgba(255,159,135,.6);
      position: fixed;
      bottom: 130px;
    }
    span {
      color:#999;
      font-size:24px;
      position:fixed;
      bottom:20px;
    }
  }
}
</style>
