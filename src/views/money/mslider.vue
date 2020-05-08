<template>
  <panel :class="$style.panel">
    <section>
        <slider :items="items" :cname="$style.slider">
        </slider>
    </section>
  </panel>
</template>

<script>
export default {
  name: 'Mslider',
  data () {
    return {
      items: [
        {
          src:
            'http://img12.360buyimg.com/jrpmobile/jfs/t11149/181/856008463/68797/dc303e9/59f97baeN3cdae084.jpg?width=750&height=400',
          href: 'home'
        },
        {
          src:
            'http://img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400',
          href: 'money'
        }
      ]
    }
  }
}
</script>

<style lang="scss" module>
@import '../../assets/css/element.scss';
.panel {
  @include panel;
  &>h4 {
    display:none;
  }
  .slider {
    margin-top:120px;
    img {
      width:100%;
    }
  }
}
</style>
