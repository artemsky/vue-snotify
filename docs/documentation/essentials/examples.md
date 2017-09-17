# Examples

> [Typescript app example](https://github.com/artemsky/vue-snotify-typescript-example)

### Toasts
#### Simple, Success, Info, Warning, Error
```js
vm.$snotify.success('Example title!', 'Example body content', {
  timeout: 2000,
  showProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true
});
```
#### Async

###### Success
You should pass Promise of type SnotifyConfig to change some data or do some other actions  
```js
vm.$snotify.async('This will resolve with success', 'Async toast 1',
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

```js
vm.$snotify.async('This will resolve with error', 'Async toast 2',
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
```js
vm.$snotify.prompt('Example body content', 'Example title', {
  buttons: [
    {text: 'Yes', action: (toastId, text) => console.log('Said Yes: ' + text + ' ID: ' + toastId)},
    {text: 'No', action: (toastId, text) => { console.log('Said No: ' + text); vm.$snotify.remove(toastId); }},
  ],
  placeholder: 'This is the example placeholder which you can pass'
});
```

#### Confirm
```js
vm.$snotify.confirm('Example body content', 'Example title', {
  timeout: 5000,
  showProgressBar: true,
  closeOnClick: false,
  pauseOnHover: true,
  buttons: [
    {text: 'Yes', action: () => console.log('Clicked: Yes'), bold: false},
    {text: 'No', action: () => console.log('Clicked: No')},
    {text: 'Later', action: (toastId) => {console.log('Clicked: Later'); vm.$snotify.remove(toastId); } },
    {text: 'Close', action: (toastId) => {console.log('Clicked: No'); vm.$snotify.remove(toastId); }, bold: true},
  ]
});
```

#### Html

```js
vm.$snotify.html(`<div class="snotifyToast__title"><b>Html Bold Title</b></div>
  <div class="snotifyToast__body"><i>Html</i> <b>toast</b> <u>content</u></div> `, {
  timeout: 5000,
  showProgressBar: true,
  closeOnClick: false,
  pauseOnHover: true,
});
```

### Callbacks

```javascript
vm.$snotify.$on(SnotifyAction.mounted, (toast) => {
  console.log('[CALLBACK]: mounted', toast)
});
vm.$snotify.$on(SnotifyAction.destroyed, (toast) => {
  console.log('[CALLBACK]: destroyed', toast)
});
vm.$snotify.$on(SnotifyAction.beforeDestroy, (toast) => {
  console.log('[CALLBACK]: beforeDestroy', toast)
});
vm.$snotify.$on(SnotifyAction.onInput, (toast, value) => {
  console.log('[CALLBACK]: onInput', toast, value)
});
vm.$snotify.$on(SnotifyAction.onClick, (toast) => {
  console.log('[CALLBACK]: onClick', toast)
});
vm.$snotify.$on(SnotifyAction.onHoverEnter, (toast) => {
  console.log('[CALLBACK]: onHoverEnter', toast)
});
vm.$snotify.$on(SnotifyAction.onHoverLeave, (toast) => {
  console.log('[CALLBACK]: onHoverLeave', toast)
});
vm.$snotify.$on(SnotifyAction.beforeShow, (toast) => {
  console.log('[CALLBACK]: beforeShow', toast)
});
vm.$snotify.$on(SnotifyAction.shown, (toast) => {
  console.log('[CALLBACK]: shown', toast)
});
vm.$snotify.$on(SnotifyAction.beforeHide, (toast) => {
  console.log('[CALLBACK]: beforeHide', toast)
});
vm.$snotify.$on(SnotifyAction.hidden, (toast) => {
  console.log('[CALLBACK]: hidden', toast)
})
```

### Custom icon
Icon viewport is set to 48x48 pixels.
```javascript
vm.$snotify.simple('Example body content', 'Example title!', {
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
