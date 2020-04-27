<template>
  <Panel title="新手特权" :class="$style.panel">
    <section :class="[$style.content,$style.clearfix]">
      <div :class="$style.item">
        <h4>下载APP<span :class="$style.red">送888元礼包</span></h4>
        <p :class="$style.gray">新手专享</p>
        <img src="http://img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100" alt="新手专享">
      </div>
      <div :class="$style.item">
        <ul>
          <li :class="[$style.clearfix,$style.flag]">
            <img src="http://img12.360buyimg.com/jrpmobile/jfs/t4639/162/1782623297/60754/98ea03b4/58e60952N7fdb2b85.png?width=200&height=200" alt="京东小金库">
            <h4 :class="$style.red">领128元新手礼包</h4>
            <p :class="[$style.gray]">立即开通</p>
          </li>
          <li :class="$style.clearfix">
            <img src="http://img12.360buyimg.com/jrpmobile/jfs/t4804/179/657713323/5908/66dce262/58e6095fNd3dc3f39.png?width=100&height=100" alt="打白条">
            <h4>打白条<span :class="$style.red">享免息</span></h4>
            <p :class="[$style.gray]">立即开通享豪礼</p>
          </li>
        </ul>
      </div>
    </section>
  </Panel>
</template>

<script>
export default {
  name: 'novice',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" module>
@import '../../assets/css/element.scss';

.panel {
  @include panel;
  .content {
    .item:nth-child(1) {
      border-top:1px solid #ddd;
      background-color:#fff;
      width:50%;
      float:left;
      text-align:center;
      padding:32px 20px;
      box-sizing:border-box;
      img {
        width:132px;
        height:132px;
        margin-top:20px;
      }
    }
    .item:nth-child(2) {
      border-top:1px solid #ddd;
      background-color:#fff;
      float:right;
      width:50%;
      ul>li{
        height: 144px;
        width: 100%;
        padding:32px 28px;
        border-left:1px solid #ddd;
        box-sizing:border-box;
        img {
          width:80px;
          height:80px;
          float:right;
        }
        h4{
          white-space:nowrap;
          text-overflow:ellipsis;
          overflow:hidden;
          text-align:left;
        }
      }
      ul>.flag{
        border-bottom:1px solid #ddd;
      }
    }
  }

  .content {
      h4, .red {
        font-size:26px;
        line-height: 40px;
      }
      p {
        font-size:24px;
        margin-top:6px;
      }
      .gray {
        color:#999;
      }
      .red {
          color:#f00;
        }
  }
.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}

}

</style>
