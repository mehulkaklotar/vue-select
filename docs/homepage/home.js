import Vue from 'vue'
import vSelect from '../../src/components/Select'

import './assets/scss/home.scss'

Vue.component('v-select', vSelect);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data() {
    return {
      loading: false,
      options: [
        {
          title: 'Read the Docs',
          icon: 'octicon-book',
          url: 'https://codeclimate.com/github/sagalbot/vue-select'
        },
        {
          title: 'View on GitHub',
          icon: 'octicon-mark-github',
          url: 'https://codeclimate.com/github/sagalbot/vue-select'
        },
        {
          title: 'View on NPM',
          icon: 'octicon-database',
          url: 'https://codeclimate.com/github/sagalbot/vue-select'
        },
        {
          title: 'View Code Climate Analysis',
          icon: 'octicon-graph',
          url: 'https://codeclimate.com/github/sagalbot/vue-select'
        },
        {
          title: 'View Codepen Examples',
          icon: 'octicon-pencil',
          url: 'https://codeclimate.com/github/sagalbot/vue-select'
        },
      ]
    }
  },
  methods: {
    onInput(option) {
      this.loading = true;
      this.go(option.url);
    },
    go(url) {
      window.location = url;
    }
  }
});
