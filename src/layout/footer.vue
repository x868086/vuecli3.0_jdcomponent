<template>
    <panel title="在线客服" :class="$style.panel">
      <ul>
        <li>
          <img src="http://img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252" alt="">
        </li>
        <li>
          <div>
            <img src="http://img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108" alt="">
            <p>客户端</p>
          </div>
          <div>
            <img src="http://img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108" alt="">
            <p>宽屏版</p>
          </div>
          <div>
            <img src="http://img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108" alt="">
            <p>电脑版</p>
          </div>
        </li>
        <li>Copyright © 2004-2017 京东JD.com 版权所有</li>
        <li>投资有风险，购买需谨慎</li>
        <li>京东金融平台服务协议</li>
        <li>京东金融隐私政策</li>
      </ul>
    </panel>
</template>

<script>
export default {
  name: 'Foot'
}
</script>

<style lang="scss" module>
@import '../assets/css/element.scss';
.panel {
  @include panel;
  text-align:center;
  margin-bottom:0px;
  &>h4 {
    display:none;
  }
  ul {
    li {
        font-size:24px;
        color:#999;
        text-align:center;
        background:#f5f5f5;
      &:nth-child(1) img {
        width:100%;
        height:143px;
      }
      &:nth-child(2) {
        @include list(row);
        justify-content:space-between;
        height:186px;
        div {
          box-sizing:border-box;
          width:33.33333%;
          padding-top:20px;
          img {
            width:90px;
            height:90px;
          }
          p {
            font-size:26px;
            color:#999;
            margin-top:12px;
          }
        }
      }
      &:nth-child(n+3) {
        padding:24px 0px;
        height:38px;
        line-height:38px;
        border-top: 1px solid #ddd;
      }
    }
    margin-bottom:100px;
  }
}
</style>
