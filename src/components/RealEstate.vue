<template>
  <div id="real_estate" class="re-container" ref="re_container">
    <Arrow :direction="'left'" @shift="updateREArr" :unabled="unabled" />
    <Main :load="show_load" :darr="re_arr" :dlen="api_data.length" />
    <Arrow :direction="'right'" @shift="updateREArr" :unabled="unabled" />
  </div>
</template>
<script>
import Arrow from './Arrow.vue'
import Main from './Main.vue'
export default {
  name: 'RealEstate',
  components: {
    Arrow,
    Main
  },
  data () {
    return {
      show_load: true,
      api_data: [],
      re_arr: [],
      card_num: 0,
      start_idx: 0,
      end_idx: 0,
      unabled: ''
    }
  },
  created () {
    window.addEventListener("resize", this.updateCardNum);
  },
  async mounted () {
    try {
      this.unable = 'both';
      await this.callApi();
      await this.updateCardNum();
      this.show_load = false;
    }
    catch (e) {
      console.log(e);
    }
  },
  destryed () {
    window.removeEventListener("resize", this.updateCardNum);
  },
  watch: {
    card_num: function () {
      this.updateREArr('resize');
    }
  },
  methods: {
    async callApi () {
      try {
        let res = await this.axios.get();
        res.data.forEach(e => {
          e.id = this.$uuid.v4();
          this.api_data.push(e);
        });
      }
      catch (e) {
        console.log(e);
        throw 'callApi fail';
      }
    },
    updateCardNum () {
      let w = this.$refs.re_container.clientWidth;
      switch (w) {
        case 980:
          this.card_num = 5;
          break;
        case 780:
          this.card_num = 4;
          break;
        case 590:
          this.card_num = 3;
          break;
        case 400:
        default:
          this.card_num = 2;
          break;
      }
    },
    updateREArr (action) {
      //updata start and end idx
      if (action === 'resize') {
        this.end_idx = this.start_idx + this.card_num;
        if (this.end_idx > this.api_data.length) {
          this.end_idx = this.api_data.length;
          this.start_idx = this.end_idx - this.card_num;
        }
      }
      else if (action === 'left') {
        this.start_idx --;
        this.end_idx --;
      }
      else if (action === 'right') {
        this.start_idx ++;
        this.end_idx ++;
      }
      //update unabled arrow
      if (this.start_idx === 0) {
        this.unabled = 'left';
      }
      else if (this.end_idx === this.api_data.length) {
        this.unabled = 'right';
      }
      else {
        this.unabled = '';
      }
      //update re_arr
      this.re_arr = this.api_data.slice( this.start_idx, this.end_idx);
    }
  }
}
</script>
<style scoped lang="scss">
@media (max-width: 1000px) {
  .re-container {
    width: 780px !important;
  }
}
@media (max-width: 800px) {
  .re-container {
    width: 590px !important;
  }
}
@media (max-width: 600px) {
  .re-container {
    width: 410px !important;
  }
}
.re-container {
  width: 980px;
  height: 320px;
  display: flex;
  flex-direction: row;
}
</style>