# Callbacks

## toast.on( event, callback )

> You can chain callbacks `on(e, func).on(e, func)...`

### Callback

- type: `Function`

  Signature:

  ```
  (toast: Snotify) => void
  ```
  
  > [Snotify](interfaces.md#snotify)
  
# Events

 - `"mounted"`
 - `"beforeShow"`
 - `"shown"`
 - `"input"`
 - `"click"`
 - `"mouseenter"`
 - `"mouseleave"`
 - `"beforeHide"`
 - `"hidden"`
 - `"destroyed"`
 
 > Events type - [SnotifyEvent](types.md#snotifyevent) 
 
  ```js
    toast.on( "click", (toast: Snotify) => {
      toast.body = "Change body...";
    } )
  ```
