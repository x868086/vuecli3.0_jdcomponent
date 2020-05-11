<template>
  <section>
    <heador></heador>
    <rslider></rslider>
    <day></day>
    <in></in>
    <more></more>
    <foot></foot>
    <navbar> </navbar>
  </section>
</template>

<script>
import Day from './day.vue'
import Rslider from './rslider.vue'
import In from './in.vue'
import More from './more.vue'
export default {
  name: 'Raise',
  components: {
    Day,
    Rslider,
    In,
    More
  }
}
</script>

<style lang="scss"></style>
