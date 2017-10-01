## Vue Compatibility
-  `vue ~2.0` use `vue-select ~2.0`
-  `vue ~1.0` use `vue-select ~1.0`

## NPM Based WorkFlows
```bash
$ npm install vue-select
```

## Browser Globals

Include `vue` & `vue-select.js` - I recommend using [unpkg.com](https://unpkg.com/#/).

```html
<!-- include VueJS first -->
<script src="https://unpkg.com/vue@latest"></script>

<!-- use the latest release -->
<script src="https://unpkg.com/vue-select@latest"></script>
<!-- or point to a specific release -->
<script src="https://unpkg.com/vue-select@1.30"></script>
```
Then register the component in your javascript:

```js
Vue.component('v-select', VueSelect.VueSelect);
```

From there you can use as normal. Here's an [example on JSBin](http://jsbin.com/saxaru/5/edit?html,js,output).
