# Callbacks


### Callback

> vm.$on( event, callback )
> See Vue [instance methods](https://vuejs.org/v2/api/#Instance-Methods-Events)

- type: `Function`

  Signature:

  ```
  (
    toast: SnotifyToast,
    value?: string
  ) => void
  ```
  
  > [Event list](#events)
  > [SnotifyToast](interfaces.md#snotifytoast)
  
  > `value` passed only in case toast type === `prompt`
  
# Events

 - `"mounted"`
 - `"destroyed"`
 - `"beforeDestroy"`
 - `"onInput"`
 - `"onClick"`
 - `"onHoverEnter"`
 - `"onHoverLeave"`
 - `"beforeShow"`
 - `"shown"`
 - `"beforeHide"`
 - `"hidden"`
 
 > Event can be passed with `enum` helper [SnotifyAction](enums.md#snotifyaction)
 
  ```js
    vm.$on( SnotifyAction.mounted, (toast, value) => {
      
    } )
  ```
