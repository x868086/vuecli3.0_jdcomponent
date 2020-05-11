<template>
  <panel title="白条福利" :class="$style.panel">
    <section :class="$style.content">
      <ul>
        <li>
          <img
            src="http://img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120"
            alt=""
          />
          <div>
            <h4>开通白条</h4>
            <p>送188元礼包</p>
          </div>
          <em>立即开通 ></em>
        </li>
        <li>
          <img
            src="http://img12.360buyimg.com/jrpmobile/jfs/t4150/330/141981421/9147/604e3e04/58affc3bNbfa8f9d7.jpg?width=120&height=120"
            alt=""
          />
          <div>
            <h4>白条闪付</h4>
            <p>新手享158元礼包</p>
          </div>
          <em>随机立减 ></em>
        </li>
        <li>
          <img
            src="http://img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120"
            alt=""
          />
          <div>
            <h4>白条提额</h4>
            <p>金融app专享提额礼包</p>
          </div>
          <em>去提额 ></em>
        </li>
      </ul>
    </section>
  </panel>
</template>

<script>
export default {
  name: 'White'
}
</script>

<style lang="scss" module>
@import "../../assets/css/element.scss";
.panel {
  @include panel;
  .content {
    width: 100%;
    ul {
      li {
        @include list(row);
        width: 100%;
        height: 140px;
        box-sizing: border-box;
        border-top: 1px solid #ddd;
        justify-content: flex-start;
        align-items: center;
        img {
          width: 88px;
          height: 88px;
          margin: 0px 32px;
        }
        div {
          width:304px;
          h4 {
            font-size: 32px;
            color: #333;
            line-height: 58px;
          }
          p {
            font-size: 24px;
            color: #999;
            line-height: 26px;
          }
        }
        em {
          font-size: 28px;
          color: #ff801a;
        }
      }
    }
  }
}
</style>
