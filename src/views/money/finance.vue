<template>
  <panel title="理财精选" :class="$style.panel">
    <section :class="$style.content">
      <ul>
        <li>
          <img src="http://img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76" alt="" />
          <div>
            <h4>月度理财</h4>
            <p>预期年化收益率4.50%</p>
          </div>
          <em>去赚钱 ></em>
        </li>
        <li>
          <img src="http://img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76" alt="">
          <div>
            <h4>季度理财</h4>
            <p>历史年化回报率5.50%</p>
          </div>
          <em>去赚钱 ></em>
        </li>
        <li>
          <img src="http://img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76" alt="">
          <div>
            <h4>一年理财</h4>
            <p>历史年化回报率5.80%</p>
          </div>
          <em>去赚钱 ></em>
        </li>
      </ul>
    </section>
  </panel>
</template>

<script>
export default {
  name: 'Finance'
}
</script>

<style lang="scss" module>
@import "../../assets/css/element.scss";
.panel {
  @include panel;
  .content {
    ul {
      li {
        @include list(row);
        flex-wrap: nowrap;
        height:140px;
        border-top:1px solid #ddd;
        width:100%;
        box-sizing:border-box;
        justify-content: flex-start;
        align-items: center;
        img {
          width:88px;
          height:88px;
          margin:0px 32px;
          display:inline-block;
        }
        div {
          width:344px;
          h4 {
            font-size:32px;
            color:#333;
            line-height:58px;
          }
          p {
            font-size:24px;
            color:#FF3232;
            line-height:26px;
          }
        }
        em {
          font-size:28px;
          color:#ff801a;
        }
      }
    }
  }
}
</style>
