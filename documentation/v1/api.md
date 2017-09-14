# API

* [SnotifyService](#snotifyservice)
  * [Methods](#methods)
  * [Callbacks](#callbacks)
* [Enums](#enums)
  * [SnotifyAction](#snotifyaction)
  * [SnotifyPosition](#snotifyposition)
  * [SnotifyType](#snotifytype)
* [Interfaces](#interfaces)
  * [SnotifyConfig](#snotifyconfig)
  * [SnotifyOptions](#snotifyoptions)
  * [SnotifyButton](#snotifybutton)
  * [Snotify](#snotify)
  * [SnotifyAnimate](#snotifyanimate)

##### Definitions

| Definition | Description                                                                      |
|------------|----------------------------------------------------------------------------------|
| `:`        | Parameter type. In case it stands after method. It means - return parameter type |
| `?`        | Optional parameter                                                               |

## SnotifyService
### Methods

#### Toasts

###### All toast methods returns toast `id`
> Toast notifications with different classNames and icons. `.snotify-${METHOD_NAME}`
```typescript
simple(body: string, title?: string, config?: SnotifyConfig): number
success(body: string, title?: string, config?: SnotifyConfig): number
info(body: string, title?: string, config?: SnotifyConfig): number
warning(body: string, title?: string, config?: SnotifyConfig): number
error(body: string, title?: string, config?: SnotifyConfig): number
```

> Toast notification of style - *info* and loading spinner. It changes style depending on success or error `promise`.  
> Example - [here](examples#async)

`async(body: string, title: string, action: () => Promise<{body: string, title?: string, config?: SnotifyConfig}>): number`

> Toast notification of style - *confirm* with buttons(configurable)

`confirm(body: string, title: string, config: SnotifyConfig): number`

> Toast notification of style - *confirm* with buttons(configurable) and input field

`prompt(body: string, title?: string, config?: SnotifyConfig): number`

> Toast notification of custom style(default - Simple). Renders your html string inside `.snotifyToast__inner`

`html(html: string | SafeHtml, config?: SnotifyConfig): number`


#### Other

`setConfig(config: SnotifyConfig, options?: SnotifyOptions): void`
> Set global configuration object

`get(id: number): SnotifyToast`
> Returns `SnotifyToast` object by id

`remove(id?: number): void`
> If `id` passed, removes toast instantly. If no param passed it's the same as `clear()`
> If you want to remove toast with exit animation use `SnotifyService.$emit('remove', id)`

`clear(): void`
> Clear notifications array

### Callbacks

**Subscribe** - `SnotifyService` - `SnotifyService.$on(event, callback)`  
**Callback** - `callback(toast: SnotifyToast, value: string)`. `value` returned in case of `Prompt` type.

Event list - [here](#snotifyaction)


## Enums

***

### SnotifyAction

```javascript
  mounted: 'mounted',
  destroyed: 'destroyed',
  beforeDestroy: 'beforeDestroy',
  onInput: 'onInput',
  onClick: 'onClick',
  onHoverEnter: 'onHoverEnter',
  onHoverLeave: 'onHoverLeave',
  beforeShow: 'beforeShow',
  shown: 'shown',
  beforeHide: 'beforeHide',
  hidden: 'hidden'
```

### SnotifyPosition

```javascript
  leftTop: 'leftTop',
  leftCenter: 'leftCenter',
  leftBottom: 'leftBottom',

  rightTop: 'rightTop',
  rightCenter: 'rightCenter',
  rightBottom: 'rightBottom',

  centerTop: 'centerTop',
  centerCenter: 'centerCenter',
  centerBottom: 'centerBottom'
```

### SnotifyType

```javascript
  SIMPLE: 'simple',
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
  ASYNC: 'async',
  CONFIRM: 'confirm',
  PROMPT: 'prompt'
```


## Interfaces

***

### SnotifyConfig 

> #### timeout?  
**Type:** `Number`  
**Default:** `2000`  
**Description:** Toast timeout in milliseconds. 0 - Disable timeout

> #### showProgressBar?
**Type:** `Boolean`  
**Default:** `true`  
**Description:** Enable/Disable progress bar. Disabled if timeout is 0.

> #### type?
**Type:** [SnotifyType](#snotifytype)  
**Default:** Depends on toast type - success | async | error | etc...  
**Description:** Type of toast, affects toast style. It's not recommended to change it.

> #### closeOnClick?
**Type:** `Boolean`  
**Default:** `true`  
**Description:** Enable/Disable toast close by clicking on it

> #### pauseOnHover?
**Type:** `Boolean`  
**Default:** `true`  
**Description:** Enable/Disable pause on mouse enter

> #### buttons?
**Type:** [SnotifyButton](#snotifybutton)[]  
**Default:**  
```typescript
[
  {text: 'Ok', action: null, bold: true},
  {text: 'Cancel', action: () => this.remove(id), bold: false},
]
// this.remove(id) - used inside service;
```  
**Description:** Buttons config for Confirmation & Prompt types


> #### placeholder?
**Type:** `String`  
**Default:** Default: `Enter answer here...`  
**Description:** Placeholder for Prompt toast

> #### titleMaxLength?
**Type:** `Number`  
**Default:** `16`  
**Description:** Toast title maximum length

> #### bodyMaxLength?
**Type:** `Number`  
**Default:** `150`  
**Description:** Toast body maximum length

> #### icon?
**Type:** `string`  
**Default:** null  
**Description:** Custom icon url/path.

> #### backdrop?
**Type:** `number`  
**Default:** -1  
**Description:** Backdrop opacity. Range - `0.0 - 1.0`. Disabled `-1` 

> #### animation?
**Type:** [SnotifyAnimate](#snotifyanimate)  
**Default:** -1  
**Description:** Backdrop opacity. Range - `0.0 - 1.0`. Disabled `-1` 

> #### html?
**Type:** `string`  
**Default:** null  
**Description:** Toast inner html. When set, overrides toast content.

> #### position?
**Type:** [SnotifyPosition](#snotifyposition)  
**Default:** null  
**Description:** Toasts position on screen.

***
### SnotifyOptions

> #### maxOnScreen?
**Type:** `Number`  
**Default:** `8`  
**Description:** Max toast items on screen.  
For example you want to display 3 toasts max at the time. But for some purposes your system calls it 10 times.  
With this option, 3 toast will be shown. And after each of it will disappear, new toast from the queue will be shown.

> #### maxAtPosition?
**Type:** `Number`  
**Default:** `8`  
**Description:** Max toast items at position.  
Same as `maxOnScreen` but affects only current toast position block. For example you want to display 3 toasts max at the rightBottom. But for some purposes your system calls it 10 times.  
With this option, 3 toast will be shown. And after each of it will disappear, new toast from the queue will be shown.

> #### newOnTop?
**Type:** `Boolean`  
**Default:** `true`  
**Description:** Should new items come from top or bottom side.  
This option created for styling purposes.  
For example, if your toast position is TOP-RIGHT. It's not very nice, when items comes from top and pulls down all other toasts

> #### position?
**Type:** [SnotifyPosition](#snotifyposition)  
**Default:** `right_bottom`  
**Description:** Toasts position on screen

> #### maxHeight?
**Type:** `Number`  
**Default:** `300`  
**Description:** Toast maximum height in pixels

***

### SnotifyButton

> #### text
**Type:** `String`  
**Default:** `2000`  
**Description:** Toast timeout in milliseconds. 0 - Disable timeout

> #### action?: (id?: number, text?: string) => void
**Type:** `Callback`  
**Default:** `null`  
**Description:** Action which will be called after button click.

> #### bold?
**Type:** `Boolean`  
**Default:** Yes - `true` | No - `false`  
**Description:** Make button text bold or not

***

### Snotify

> #### title
**Type:** `String`  
**Description:** Toast Title

> #### body
**Type:** `String`  
**Description:** Toast message

> #### config?
**Type:** [SnotifyConfig](#snotifyconfig)  
**Description:** Toast configuration object
***

### SnotifyAnimate

> #### enter
**Type:** `'fadeInLeft' | 'fadeInRight' | 'fadeInUp' | 'fadeInDown' | string;`  
**Description:** In animation

> #### exit
**Type:** `'fadeOutLeft' | 'fadeOutRight' | 'fadeOutUp' | 'fadeOutDown' | string;`  
**Description:** Out animation

> #### time?
**Type:** `Number`  
**Default:** `400`  
**Description:** Animation time in ms


###### Defaults

```typescript
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


_____
##### `{SnotifyPosition, SnotifyAction, SnotifyType, SnotifyService}` can be imported from `vue-snotify` 
