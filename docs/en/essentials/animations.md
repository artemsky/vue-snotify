# Animations

You are free to create or copy any css animations.

### 1. Add you animation styles into your global styles

In this example i just copied one of **[animate.css](https://github.com/daneden/animate.css/tree/sass/source)** animations
```scss
.bounceInDown {
  animation-name: bounceInDown;
}


@keyframes bounceInDown {
  0%, 60%, 75%, 90%, 100% {
    transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(.985);
  }

  100% {
    opacity: 1;
    transform: none;
  }
}
```


### 2. Now i would call my notification like that

```javascript
vm.$snotify.success(this.body, this.title, {
  animation: {
    enter: 'bounceInDown',
    exit: 'bounceInDown',
    time: 1000
  }
});
```
