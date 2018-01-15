### RTL

vue-select supports RTL using the standard HTML API using the `dir` attribute.

```html
<v-select dir="rtl"></v-select>
```

The `dir` attribute accepts the same values as the [HTML spec](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir): `rtl`,`ltr`, and `auto`.

### Component Text

All of the text within the component has been wrapped within [slots](https://vuejs.org/v2/guide/components.html#Content-Distribution-with-Slots) and can be replaced in your app.


##### Loading Spinner

```html
<slot name="spinner">
	<div class="spinner" v-show="mutableLoading">Loading...</div>
</slot>
```

##### No Options Text

```html
<slot name="no-options">Sorry, no matching options.</slot>
```
For a full list of component slots, view the [slots API docs](Api/Slots.md).

[](codepen://sagalbot/oZmLVN?height=250)