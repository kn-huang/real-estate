<template>
  <div id="app">
    <RealEstate />
  </div>
</template>

<script>
import RealEstate from './components/RealEstate.vue'
export default {
  name: 'App',
  components: {
    RealEstate
  }
}
</script>

<style lang="scss">
* {
  font-family: 'Microsoft JhengHei', sans-serif;
}
body {
  margin: 0;
}
</style>
