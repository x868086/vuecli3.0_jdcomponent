<template>
  <div :class="$style.header">
    <span :class="$style.left">
      <em>注册</em>&nbsp;|&nbsp;<em>登录</em>
    </span>
    <btn :class="$style.btnDownload">APP下载</btn>
  </div>
</template>

<script>
export default {
  name: 'Heador'
}
</script>

<style lang="scss" module>
  .header {
    color: #666;
    height: 100px;
    line-height: 100px;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    font-size: 32px;
    background:#fff url('../assets/image/jr-logo.png') 50% 50% no-repeat;
    background-size: auto 50%;
    .left {
      font-size: 28px;
      height: 30px;
      line-height: 30px;
      margin: 17px 0 0 18px;
    }
    .btnDownload {
      float:right;
      font-size:24px;
      border:0px;
      min-width:120px;
      height:56px;
      line-height:56px;
      padding:0px;
      border-radius:4px;
      margin:28px 24px 0px 0px;
    }
  }
</style>
