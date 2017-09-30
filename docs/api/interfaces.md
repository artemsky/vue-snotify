# Interfaces


### SnotifyToast

### id
- type: `number`
> Toast id

### title
- type: `string`  
> Toast title

### body
- type: `string`  
> Toast content

### config
- type: [SnotifyConfig](options.md/#snotifyconfig)  
> Toast configuration object


## SnotifyButton

### text
- type: `string`   
> Toast timeout in milliseconds. 0 - Disable timeout

### action
- type: `function` 
  
  Signature:
  
    ```
    (
      id: number,
      text: string,
    ) => void
    ```
   
> Callback action which will be called on button click.

### bold
- type: `boolean`  
> Should button text be bold or not


### SnotifyAnimate

### enter
- type: `string`  
  > In animation

### exit
- type: `string`  
> Out animation

### time
- type: `number`   
> Animation time in ms
