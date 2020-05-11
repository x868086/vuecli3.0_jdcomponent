<template>
  <section>
    <heador></heador>
    <islider></islider>
    <white></white>
    <more></more>
    <foot></foot>
    <navbar></navbar>
  </section>
</template>

<script>
import Islider from './islider.vue'
import White from './white.vue'
import More from './more.vue'
export default {
  name: 'Ious',
  components: {
    Islider,
    White,
    More
  }
}
</script>

<style lang="scss">

</style>
