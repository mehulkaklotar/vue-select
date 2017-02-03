# vue-select [![Build Status](https://travis-ci.org/sagalbot/vue-select.svg?branch=master)](https://travis-ci.org/sagalbot/vue-select) [![Code Coverage](https://img.shields.io/codeclimate/coverage/github/sagalbot/vue-select.svg?style=flat-square)](https://codeclimate.com/github/sagalbot/vue-select) [![No Dependencies](https://img.shields.io/gemnasium/sagalbot/vue-select.svg?style=flat-square)](https://gemnasium.com/github.com/sagalbot/vue-select) ![MIT License](https://img.shields.io/github/license/sagalbot/vue-select.svg?style=flat-square) ![Current Release](https://img.shields.io/github/release/sagalbot/vue-select.svg?style=flat-square)

> A native Vue.js select component that provides similar functionality to Select2 without the overhead of jQuery.

#### Features
- AJAX Support
- Tagging
- No JS Dependenciesp
- List Filtering/Searching
- Supports Vuex
- Select Single/Multiple Options
- Bootstrap Friendly Markup
- +95% Test Coverage

## Documentation
- [Demo & Docs](http://sagalbot.github.io/vue-select/)
- [Live Example on JSBin](http://jsbin.com/saxaru/5/edit?html,js,output)

## Install / Usage

**Vue Compatability**
Version `2.x` of vue-select is compatible with Vue `2.x`. If you are on Vue `1.x`, you will need to use `1.x` of vue-select.

#### NPM

``` bash
$ npm install vue-select
```

```html
<template>
   <div>
      <v-select v-model="select" :options="options"></v-select>
   </div>
</template>

<script>
import vSelect from 'vue-select'
export default {
  components: {vSelect},
  data() {
     return {
        selected: null,
        options: ['foo','bar','baz']
     }
  }
}
</script>
```

#### Browser Globals `v1.3.0+`

Just include `vue` & `vue-select.js` - I recommend using [unpkg](https://unpkg.com/#/).

```html
<!-- use the latest release -->
<script src="https://unpkg.com/vue-select@latest"></script>
<!-- or point to a specific release -->
<script src="https://unpkg.com/vue-select@1.3.3"></script>
```
Then register the component in your javascript:

```js
Vue.component('v-select', VueSelect.VueSelect);
```

From there you can use as normal. Here's an [example on JSBin](http://jsbin.com/saxaru/5/edit?html,js,output).

**For more information, please visit the [documentation](https://sagalbot.github.io/vue-select)
