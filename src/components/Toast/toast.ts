import Vue from 'vue';
import {SnotifyPrompt} from '../Prompt';
import {SnotifyButton} from '../SnotifyButton';
import {SnotifyService} from '../../SnotifyService';
import {SnotifyStyle} from '../../enums/SnotifyStyle.enum';
import { Component } from 'vue-property-decorator';
import {SnotifyToast} from '../../SnotifyToast.model';

@Component({
  template: require('./toast.html'),
  props: ['toastData'],
  components: {
    SnotifyPrompt,
    SnotifyButton
  }
})
export class Toast extends Vue {
  toastData: SnotifyToast;
  toast = this.toastData;
  animationFrame= null;
  state= {
    paused: false,
    progress: 0,
    animation: '',
    isDestroying: false,
    promptType: SnotifyStyle.prompt
  };
  /**
   * Initialize base toast config
   */
  initToast () {
    if (this.toast.config.timeout > 0) {
      this.startTimeout(0);
    }
  }
  onClick () {
    this.toast.eventEmitter.$emit('click');
    if (this.toast.config.closeOnClick) {
      SnotifyService.remove(this.toast.id);
    }
  }
  onMouseEnter () {
    this.toast.eventEmitter.$emit('mouseenter');
    if (this.toast.config.pauseOnHover) {
      this.state.paused = true;
    }
  }
  onMouseLeave () {
    if (this.toast.config.pauseOnHover && this.toast.config.timeout) {
      this.state.paused = false;
      this.startTimeout(this.toast.config.timeout * this.state.progress);
    }
    this.toast.eventEmitter.$emit('mouseleave');
  }
  /**
   * Remove toast completely after animation
   */
  onExitTransitionEnd () {
    if (this.state.isDestroying) {
      return;
    }
    this.initToast();
    this.toast.eventEmitter.$emit('shown');
  }
  /**
   * Start progress bar
   * @param startTime {number}
   * @default 0
   */
  startTimeout(startTime = 0) {
    const start = performance.now();
    const calculate = () => {
      this.animationFrame = requestAnimationFrame((timestamp) => {
        const runtime = timestamp + startTime - start;
        const progress = Math.min(runtime / this.toast.config.timeout, 1);
        if (this.state.paused) {
          cancelAnimationFrame(this.animationFrame);
        } else if (runtime < this.toast.config.timeout) {
          this.state.progress = progress;
          calculate();
        } else {
          this.state.progress = 1;
          cancelAnimationFrame(this.animationFrame);
          SnotifyService.emitter.$emit('remove', this.toast.id);
        }
      });
    };
    calculate();
  }
  /**
   * Trigger beforeDestroy lifecycle. Removes toast
   */
  onRemove () {
    this.state.isDestroying = true;
    this.$emit('beforeHide');
    this.toast.eventEmitter.$emit('beforeHide');
    this.state.animation = this.toast.config.animation.exit;
    setTimeout(() => {
      this.$emit('hidden');
      this.state.animation = 'snotifyToast--out';
      this.toast.eventEmitter.$emit('hidden');
      setTimeout(() => SnotifyService.remove(this.toast.id, true), this.toast.config.animation.time / 2);
    }, this.toast.config.animation.time / 2);
  }
  created () {
    SnotifyService.emitter.$on('toastChanged', (toast) => {
      if (this.toast.id === toast.id) {
        this.initToast();
      }
    });
    SnotifyService.emitter.$on('remove', (id) => {
      if (this.toast.id === id) {
        this.onRemove();
      }
    });
  }
  mounted() {
    this.$nextTick(() => {
      // SnotifyService.$emit(SnotifyAction.mounted, this.toast, this.value)
      this.toast.eventEmitter.$emit('mounted');
      this.state.animation = 'snotifyToast--in';
      this.$nextTick(() => {
        setTimeout(() => {
          this.$emit('beforeShow');
          this.toast.eventEmitter.$emit('beforeShow');
          this.state.animation = this.toast.config.animation.enter;
        }, this.toast.config.animation.time / 5); // time to show toast push animation (snotifyToast--in)
      });
    });
  }
  destroyed () {
    cancelAnimationFrame(this.animationFrame);
    this.toast.eventEmitter.$emit('destroyed');
  }
}
