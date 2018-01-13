import Vue from 'vue'
import vSelect from '../../src/components/Select'

import './assets/scss/home.scss'

Vue.component('v-select', vSelect);

/* eslint-disable no-new */
new Vue({
  el: '#app'
});
