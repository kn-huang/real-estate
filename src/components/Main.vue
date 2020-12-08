<template>
  <div id="main" class="main-container">
    <Header />
    <CardBox :load="load" :darr="darr" />
    <Footer :dlen="dlen" />
  </div>
</template>
<script>
import Header from './Header.vue'
import CardBox from './CardBox.vue'
import Footer from './Footer.vue'
export default {
  name: 'Main',
  props: [ 'darr', 'load', 'dlen'],
  components: {
    Header,
    CardBox,
    Footer
  }
}
</script>
<style scoped lang="scss">
.main-container {
  padding: 0px 2px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
</style>