# Upgrade guide

### 1. Provide default configuration

> Options totally reworked.  
  Now you have [setDefaults](../api/options.md#setting-default-configuration) method to change toast dock configuration.

Now you can play with this, and create `toast.json` configuration for example


### 2. Callbacks totally removed from `SnotifyService`

Now you have jQuery-like syntax on toast object

```typescript
vm.$snotify.prompt('Accept license', {
  placeholder: 'Enter your age',
  buttons: [
    {text: 'Accept', action: (toast) => { toast.valid ? vm.$snotify.remove(toast.id) : false }, bold: true},
    {text: 'Cancel' }
  ]
}).on('input', (toast: Snotify) => {
  if (+toast.value >= 21) {
    toast.valid = true;
  } else {
    toast.valid = false;
  }
}).on('hidden', () => {
  /* do some stuff */
})
```

### 3. Custom arguments order

> I worked on usability, and i hope this change should help with that.

Now you can pass skip arguments if you don't want to pass them.
In that case we don't need to pass `null` in title order. We just skip it.

Unfortunately for now I can not do the same for `body` and `title` because both parameters are typeof string and I can't determine what exactly you are going to pass

###### Before
```typescript
vm.$snotify.simple(body)
vm.$snotify.simple(body, null, config)
vm.$snotify.async(body, null, action, config)
vm.$snotify.async(null, null, action, config)
```

###### Now

```typescript
vm.$snotify.simple(body)
vm.$snotify.simple(body, config)
vm.$snotify.async(body, action)
vm.$snotify.async(body, action, config)
```

### 4. Buttons

Now button action get only one param of type [SnotifyToast](../api/model.md#snotifytoast) and by default removes toast

```typescript
 action: (toast: SnotifyToast) => vm.$snotify.remove(toast.id)
```


### 5. REMOVED
 - `setConfig`
 - `maxHeight`
 
 
## All another stuff should not touch you
- Renamed
  - SnotifyToastConfig -> SnotifyToastConfig
  - SnotifyOptions -> SnotifyGlobalConfig

