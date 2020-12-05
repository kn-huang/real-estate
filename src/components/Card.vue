<template>
  <div id="card" class="card-container">
    <div class="card-block card-img" :style="css"></div>
    <div class="card-block card-info">
      <Info :ditm="ditm" />
    </div>
  </div>
</template>
<script>
import Info from './Info.vue'
export default {
  name: 'Card',
  props: ['ditm'],
  components: {
    Info
  },
  data () {
    return {
      css: {
        'background-image': ''
      }
    }
  },
  created () {
    this.css['background-image'] = 'url("' + this.ditm.CoverPic + '")';
  }
}
</script>
<style scoped lang="scss">
.card-container {
  width: 168px;
  background: #f8f8f8;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}
.card-block {
  flex-basis: 0;
  flex-grow: 1;
}
.card-img {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.card-info {
  display: flex;
  flex-direction: row;
}
.image {
  width: 100%;
}
</style>