import Vue from 'vue'
import Fuse from 'fuse.js'
import resource from 'vue-resource'
import vSelect from './components/Select.vue'
import countries from 'docs/data/advanced.js'
import debounce from 'lodash/debounce'
import fuseSearchOptions from './fuseSearchOptions'

Vue.use(resource)

Vue.component('v-select', vSelect)

Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    placeholder: "placeholder",
    value: null,
    options: countries,
    ajaxRes: [],
    fuseSearchOptions
  },
  methods: {
    search(search, loading) {
      loading(true);
      this.getRepositories(search, loading, this)
    },
    getRepositories: debounce((search, loading, vm) => {
      vm.$http.get(`https://api.github.com/search/repositories?q=${search}`).then(res => {
        vm.ajaxRes = res.data.items;
        loading(false)
      })
    }, 250),
    fuse({mutableOptions, search}) {
      return new Fuse(mutableOptions, {
        keys: ['title', 'author.firstName', 'author.lastName'],
      }).search(search);
    }
  }
});