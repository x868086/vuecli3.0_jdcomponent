<template>
  <section>
    <panel :class="$style.panel">
      <img src="http://img12.360buyimg.com/jrpmobile/jfs/t7162/219/4755741/18941/4e51a5aa/597b066dNf6c7a972.jpg?width=750&height=120" alt="">
    </panel>
  </section>
</template>

<script>
export default {
  name: 'Adc'
}
</script>

<style lang="scss" module>
@import '../../assets/css/element.scss';
.panel {
  @include panel;
  &>h4 {
    display:none;
  }
  img {
    width:100%;
  }
}
</style>
