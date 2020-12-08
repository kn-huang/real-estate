import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import UUID from "vue-uuid";

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = 'http://www.json-generator.com/api/json/get/bTLZcsoUGG?indent=2'

Vue.use(UUID)

new Vue({
  render: h => h(App),
}).$mount('#app')
