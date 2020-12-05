<template>
  <div id="header" class="header-container">
    <div class="hr"></div>
    <div class="title">好房嚴選</div>
    <div class="hr"></div>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style scoped lang="scss">
.header-container {
  height: 15%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.hr {
  flex-grow: 1;
  height: 12px;
  background-image: repeating-linear-gradient( 45deg, #ffffff, #e1e1e1 1%);
}
.title {
  padding: 12px;
  font-size: 20px;
}
</style>