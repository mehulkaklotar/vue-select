All of the text within the component has been wrapped within [slots](https://vuejs.org/v2/guide/components.html#Content-Distribution-with-Slots) and can be replaced in your app.

#### Loading Spinner

```html
<slot name="spinner">
	<div class="spinner" v-show="mutableLoading">Loading...</div>
</slot>
```

#### No Options Text

```html
<slot name="no-options">Sorry, no matching options.</slot>
```

For a full list of component slots, view the [slots API docs](Api/Slots.md).