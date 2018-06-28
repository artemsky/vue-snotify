# Examples

### Toasts
#### Simple, Success, Info, Warning, Error
```typescript
vm.$snotify.success('Example body content');
vm.$snotify.success('Example body content', 'Example Title');
vm.$snotify.success('Example body content', {
  timeout: 2000,
  showProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true
});
vm.$snotify.success('Example body content', 'Example title', {
  timeout: 2000,
  showProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true
});
```
#### Async

###### Error
You should pass Promise of type Snotify to change some data or do some other actions  
```typescript
    this.$snotify.async('Called with promise', 'Error async', () => new Promise((resolve, reject) => {
      setTimeout(() => reject({
        title: 'Error!!!',
        body: 'We got an example error!',
        config: {
          closeOnClick: true
        }
      }), 2000);
    }));
```
###### Success

```typescript
    this.$snotify.async('Called with promise', 'Success async', () => new Promise((resolve, reject) => {
      setTimeout(() => resolve({
        title: 'Success!!!',
        body: 'We got an example success!',
        config: {
          closeOnClick: true
        }
      }), 2000);
    }));
```

#### Prompt & Validation
```typescript
const yesAction = (toast: SnotifyToast) => {
  if (!toast.value.match('snotify')) {
    toast.valid = false;
    return false;
  } else {
    toast.valid = true; // default value
    vm.$snotify.remove(toast.id)
  }
}

const noAction = (toast: SnotifyToast) => {
  vm.$snotify.remove(toast.id) // default
}

vm.$snotify.prompt('Example body content', 'Example title', {
  buttons: [
    {text: 'Yes', action: yesAction, bold: true },
    {text: 'No', action: noAction },
  ],
  placeholder: 'This is the example placeholder which you can pass'
});
```

#### Confirm
```typescript
vm.$snotify.confirm('Example body content', 'Example title', {
  timeout: 5000,
  showProgressBar: true,
  closeOnClick: false,
  pauseOnHover: true,
  buttons: [
    {text: 'Yes', action: () => console.log('Clicked: Yes'), bold: false},
    {text: 'No', action: () => console.log('Clicked: No')},
    {text: 'Later', action: (toast) => {console.log('Clicked: Later'); vm.$snotify.remove(toast.id); } },
    {text: 'Close', action: (toast) => {console.log('Clicked: No'); vm.$snotify.remove(toast.id); }, bold: true},
  ]
});
```

#### Html

```typescript
vm.$snotify.html(`<div class="snotifyToast__title"><b>Html Bold Title</b></div>
  <div class="snotifyToast__body"><i>Html</i> <b>toast</b> <u>content</u></div> `, {
  timeout: 5000,
  showProgressBar: true,
  closeOnClick: false,
  pauseOnHover: true,
});
```

### Callbacks

```typescript
toast.on('mounted', (toast) => {
  console.log('[CALLBACK]: mounted', toast)
});

toast.on('input', (toast) => {
  if (!toast.value.match('snotify')) {
      toast.valid = false;
      return false;
    } else {
      toast.valid = true; // default value
      vm.$snotify.remove(toast.id)
    }
});
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
