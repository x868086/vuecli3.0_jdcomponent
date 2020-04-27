<template>
  <Panel title="极速借贷" :class="$style.panel">
    <section :class="$style.content">
      <router-link :to="{name:'home'}">
        <img src="http://img12.360buyimg.com/jrpmobile/jfs/t12721/42/2497849749/26333/ec584be4/5a421756N2416c88f.png?width=750&height=280" alt="极速借贷">
      </router-link>
    </section>
  </Panel>
</template>

<script>
export default {
  name: 'Borrow'
}
</script>

<style lang="scss" module>
@import '../../assets/css/element.scss';
.panel {
  @include panel;
  .content {
    img {
      width:100%;
    }
  }
}
</style>
