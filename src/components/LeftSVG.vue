<template>
  <div
    id="left_svg"
    class="arrow"
    :style="css"
    @mouseover="mouseOver"
    @mouseleave="mouseLeave"
    @mousedown="mouseDown"
    @mouseup="mouseUp"
  >
    <div class="block-arrow" v-if="block"></div>
    <svg class="arrow-img" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
        <path d="M15.3765 24.6235L30.8055 40.0525C31.3163 40.5458 32.1302 40.5317 32.6235 40.0209C33.1048 39.5226 33.1048 38.7327 32.6235 38.2345L18.1035 23.7145L32.6235 9.19452C33.1255 8.69247 33.1255 7.87853 32.6235 7.37649C32.1214 6.87452 31.3075 6.87452 30.8055 7.37649L15.3765 22.8055C14.8745 23.3076 14.8745 24.1215 15.3765 24.6235Z" :fill="fill"/>
      </g>
      <defs>
        <filter id="filter0_d" x="9" y="2" width="30" height="45.4134" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="1"/>
          <feGaussianBlur :stdDeviation="shadow"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.22947 0 0 0 0 0.225631 0 0 0 0 0.225631 0 0 0 0.2 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
      </defs>
    </svg>
  </div>
</template>
<script>
export default {
  name: 'LeftSVG',
  props: ['block'],
  data () {
    return {
      shadow: 3,
      fill: '#cfcfcf',
      css: {
        cursor: 'pointer'
      }
    }
  },
  watch: {
    block: function () {
      if (this.block === true) {
        this.css.cursor = 'default';
      }
      else {
        this.css.cursor = 'pointer';
      }
    }
  },
  methods: {
    mouseOver () {
      if (this.block) { return; }
      this.fill = '#dfdfdf';
    },
    mouseLeave () {
      if (this.block) { return; }
      this.fill = '#cfcfcf';
    },
    mouseDown () {
      if (this.block) { return; }
      this.shadow = 1;
    },
    mouseUp () {
      if (this.block) { return; }
      this.shadow = 3;
      this.$emit( 'shift', 'left');
    }
  }
}
</script>
<style scoped lang="scss">
.arrow {
  width: 28px;
  height: 28px;
}
.block-arrow {
  width: 28px;
  height: 28px;
  background: #cfcfcf99;
  position: fixed;
  border-radius: 3px;
}
.arrow-img {
  width: 100%;
}
</style>