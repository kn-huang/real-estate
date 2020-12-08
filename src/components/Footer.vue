<template>
  <div id="footer" class="footer-container">
    <div class="text">共<span class="number">{{ dlen }}</span>筆</div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  props: ['dlen']
}
</script>
<style scoped lang="scss">
.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.text {
  font-size: 12px;
  color: #848484;
  padding: 4px 0px 0px;
}
.number {
  padding: 0px 2px;
  font-family: consolas, monospace;
  font-size: 14px;
}
</style>