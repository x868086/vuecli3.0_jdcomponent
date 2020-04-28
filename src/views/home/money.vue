<template>
  <Panel title="理财精选" :class="$style.panel">
    <section :class="$style.content">
      <ul>
        <li v-for="item in items" :key="item.title">
          <dl>
            <dt>{{item.title}}<span>{{item.sub}}</span></dt>
            <dt :class="$style.rate">{{item.rate}}</dt>
            <dt :class="$style.gray">{{item.text}}</dt>
          </dl>
        </li>
      </ul>
    </section>
  </Panel>
</template>

<script>
export default {
  name: 'Money',
  data () {
    return {
      items: [{
        title: '定期理财',
        sub: '理财首选',
        rate: '5.60%',
        text: '历史年化回报率'
      }, {
        title: '小白理财',
        sub: '理财首选',
        rate: '4.22%',
        text: '7日年化收益率'
      }, {
        title: '月月盈',
        sub: '养老保障',
        rate: '5%',
        text: '七日年化收益率'
      }, {
        title: '小白基金',
        sub: '天天赚钱',
        rate: '4.27%',
        text: '7日年化收益率'
      }]
    }
  }
}
</script>

<style lang="scss" module>
@import '../../assets/css/element.scss';
.panel {
  @include panel;
  .content {
    ul {
      display:flex;
      flex-wrap:wrap;
      li {
        width:50%;
        text-align:left;
        border-bottom:1px solid #ddd;
        position:relative;
        dl {
          padding:34px 16px;
          dt {
            font-size:30px;
            line-height:42px;
            span {
              font-size:22px;
              color:#FF5155;
              margin:0px 0px 0px 2px;
              padding:0px 8px;
              border:1px solid #ff5155;
            }
          }
          .rate {
            font-size:44px;
            color:#ff5155;
            font-weight:700;
            line-height:58px;
          }
          .gray {
            font-size:24px;
            color:#999;
            line-height:34px;
          }
        }
      }
      li:nth-child(1):after, li:nth-child(3):after {
        content:" ";
        height:65%;
        display:block;
        width:0px;
        position:absolute;
        border-right:1px solid #ddd;
        top:20%;
        right:0px;
      }
    }
  }
}
</style>
