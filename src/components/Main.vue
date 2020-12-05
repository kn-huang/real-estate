<template>
  <div id="main" class="main-container">
    <Header />
    <CardBox :darr="darr" />
  </div>
</template>
<script>
import Header from './Header.vue'
import CardBox from './CardBox.vue'
export default {
  name: 'Main',
  props: ['darr'],
  components: {
    Header,
    CardBox
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