<template>
  <section>
    <slider cname="islider" :items="items"></slider>
  </section>
</template>

<script>
export default {
  name: 'Islider',
  data () {
    return {
      items: [
        {
          src: 'http://img12.360buyimg.com/jrpmobile/jfs/t8491/303/504628479/60643/100648de/59a94358N92475fca.jpg?width=750&height=320',
          href: 'ious'
        },
        {
          src: 'http://img12.360buyimg.com/jrpmobile/jfs/t8437/321/1758527686/40952/f66d552f/59bf1f41N50d846f9.jpg?width=750&height=320',
          href: 'ious'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.islider {
  .swiper-container {
    margin-top:120px;
  }

}
</style>
