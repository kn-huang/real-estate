<template>
  <div id="card_box" :style="css" class="cb-container">
    <div
      v-if="load"
      class="load-container"
    >
      <div class="load-spin"></div>
    </div>
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
  props: [ 'darr', 'load'],
  components: {
    Card
  },
  data () {
    return {
      css: {
        justifyContent: 'center'
      }
    }
  },
  watch: {
    load: function () {
      if (this.load) {
        this.css.justifyContent = 'center';
      }
      else {
        this.css.justifyContent = 'space-between';
      }
    }
  }
}
</script>
<style scoped lang="scss">
.cb-container {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
}
.load-container {
  align-self: center;
  width: 36px;
  height: 36px;
  padding: 5px;
  display: flex;
}
.load-spin {
  flex-grow: 1;
  border: solid 2px rgba( 0, 0, 0, 0.08);
  border-top-color: rgba( 0, 0, 0, 0.75);
  border-radius: 50%;
  animation: spinner .7s infinite linear;
}
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>