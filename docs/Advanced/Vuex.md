### Change Event <small>Vuex Compatibility</small>

`vue-select` provides a `change` event. This function is passed the currently selected value(s) as it's only parameter.

This is very useful when integrating with Vuex, as it will allow your to trigger an action to update your vuex state object. Choose a callback and see it in action.


```html
<v-select v-on:change="consoleCallback" :options="countries"></v-select>
```

```js
methods: {
  consoleCallback(val) {
    console.dir(JSON.stringify(val))
  },
}
```
