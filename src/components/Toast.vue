<template>
  <transition
    :enter-active-class="`animated ${toast.config.animation.enter}`"
    :leave-active-class="`animated ${toast.config.animation.exit}`"
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:after-enter="afterEnter"
    v-on:before-leave="beforeLeave"
    v-on:leave="leave"
    >
    <div v-show="opacity"
         class="snotifyToast"
         :class="['snotify-' + toast.config.type]"
         :style="{
            opacity,
            'max-height': maxHeight + 'px',
            '-webkit-animation-duration': toast.config.animation.time + 'ms',
            'animation-duration': toast.config.animation.time + 'ms',
            '-webkit-transition': toast.config.animation.time + 'ms',
            transition: toast.config.animation.time + 'ms'
          }"
         @click="onClick" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
      <div class="snotifyToast__progressBar" v-if="toast.config.showProgressBar">
        <span class="snotifyToast__progressBar__percentage" :style="{'width': progress + '%'}"></span>
      </div>
      <div class="snotifyToast__inner" v-if="!toast.config.html">
        <div class="snotifyToast__title" v-if="toast.title">{{toast.title | truncate(toast.config.titleMaxLength)}}
        </div>
        <div class="snotifyToast__body">{{toast.body | truncate(toast.config.bodyMaxLength)}}</div>
        <snotify-prompt v-if="toast.config.type === promptType"
                        :placeholder="toast.config.placeholder"
                        @valueChanged="promptValueChanged">
        </snotify-prompt>
        <snotify-icon v-if="!toast.config.icon" class="snotify-icon" :type="toast.config.type"></snotify-icon>
        <div v-else>
          <img class="snotify-icon" :src='toast.config.icon'/>
        </div>
      </div>
      <div class="snotifyToast__inner" v-html="toast.config.html" v-else></div>
      <snotify-button
        v-if="toast.config.buttons"
        :buttons="toast.config.buttons"
        :value="toast.config.type === promptType ? value : null"
        :id="toast.id"
      ></snotify-button>
    </div>
  </transition>

</template>

<script>
  import SnotifyIcon from './SnotifyIcon.vue'
  import SnotifyPrompt from './Prompt.vue'
  import SnotifyButton from './Button.vue'
  import SnotifyService from '../SnotifyService'
  import SnotifyType from '../enums/SnotifyType'
  import SnotifyAction from '../enums/SnotifyAction'

  export default {
    props: ['toastData'],
    data () {
      return {
        toast: this.toastData,
        opacity: 0,
        interval: null,
        progress: 0,
        value: 0,
        promptType: SnotifyType.PROMPT,
        maxHeight: SnotifyService.options.maxHeight
      }
    },
    methods: {
      promptValueChanged (value) {
        this.value = value;
        SnotifyService.$emit(SnotifyAction.onInput, this.toast, this.value)
      },
      /**
       * Initialize base toast config
       * @param [toast] {SnotifyToast}
       */
      initToast (toast) {
        if (toast) {
          if (this.toast.config.type !== toast.config.type) {
            clearInterval(this.interval)
          }
          this.toast = toast
        }
        if (this.toast.config.timeout > 0) {
          this.startTimeout(0)
        } else {
          this.toast.config.showProgressBar = false
          this.toast.config.pauseOnHover = false
        }
        this.opacity = 1
      },
      /**
       * Start progress bar
       * @param currentProgress {Number}
       */
      startTimeout (currentProgress) {
        const refreshRate = 10;
        this.progress = currentProgress;
        const step = refreshRate / this.toast.config.timeout * 100;
        this.interval = setInterval(() => {
          this.progress += step;
          if (this.progress >= 100) {
            this.opacity = 0
          }
        }, refreshRate)
      },
      beforeEnter () {
        SnotifyService.$emit(SnotifyAction.beforeShow, this.toast, this.value)
      },
      enter (el, done) {
        setTimeout(() => done(), this.toast.config.animation.time)
      },
      afterEnter () {
        SnotifyService.$emit(SnotifyAction.shown, this.toast, this.value)
      },
      beforeLeave () {
        clearInterval(this.interval);
        SnotifyService.$emit(SnotifyAction.beforeHide, this.toast, this.value)
      },
      leave (el, done) {
        setTimeout(() => {
          SnotifyService.$emit(SnotifyAction.hidden, this.toast, this.value);
          this.maxHeight = 0;
          setTimeout(() => {
            SnotifyService.remove(this.toast.id);
            done()
          }, this.toast.config.animation.time)
        }, this.toast.config.animation.time)
      },
      onClick () {
        SnotifyService.$emit(SnotifyAction.onClick, this.toast, this.value);
        if (this.toast.config.closeOnClick) {
          this.opacity = 0
        }
      },
      onMouseEnter () {
        SnotifyService.$emit(SnotifyAction.onHoverEnter, this.toast, this.value);
        if (this.toast.config.pauseOnHover) {
          clearInterval(this.interval)
        }
      },
      onMouseLeave () {
        if (this.toast.config.pauseOnHover && this.type !== SnotifyType.PROMPT) {
          this.startTimeout(this.progress)
        }
        SnotifyService.$emit(SnotifyAction.onHoverLeave, this.toast, this.value)
      }
    },
    created () {
      SnotifyService.$on('toastChanged', (toast) => {
        if (this.toast.id === toast.id) {
          this.initToast(toast)
        }
      });
      SnotifyService.$on('remove', (id) => {
        if (this.toast.id === id) {
          this.opacity = 0
        }
      });
      this.initToast()
    },
    mounted: function () {
      this.$nextTick(function () {
        SnotifyService.$emit(SnotifyAction.mounted, this.toast, this.value)
      })
    },
    beforeDestroy () {
      SnotifyService.$emit(SnotifyAction.beforeDestroy, this.toast, this.value)
    },
    destroyed () {
      SnotifyService.$emit(SnotifyAction.destroyed, this.toast, this.value)
    },
    components: {
      SnotifyIcon,
      SnotifyPrompt,
      SnotifyButton
    }
  }
</script>
