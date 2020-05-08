<template>
  <section>
    <panel title="理财精选" :class="$style.panel">
      <section :class="$style.content">
        <ul>
          <li v-for="item in items" :key="item.title">
            <dl>
              <dt :class="$style.title">{{item.title}}<span>{{item.sub}}</span></dt>
              <dt :class="$style.red">{{item.rate}}</dt>
              <dt :class="$style.gray">{{item.text}}</dt>
            </dl>
          </li>
        </ul>
      </section>
    </panel>
  </section>
</template>

<script>
export default {
  name: 'Money',
  data () {
    return {
      items: [
        {
          title: '定期理财',
          sub: '理财首选',
          rate: '5.60%',
          text: '历史年化回报率'
        },
        {
          title: '小白理财',
          sub: '理财首选',
          rate: '4.22%',
          text: '7日年化收益率'
        },
        {
          title: '月月盈',
          sub: '养老保障',
          rate: '5%',
          text: '七日年化收益率'
        },
        {
          title: '小白基金',
          sub: '天天赚钱',
          rate: '4.27%',
          text: '7日年化收益率'
        }
      ]
    }
  }
}
</script>

<style lang="scss" module>
@import "../../assets/css/element.scss";
.panel {
  @include panel;
  .content {
    ul {
      @include list(row);
      li {
        width:50%;
        box-sizing:border-box;
        padding:34px 16px;
        border-bottom:1px solid #ddd;
        position:relative;
        dl {
          .title {
            font-size:30px;
            color:#333;
            span {
              border:1px solid #FF5155;
              margin-left:2px;
              padding:0px 8px;
              font-size:22px;
              line-height:42px;
              color: #FF5155;
            }
          }
          .red {
            font-size:44px;
            line-height:58px;
            color:#FF5155;
            font-weight:700;
          }
          .gray {
            font-size:24px;
            line-height:34px;
            color:#999;
          }

        }
        &:nth-child(1):after, &:nth-child(3):after {
          content:"";
          height:65%;
          display:block;
          position:absolute;
          border-left:1px solid #ddd;
          right:0px;
          top:20%;
        }
      }
    }

  }
}
</style>
