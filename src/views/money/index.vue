<template>
  <section>
    <heador></heador>
    <mslider></mslider>
    <ada></ada>
    <money></money>
    <adb></adb>
    <finance></finance>
    <adc></adc>
    <foot :class="$style.footer"></foot>
    <navbar></navbar>
  </section>
</template>

<script>
import Mslider from './mslider.vue'
import Ada from './ada.vue'
import Money from './money.vue'
import Adb from './adb.vue'
import Finance from './finance.vue'
import Adc from './adc.vue'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  components: {
    Mslider,
    Ada,
    Money,
    Adb,
    Finance,
    Adc
  }
}
</script>

<style lang="scss" module>
.footer {
  ul {
    li {
      &:nth-child(1) {
        display:none;
      }
    }
  }
}
</style>
