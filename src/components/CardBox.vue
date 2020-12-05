<template>
  <div id="card_box" class="cb-container">
    <Card 
      v-for="ditm in darr"
      :key="ditm.id"
      :ditm="ditm"
    />
  </div>
</template>
<script>
import Card from './Card.vue'
export default {
  name: 'CardBox',
  props: ['darr'],
  components: {
    Card
  }
}
</script>
<style scoped lang="scss">
.cb-container {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>