## Change Log

### v3.2.1
  - remove `console.log` [#48](https://github.com/artemsky/vue-snotify/issues/48)
  
### v3.2.0
  - stop buttons event propagation [#37](https://github.com/artemsky/vue-snotify/issues/37)
  - added ability to hide icon`icon: false` [#28](https://github.com/artemsky/vue-snotify/issues/28)
  - back to SFC. Now with runtime-only build [#14](https://github.com/artemsky/vue-snotify/issues/14)

### v3.1.0
  - add variables namespace [#30](https://github.com/artemsky/vue-snotify/issues/30)
  - oneAtTime | preventDuplicates - add global config options [#28](https://github.com/artemsky/vue-snotify/issues/28)
  - add button custom className [#24](https://github.com/artemsky/vue-snotify/issues/24)
  - fix toastChanged event initialization [#20](https://github.com/artemsky/vue-snotify/issues/20)
  - bump dependencies

### v3.0.4
  - fix icons [#17](https://github.com/artemsky/vue-snotify/issues/15)
### v3.0.3
  - fix icons [#15](https://github.com/artemsky/vue-snotify/issues/15)
### v3.0.2
  - fix backdrop [#16](https://github.com/artemsky/vue-snotify/issues/16)
### v3.0.1
  - improve documentation
  - escape SVG icons for Safari, Firefox
### v3.0.0
- **Breaking changes -** [Look migration guide](https://artemsky.github.io/vue-snotify/documentation/essentials/upgrade.html)
- **Features**
  - [New Documentation](https://artemsky.github.io/vue-snotify/documentation) based on gitbook
  - Prompt input [validation](https://artemsky.github.io/vue-snotify/documentation/essentials/examples.html#prompt--validation)
  - New [callbacks](https://artemsky.github.io/vue-snotify/documentation/api/callbacks.html) with jQuery-like syntax
  - Reworked toast arguments ordering based on - see [function signatures](https://artemsky.github.io/vue-snotify/documentation/api/snotify.html)
  - Replaced all animations and icons to styles (now it more customizable up to you)
  - Add toast [default configuration](https://artemsky.github.io/vue-snotify/documentation/api/options.html)
  - Reworked toast `timeout` interval - now based on `requestAnimationFrame`

### v2.0.3
  - bump dependencies
  - [Fix `action is not a function` error](https://github.com/artemsky/vue-snotify/pull/3) by @grantcarthew

### v2.0.0
  - optimize typings
  - **[BREAKING CHANGE]** As most of you wanted this. I moved `SnotifyService` onto `Vue.prototype`. Now accessible only from to `Vue.$snotify // this.$snotify`
  - create CDN versions
  - add VueJS like [documentation](https://artemsky.github.io/vue-snotify/documentation)
### v1.1.0
  - add Typescript typings
  
### v1.0.1
  - fix ES module name

### v1.0.0
  - Ported from [Angular version](https://github.com/artemsky/ng-snotify/)
