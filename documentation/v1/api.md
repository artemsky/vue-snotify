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
  * [SnotifyInfo](#snotifyinfo)
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
```javascript
simple((body: string, title?: string, config?: SnotifyConfig): number
success(body: string, title?: string, config?: SnotifyConfig): number
info(body: string, title?: string, config?: SnotifyConfig): number
warning(body: string, title?: string, config?: SnotifyConfig): number
error(body: string, title?: string, config?: SnotifyConfig): number
```

> Toast notification of style - *info* and loading spinner. It changes style depending on success or error `promise|observable`.  
> You can change displayed data during the loading process using Observable.next()

`async(body: string, title: string, action: Promise<SnotifyConfig> | Observable<SnotifyConfig>): number`

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

`remove(id?: number, remove?: boolean): void`
> If `id` passed, emits toast remove animation, if `id` & `remove` passed, removes toast from notifications array instantly. If no param passed it is the same as `clear()`

`clear(): void`
> Clear notifications array

### Callbacks

`onInit(toast?: SnotifyToast) => void`
> Emits on toast has been initialized

`onHoverEnter(toast?: SnotifyToast) => void`
> Emits on `mouseenter`

`onHoverLeave(toast?: SnotifyToast) => void`
> Emits on `mouseleave`

`onClick(toast?: SnotifyToast) => void`
> Emits on `click`

`beforeDestroy(toast?: SnotifyToast) => void`
> Emits before toast starts to hide

`afterDestroy(toast?: SnotifyToast) => void`
> Emits after toast has been hidden

`onInput: (toast?: SnotifyToast, value?: string) => void`
> Emits at `prompt` input value change


## Enums

***

### SnotifyAction

```typescript
  onInit = 3
  beforeDestroy = 0
  afterDestroy = 1
  onClick = 10
  onHoverEnter = 11
  onHoverLeave = 12
```

### SnotifyPosition

```typescript
  left_top = 'leftTop'
  left_center = 'leftCenter'
  left_bottom = 'leftBottom'
  
  right_top = 'rightTop'
  right_center = 'rightCenter'
  right_bottom = 'rightBottom'
  
  center_top = 'centerTop'
  center_center = 'centerCenter'
  center_bottom = 'centerBottom'
```

### SnotifyType

```typescript
  SIMPLE = 'simple'
  SUCCESS = 'success'
  ERROR = 'error'
  WARNING = 'warning'
  INFO = 'info'
  ASYNC = 'async'
  CONFIRM = 'confirm'
  PROMPT = 'prompt'
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
**Type:** `string | SafeHtml`
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

### SnotifyInfo

> #### action
**Type:** [SnotifyAction](#snotifyaction)  
**Description:** Toast lifecycle action (onInit, onDestroy, etc...)

> #### toast
**Type:** [SnotifyToast](#snotify)  
**Description:** Toast which triggered this action

> #### value?
**Type:** `String`  
**Description:** Prompt toast input value

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
case SnotifyPosition.left_top:
  {enter: 'fadeInLeft', exit: 'fadeOutLeft', time: 400}
case SnotifyPosition.left_center:
  {enter: 'fadeInLeft', exit: 'fadeOutLeft', time: 400}
case SnotifyPosition.left_bottom:
  {enter: 'fadeInLeft', exit: 'fadeOutLeft', time: 400}

case SnotifyPosition.right_top:
  {enter: 'fadeInRight', exit: 'fadeOutRight', time: 400}
case SnotifyPosition.right_center:
  {enter: 'fadeInRight', exit: 'fadeOutRight', time: 400}
case SnotifyPosition.right_bottom:
  {enter: 'fadeInRight', exit: 'fadeOutRight', time: 400}

case SnotifyPosition.center_top:
  {enter: 'fadeInDown', exit: 'fadeOutUp', time: 400}
case SnotifyPosition.center_center:
  {enter: 'fadeIn', exit: 'fadeOut', time: 400}
case SnotifyPosition.center_bottom:
  {enter: 'fadeInUp', exit: 'fadeOutDown', time: 400}
```


_____
All interfaces can be imported from `ng-snotify` 
