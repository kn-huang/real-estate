<template>
  <div id="info" class="info-container">
    <div class="normal-text"> {{ ditm.Address }} </div>
    <div class="name-text"> {{ ditm.CaseName }} </div>
    <div class="bottom-block">
      <div class="row-container">
        <div class="normal-text"> {{ ditm.Patterns }} </div>
        <div class="normal-text"> {{ ditm.RegArea }}坪 </div>
      </div>
      <div class="row-container">
        <div class="normal-text line-through"> {{ ditm.OriginalPrice }}萬 </div>
        <div class="normal-text row-text"> <div class="red-text"> {{ ditm.Price }} </div>萬 </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Info',
  props: ['ditm']
}
</script>
<style scoped lang="scss">
.info-container {
  padding: 10px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.normal-text {
  color: #848484;
  font-size: 12px;
}
.name-text {
  padding: 2px 0px;
  font-size: 16px;
  font-weight: 600;
}
.bottom-block {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.row-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}
.line-through {
  text-decoration: line-through;
}
.row-text {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}
.red-text {
  color: #ff3939;
  font-size: 18px;
}
</style>