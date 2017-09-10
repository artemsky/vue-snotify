# Examples

* [Toasts](#toasts)
* [Callbacks](#callbacks)
* [Custom icon](#custom-icon)
* [Typescript app example](https://github.com/artemsky/vue-snotify-typescript-example)

### Toasts
#### Simple, Success, Info, Warning, Error
```javascript
this.$snotify.success('Example title!', 'Example body content', {
  timeout: 2000,
  showProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true
});
```
#### Async

###### Success
You should pass Promise of type SnotifyConfig to change some data or do some other actions  
```javascript
this.$snotify.async('This will resolve with success', 'Async toast 1',
  // You should pass Promise of type SnotifyConfig to change some data or do some other actions
  () => new Promise((resolve) => {
    setTimeout(() => resolve({
      title: 'Success',
      body: 'Example. Data loaded!',
      config: {
        closeOnClick: true,
        timeout: this.timeout,
        showProgressBar: true,
        pauseOnHover: true
      }
    }), this.timeout)
  })
);
```
###### Error

```javascript
this.$snotify.async('This will resolve with error', 'Async toast 2',
  // You should pass Promise of type SnotifyConfig to change some data or do some other actions
  () =>  new Promise((resolve, reject) => {
    setTimeout(() => reject({
      title: 'Error',
      body: 'Server error example!',
      config: {
        closeOnClick: true,
        timeout: this.timeout,
        showProgressBar: true,
        pauseOnHover: true,
      }
    }), this.timeout)
  })
);
```

#### Prompt
```javascript
this.$snotify.prompt('Example body content', 'Example title', {
  buttons: [
    {text: 'Yes', action: (toastId, text) => console.log('Said Yes: ' + text + ' ID: ' + toastId)},
    {text: 'No', action: (toastId, text) => { console.log('Said No: ' + text); this.$snotify.remove(toastId); }},
  ],
  placeholder: 'This is the example placeholder which you can pass'
});
```

#### Confirm
```javascript
this.$snotify.confirm('Example body content', 'Example title', {
  timeout: 5000,
  showProgressBar: true,
  closeOnClick: false,
  pauseOnHover: true,
  buttons: [
    {text: 'Yes', action: () => console.log('Clicked: Yes'), bold: false},
    {text: 'No', action: () => console.log('Clicked: No')},
    {text: 'Later', action: (toastId) => {console.log('Clicked: Later'); this.$snotify.remove(toastId); } },
    {text: 'Close', action: (toastId) => {console.log('Clicked: No'); this.$snotify.remove(toastId); }, bold: true},
  ]
});
```

### Callbacks

```javascript
this.$snotify.$on(SnotifyAction.mounted, (toast) => {
  console.log('[CALLBACK]: mounted', toast)
});
this.$snotify.$on(SnotifyAction.destroyed, (toast) => {
  console.log('[CALLBACK]: destroyed', toast)
});
this.$snotify.$on(SnotifyAction.beforeDestroy, (toast) => {
  console.log('[CALLBACK]: beforeDestroy', toast)
});
this.$snotify.$on(SnotifyAction.onInput, (toast, value) => {
  console.log('[CALLBACK]: onInput', toast, value)
});
this.$snotify.$on(SnotifyAction.onClick, (toast) => {
  console.log('[CALLBACK]: onClick', toast)
});
this.$snotify.$on(SnotifyAction.onHoverEnter, (toast) => {
  console.log('[CALLBACK]: onHoverEnter', toast)
});
this.$snotify.$on(SnotifyAction.onHoverLeave, (toast) => {
  console.log('[CALLBACK]: onHoverLeave', toast)
});
this.$snotify.$on(SnotifyAction.beforeShow, (toast) => {
  console.log('[CALLBACK]: beforeShow', toast)
});
this.$snotify.$on(SnotifyAction.shown, (toast) => {
  console.log('[CALLBACK]: shown', toast)
});
this.$snotify.$on(SnotifyAction.beforeHide, (toast) => {
  console.log('[CALLBACK]: beforeHide', toast)
});
this.$snotify.$on(SnotifyAction.hidden, (toast) => {
  console.log('[CALLBACK]: hidden', toast)
})
```

### Custom icon
Icon viewport is set to 48x48 pixels.
```javascript
this.$snotify.simple('Example body content', 'Example title!', {
  timeout: 2000,
  showProgressBar: false,
  closeOnClick: true,
  icon: 'assets/custom-svg.svg'
});
```

Of course you can pass an url, for example `http://placeholde.it/48x100` (this resource will generate us an image with 48x100 dimension).  
And apply `object-fit` to `.snotify-icon` class in your styles

```scss
.snotify-icon {
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-position: center;
}
```
