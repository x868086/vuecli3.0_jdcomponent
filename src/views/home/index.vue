<template>
  <div>
    <heador></heador>
    <hslider></hslider>
    <novice></novice>
    <borrow></borrow>
    <money></money>
  </div>
</template>

<script>
import Hslider from './hslider.vue'
import Novice from './novice.vue'
import Borrow from './borrow.vue'
import Money from './money.vue'
export default {
  name: 'index',
  components: {
    Hslider,
    Novice,
    Borrow,
    Money
  }
}
</script>

<style lang="scss"></style>
