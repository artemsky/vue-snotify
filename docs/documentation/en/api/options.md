# Config & Options

> `SnotifyConfig` object - changes single toast config.  
> But if it passed into [vm.$snotify.setConfig](snotify.md#other) it changes default toast config.
 
 `SnotifyOptions` object - changes default options.
 </p>
  
## SnotifyConfig

### timeout

- type: `number`
- default: `2000`
  > Toast timeout in milliseconds. 0 - Disable timeout
  
### showProgressBar

- type: `boolean`
- default: `true`
  > Enable/Disable progress bar. Disabled by default if timeout is 0.
  
### type

- type: [SnotifyType](interfaces.md#snotifytype)
  > Depends on toast type - success | async | error | etc...
  > Actually it changes only toast class name
  
### closeOnClick

- type: `boolean`
- default: `true`
  > Enable/Disable close action by clicking on toast
  
### pauseOnHover

- type: `boolean`
- default: `true`
  > Enable/Disable pause on hover action
  
### buttons

- type: Array<[SnotifyButton](interfaces.md#snotifybutton)>
- default: 
  ```js
    [
      {text: 'Ok', action: null, bold: true},
      {text: 'Cancel', action: () => this.remove(id), bold: false},
    ]
    // this.remove(id) - removes toast
  ```
  > Buttons config for Confirmation & Prompt types
  > You can pass, unlimited number of buttons. Just be sure you can handle it)
  
### placeholder

- type: `string`
- default: `"Enter answer here..."`
  > Placeholder for Prompt toast
  
### titleMaxLength

- type: `number`
- default: `16`
  > Toast title maximum length
  
### bodyMaxLength

- type: `number`
- default: `150`
  > Toast body maximum length
  
### icon

- type: `string`
- default: `null`
  > Custom icon url.
  ```js
    const icon = `https://placehold.it/48x100`;
    vm.$snotify.simple('Example body', null, {
      icon: icon
    });
  ```
  
### backdrop

- type: `number`
- default: `-1`
  > Backdrop opacity in range from `0.0` to `1.0`. 
  > Disabled `-1` 
  
### animation

- type: [SnotifyAnimate](interfaces.md#snotifyanimate)  
- default: 
  ```js
  case SnotifyPosition.leftTop:
    {enter: 'fadeInLeft', exit: 'fadeOutLeft', time: 400}
  case SnotifyPosition.leftCenter:
    {enter: 'fadeInLeft', exit: 'fadeOutLeft', time: 400}
  case SnotifyPosition.leftBottom:
    {enter: 'fadeInLeft', exit: 'fadeOutLeft', time: 400}
  
  case SnotifyPosition.rightTop:
    {enter: 'fadeInRight', exit: 'fadeOutRight', time: 400}
  case SnotifyPosition.rightCenter:
    {enter: 'fadeInRight', exit: 'fadeOutRight', time: 400}
  case SnotifyPosition.rightBottom:
    {enter: 'fadeInRight', exit: 'fadeOutRight', time: 400}
  
  case SnotifyPosition.centerTop:
    {enter: 'fadeInDown', exit: 'fadeOutUp', time: 400}
  case SnotifyPosition.centerCenter:
    {enter: 'fadeIn', exit: 'fadeOut', time: 400}
  case SnotifyPosition.centerBottom:
    {enter: 'fadeInUp', exit: 'fadeOutDown', time: 400}
  ```
 > Animation configuration object. Time in milliseconds
  
### html

- type: `string`
- default: `null`
  > Toast inner html. When set, overrides toast content.
  
### position

- type: [SnotifyPosition](enums.md#snotifyposition)
- default: `150`
  > Toast body maximum length
  
  
## SnotifyOptions
  
### maxOnScreen

- type: `number`
- default: `8`
  > Max toast items on screen.  
  > For example you want to display 3 toasts max at the time. But for some purposes your system calls it 10 times.  
  > With this option, 8 toast will be shown. And after each of it will disappear, new toast from the queue will be shown.


### maxAtPosition

- type: `number`
- default: `8`
  > Max toast items at position.    
    Same as `maxOnScreen` but affects only current toast position block.

  
### newOnTop

- type: `true`
- default: `150`
  > Should new items come from top or bottom side.   
  > This option created for styling purposes.  
  > For example, if your toast position is TOP-RIGHT. It's not very nice, when items comes from top and pulls down all other toasts
 
  
### position

- type: [SnotifyPosition](interfaces.md#snotifyposition)
- default: `rightBottom`
  > Toasts position on screen
  
### maxHeight

- type: `number`
- default: `300`
  > Toast maximum height in pixels
