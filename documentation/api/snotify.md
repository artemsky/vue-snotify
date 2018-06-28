# SnotifyService

> All methods return toast [SnotifyToast](model.md#snotifytoast)
> Toast methods creates notifications with different class names `.snotify-${METHOD_NAME}`  
> You can style them as you want.
> Look more in [advanced section].

## Core

### simple

- type: `Function`

  Signature:

  ```
  (body: string): SnotifyToast
  (body: string, config: SnotifyToastConfig): SnotifyToast
  (body: string, title: string): SnotifyToast
  (body: string, title: string, config: SnotifyToastConfig): SnotifyToast
  ```
  
### success

- type: `Function`

  Signature:

  ```
  (body: string): SnotifyToast
  (body: string, config: SnotifyToastConfig): SnotifyToast
  (body: string, title: string): SnotifyToast
  (body: string, title: string, config: SnotifyToastConfig): SnotifyToast
  ``` 
  
### info

- type: `Function`

  Signature:

  ```
  (body: string): SnotifyToast
  (body: string, config: SnotifyToastConfig): SnotifyToast
  (body: string, title: string): SnotifyToast
  (body: string, title: string, config: SnotifyToastConfig): SnotifyToast
  ```
  
### warning

- type: `Function`

  Signature:

  ```
  (body: string): SnotifyToast
  (body: string, config: SnotifyToastConfig): SnotifyToast
  (body: string, title: string): SnotifyToast
  (body: string, title: string, config: SnotifyToastConfig): SnotifyToast
  ```  
  
### error

- type: `Function`

  Signature:

  ```
  (body: string): SnotifyToast
  (body: string, config: SnotifyToastConfig): SnotifyToast
  (body: string, title: string): SnotifyToast
  (body: string, title: string, config: SnotifyToastConfig): SnotifyToast
  ```

### confirm

- type: `Function`

  Signature:

  ```
  (body: string): SnotifyToast
  (body: string, config: SnotifyToastConfig): SnotifyToast
  (body: string, title: string): SnotifyToast
  (body: string, title: string, config: SnotifyToastConfig): SnotifyToast
  ```
  > Toast notification with buttons  
  > Example - [here](../essentials/examples.md#confirm) 
   
### prompt

- type: `Function`

  Signature:

  ```
  (body: string): SnotifyToast
  (body: string, config: SnotifyToastConfig): SnotifyToast
  (body: string, title: string): SnotifyToast
  (body: string, title: string, config: SnotifyToastConfig): SnotifyToast
  ```
  > Toast notification with buttons and input field
  > Example - [here](../essentials/examples.md#prompt)   
  
  
### async

- type: `Function`

  Signature:

  ```
  (body: string, action: Promise<Snotify> | Observable<Snotify>): SnotifyToast
  (body: string, title: string, action: Promise<Snotify> | Observable<Snotify>): SnotifyToast
  (body: string, action: Promise<Snotify> | Observable<Snotify>, config: SnotifyToastConfig): SnotifyToast
  (body: string, title: string, action: Promise<Snotify> | Observable<Snotify>, config: SnotifyToastConfig): SnotifyToast
  ```
  > Toast notification of style - *info* and loading spinner. It changes style depending on complete or error `Observable`.  
  > Example - [here](../essentials/examples.md#async)  
  


### html

- type: `Function`

  Signature:

  ```
   html(html: string | SafeHtml, config?: SnotifyToastConfig): SnotifyToast
  ```
  > Toast notification of custom style(default - Simple). 
  > Renders your html string inside `.snotifyToast__inner`
  > Example - [here](../essentials/examples.md#html)

## Other

### setDefaults

- type: `Function`

  Signature:

  ```
  (
    defaults: SnotifyDefaults
  ) => SnotifyDefaults
  ```
  > Set global configuration object  
  
### get

- type: `Function`

  Signature:

  ```
  (
    id: number
  ) => SnotifyToast
  ```
  > [SnotifyToast](model.md#snotifytoast)
  > Returns SnotifyToast object by id  
    
  
### remove

- type: `Function`

  Signature:

  ```
  (
    id?: number,
    remove?: boolean
  ) => void
  ```
  > If id passed, removes toast instantly. 
  > If no param passed it's the same as [clear()](#clear).  
  > If you want to remove toast instantly pass `true` as second argument
  
    
  
### clear

- type: `Function`

  Signature:

  ```
  () => void
  ```
  > Clear notifications array instantly
      
  
### create

- type: `Function`

  Signature:

  ```
  (
  snotify: Snotify
  ) => SnotifyToast
  ```
  > [Snotify](interfaces.md#snotify)  
  > [SnotifyToast](model.md#snotifytoast)  
  > Creates custom notification object      
  

### button

- type: `Function`

  Signature:

  ```
  (
  text: string,
  closeOnClick: boolean = true,
  action: (toast?: SnotifyToast) => void = null,
  bold: boolean = false
  ) => SnotifyButton
  ```
  > [SnotifyButton](interfaces.md#snotyfybutton)  
  > [SnotifyToast](model.md#snotifytoast)  
  > Button create helper
  
