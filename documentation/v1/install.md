# Installation

###### NPM 5
`npm install vue-snotify`
###### yarn
`yarn add vue-snotify`


#### Import Plugin
Use `Snotify`, into your core App.
```javascript
import Vue from 'vue';
import App from './App.vue';
import Snotify from 'vue-snotify'; // 1. Import Snotify
// 2. Use Snotify
// You can pass {config, options} as second argument. Look - setConfig in [API - Others] section 
Vue.use(Snotify) 

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

```

#### Add selector
Add `vue-snotify` component to you root component

```html
<template>
<div>
  <h1>My app!</h1>
  <vue-snotify></vue-snotify>
</div>
</template>
```

#### Import Styles

You can find this information - [here](styling.md)


#### Use it
```javascript
export default {
  methods: {
    onSuccess () {
      this.$snotify.success('Example body', 'Example title');
    }
  }
}
```

