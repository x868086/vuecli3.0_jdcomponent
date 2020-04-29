<template>
  <div>
    <heador></heador>
    <hslider></hslider>
    <novice></novice>
    <borrow></borrow>
    <money></money>
    <product></product>
    <Life></Life>
  </div>
</template>

<script>
import Hslider from './hslider.vue'
import Novice from './novice.vue'
import Borrow from './borrow.vue'
import Money from './money.vue'
import Product from './product.vue'
import Life from './life.vue'
export default {
  name: 'index',
  components: {
    Hslider,
    Novice,
    Borrow,
    Money,
    Product,
    Life
  }
}
</script>

<style lang="scss"></style>
