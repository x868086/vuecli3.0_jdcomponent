<template>
  <panel title="in货推荐" :class="$style.panel">
    <section :class="$style.content">
      <ul>
        <li v-for="item in items" :key="item.catory">
          <img :src="item.catory" alt="">
          <dl>
            <dt v-for="i in item.list" :key="i.img">
              <span :class="$style.red">精选</span>
              <img :src="i.img" alt="">
              <h4>{{i.title}}</h4>
              <p :class="$style.price">{{i.price}}</p>
              <article>
                <div>
                  <div :class="$style.inner" :style="{width:i.progress+'%'}" ></div>
                </div>
                <p :class="$style.progress">{{i.progress}} %</p>
              </article>
            </dt>
          </dl>
        </li>
      </ul>
    </section>

  </panel>
</template>

<script>
export default {
  name: 'In',
  data () {
    return {
      items: [
        {
          catory:
            '//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200',
          list: [
            {
              img:
                'https://img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg',
              title: '双响炮蓝牙音箱',
              price: '29.00',
              progress: 172
            },
            {
              img:
                'https://img30.360buyimg.com/cf/s250x250_jfs/t15529/308/632300625/135123/adb9c6d0/5a37676dNc31da9ea.jpg',
              title: '脑波相机',
              price: '998.00',
              progress: 259
            }
          ]
        },
        {
          catory:
            '//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200',
          list: [
            {
              img:
                'https://img30.360buyimg.com/cf/s250x250_jfs/t11257/287/2281727659/55759/e00b90a/5a138f21N32dca834.jpg',
              title: '智能电动牙刷',
              price: '19.00',
              progress: 481
            },
            {
              img:
                'https://img30.360buyimg.com/cf/s250x250_jfs/t14209/293/662014092/61635/bba5c330/5a33a983N077cac56.jpg',
              title: '烟草加热电子烟',
              price: '258.00',
              progress: 105
            }
          ]
        },
        {
          catory:
            '//img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200',
          list: [
            {
              img:
                'https://img30.360buyimg.com/cf/s250x250_jfs/t15007/47/884045069/149879/17987250/5a3cb182N15868ea1.jpg',
              title: '赖公高淮封藏老酒',
              price: '99.00',
              progress: 199
            },
            {
              img:
                'https://img30.360buyimg.com/cf/s250x250_jfs/t14197/160/546457496/134173/4e1baccd/5a30ccc5Na44f7492.jpg',
              title: '泗洪花雕醉蟹',
              price: '58.00',
              progress: 222
            }
          ]
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
    li {
      margin-bottom:40px;
      &>img {
        width:100%;
      }
      &>dl {
        @include list(row);
        dt {
          position:relative;
          @include list(column);
          align-items: center;
          img {
            width:180px;
            height:180px;
            margin:44px 0px 20px;
          }
          h4 {
            font-size:28px;
            color:#444;
          }
          .price {
            font-size:36px;
            color:#ff3232;
            margin:0px 4px 0px 0px;
            line-height:48px;
          }
          .price:before {
            content:'\FFE5';
            font-size:28px;
            color:#ff3232;
          }
          .price:after {
            content:'起';
            font-size:20px;
            color:#999;
            margin-left:4px;
          }
          article {
            width:80%;
            margin-top:16px;
            padding:0px 20px;
            @include list(row);
            align-items:center;
            justify-content: space-between;
            div {
                width: 144px;
                height: 10px;
                background: #F6E6E6;
                border-radius: 22px;
                .inner {
                  width:40%;
                  max-width:100%;
                  height:10px;
                  border-radius:5px;
                  background-image: linear-gradient(270deg,#F55 1%,#FF9C31 100%);
                }
            }

            p {
              font-size:24px;
              color:#999;
            }
          }
          .red {
            background:#c1c1c1;
            color:#ff0000;
            font-size:20px;
            padding:4px 8px;
            position:absolute;
            left:0px;
          }
          width:50%;
        }
      }
    }
  }
}
}

</style>
