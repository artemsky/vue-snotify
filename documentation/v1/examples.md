# Examples

* [Toasts](#toasts)
* [Callbacks](#callbacks)
* [Custom icon](#custom-icon)

### Toasts
#### Simple, Success, Info, Warning, Error
```typescript
this.snotifyService.success('Example title!', 'Example body content', {
      timeout: 2000,
      showProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true
    });
```
#### Async

###### Observable
You should pass Promise or Observable of type SnotifyConfig to change some data or do some other actions  
More information how to work with observables:  
https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/create.md
```typescript
this.snotifyService.async('Example body content', 'Example title',
      Observable.create(observer => {
          setTimeout(() => {
            observer.next({
              body: 'Still loading.....',
            });
            }, 1000);

        // Change toast data
        setTimeout(() => {
          observer.next({
            title: 'Success',
            body: 'Example. Data loaded!',
            config: {
              closeOnClick: true,
              timeout: 5000,
              showProgressBar: true
            }
          });

          // Complete observer
          observer.complete();
        }, 5000);

          /* Or call error */
          // setTimeout(() => {
          //   observer.error({
          //     title: 'Error',
          //     body: 'Example. Error 404. Service not found',
          //   });
          // }, 6000);

        }
      )
    );
```
###### Promise

```typescript
this.snotifyService.async('Example body content', 'Example title',
      new Promise((resolve, reject) => {
        setTimeout(() => reject(), 1000);
        setTimeout(() => resolve(), 1500);
      })  
    );
```

#### Prompt
```typescript
this.snotifyService.prompt('Example body content', 'Example title', {
      buttons: [
        {text: 'Yes', action: (toastId, text) => console.log('Said Yes: ' + text + ' ID: ' + toastId)},
        {text: 'No', action: (toastId, text) => { console.log('Said No: ' + text); this.snotifyService.remove(toastId); }},
      ],
      placeholder: 'This is the example placeholder which you can pass'
    });
```

#### Confirm
```typescript
this.snotifyService.confirm('Example body content', 'Example title', {
      timeout: 5000,
      showProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      buttons: [
        {text: 'Yes', action: () => console.log('Clicked: Yes'), bold: false},
        {text: 'No', action: () => console.log('Clicked: No')},
        {text: 'Later', action: (toastId) => {console.log('Clicked: Later'); this.snotifyService.remove(toastId); } },
        {text: 'Close', action: (toastId) => {console.log('Clicked: No'); this.snotifyService.remove(toastId); }, bold: true},
      ]
    });
```

### Callbacks

```typescript
 this.snotifyService.onHoverEnter = (toast: SnotifyToast) => {
    console.log('Hover enter', toast);
 };

 this.snotifyService.onHoverLeave = (toast: SnotifyToast) => {
    console.log('Hover leave', toast);
 };
 
 this.snotifyService.onInput = (toast: SnotifyToast, value: string) => {
   console.log('On Input', value, toast);
 };
```

### Custom icon
Icon viewport is set to 48x48 pixels.
```typescript
this.snotifyService.simple('Example body content', 'Example title!', {
  timeout: 2000,
  showProgressBar: false,
  closeOnClick: true,
  icon: 'assets/custom-svg.svg'
});
```

Of course you can pass an url, for example `http://placeholde.it/48x100` (this resource will generate us an image with 48x100 dimension).  
And apply `object-fit` to `.snotify-icon` class in your styles

`styles.scss`
```scss
.snotify-icon {
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-position: center;
}
```
