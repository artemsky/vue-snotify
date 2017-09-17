# Snotify

> All methods return toast `id`
> Toast notifications with different classNames and icons. `.snotify-${METHOD_NAME}`

## Core

### simple

- type: `Function`

  Signature:

  ```
  (
    body: string,
    title?: string,
    config?: SnotifyConfig
  ) => number
  ```

 
  
### success

- type: `Function`

  Signature:

  ```
  (
    body: string,
    title?: string,
    config?: SnotifyConfig
  ) => number
  ``` 
  
### info

- type: `Function`

  Signature:

  ```
  (
    body: string,
    title?: string,
    config?: SnotifyConfig
  ) => number
  ```
  
### warning

- type: `Function`

  Signature:

  ```
  (
    body: string,
    title?: string,
    config?: SnotifyConfig
  ) => number
  ```  
  
### error

- type: `Function`

  Signature:

  ```
  (
    body: string,
    title?: string,
    config?: SnotifyConfig
  ) => number
  ```
  
### async

- type: `Function`

  Signature:

  ```
  (
    body: string,
    title: string,
    action: () => Promise<{body: string, title?: string, config?: SnotifyConfig}>
  ) => number
  ```
  > Toast notification of style - *info* and loading spinner. It changes style depending on success or error `promise`.  
  > Example - [here](../essentials/examples.md#async)  
  
### confirm

- type: `Function`

  Signature:

  ```
  (
    body: string,
    title: string,
    config?: SnotifyConfig
  ) => number
  ```
  > Toast notification with buttons  
  > Example - [here](../essentials/examples.md#confirm) 
   
### prompt

- type: `Function`

  Signature:

  ```
  (
    body: string,
    title: string,
    config?: SnotifyConfig
  ) => number
  ```
  > Toast notification with buttons and input field
  > Example - [here](../essentials/examples.md#prompt)   
  
### html

- type: `Function`

  Signature:

  ```
  (
    html: string,
    config?: SnotifyConfig
  ) => number
  ```
  > Toast notification of custom style(default - Simple). 
  > Renders your html string inside `.snotifyToast__inner`
  > Example - [here](../essentials/examples.md#html)

## Other

### setConfig

- type: `Function`

  Signature:

  ```
  (
    config?: SnotifyConfig,
    options?: SnotifyOptions
  ) => void
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
  > [SnotifyToast](interfaces.md#snotifytoast)
  > Returns SnotifyToast object by id  
    
  
### remove

- type: `Function`

  Signature:

  ```
  (
    id?: number
  ) => void
  ```
  > If id passed, removes toast instantly. 
  > If no param passed it's the same as [clear()](#clear) If you want to remove toast with exit animation use `vm.$snotify.$emit('remove', id`)
  
    
  
### clear

- type: `Function`

  Signature:

  ```
  () => void
  ```
  > Clear notifications array instantly
  
