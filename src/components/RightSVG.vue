<template>
  <div
    id="right_svg"
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
        <path d="M32.6235 22.7899L17.1945 7.36091C16.6837 6.8676 15.8698 6.88177 15.3765 7.39255C14.8952 7.89083 14.8952 8.68074 15.3765 9.17894L29.8965 23.6989L15.3765 38.2189C14.8745 38.721 14.8745 39.5349 15.3765 40.037C15.8786 40.5389 16.6925 40.5389 17.1945 40.037L32.6235 24.608C33.1255 24.1058 33.1255 23.292 32.6235 22.7899Z" :fill="fill"/>
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
  name: 'RightSVG',
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
      this.$emit( 'shift', 'right');
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