<template>
  <div>
    <heador></heador>
    <hslider></hslider>
    <novice></novice>
    <borrow></borrow>
  </div>
</template>

<script>
import Hslider from './hslider.vue'
import Novice from './novice.vue'
import Borrow from './borrow.vue'
export default {
  name: 'index',
  components: {
    Hslider,
    Novice,
    Borrow
  }
}
</script>

<style lang="scss"></style>
