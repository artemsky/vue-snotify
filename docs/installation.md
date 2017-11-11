# Installation

### Direct Download / CDN

[https://unpkg.com/vue-snotify@latest](https://unpkg.com/vue-snotify@latest)

<!--email_off-->
[Unpkg.com](https://unpkg.com) provides npm-based CDN links. The above link will always point to the latest release on npm. You can also use a specific version/tag via URLs like `https://unpkg.com/vue-snotify@2.0.1/vue-snotify.min.js`.
<!--/email_off-->

Include `vue-snotify` after Vue and it will install itself automatically:

``` html
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-snotify.js"></script>
```

### NPM

###### NPM 5
`npm install vue-snotify`
###### YARN
`yarn add vue-snotify`

When used with a module system, you must explicitly install the vue-snotify via `Vue.use()`:

#### Import Plugin 
###### You don't need to do this step when using global script tags.
Use `Snotify`, into your core App.
```javascript
import Snotify from 'vue-snotify'; // 1. Import Snotify
// 2. Use Snotify
// You can pass {config, options} as second argument. See the next example or setConfig in [API] section 
Vue.use(Snotify)

```

Here is a more advanced example including passing config and options:
```javascript
// Place the following into its own module file for easy import.
import Vue from 'vue'
import Snotify, { SnotifyPosition } from 'vue-snotify'

const options = {
  toast: {
    position: SnotifyPosition.rightTop
  }
}

Vue.use(Snotify, options)

```

#### Add selector
Add `vue-snotify` component to your template

```html
<template>
  <div>
    <h1>My app!</h1>
    <vue-snotify></vue-snotify>
  </div>
</template>
```


#### Import Styles

You can find this information - [here](essentials/styling.md)

