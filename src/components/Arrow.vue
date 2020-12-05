<template>
  <div id="arrow" class="arrow-container">
    <LeftSVG v-if="direction === 'left'" @shift="shift" :block="unabled === 'left'" />
    <RightSVG v-if="direction === 'right'" @shift="shift" :block="unabled === 'right'" />
  </div>
</template>
<script>
import LeftSVG from './LeftSVG.vue'
import RightSVG from './RightSVG.vue'
export default {
  name: 'Arrow',
  props: [ 'direction', 'unabled'],
  components: {
    LeftSVG,
    RightSVG
  },
  methods: {
    shift (d) {
      this.$emit( 'shift', d);
    }
  }
}
</script>
<style scoped lang="scss">
.arrow-container {
  display: flex;
  align-items: center;
}
</style>