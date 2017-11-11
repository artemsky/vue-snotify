import Vue from 'vue';
import {SnotifyToast} from '../SnotifyToast/toast.model';
import {SnotifyNotifications} from '../../interfaces';
import {SnotifyPosition} from '../../enums/';
import {SnotifyEvent} from '../../types';
import {Toast} from '../SnotifyToast';
import {Component} from 'vue-property-decorator';

@Component({
  template: require('./snotify.html'),
  components: {
    Toast
  }
})
export class Snotify extends Vue {
  /**
   * Toasts array
   */
  notifications: SnotifyNotifications = {
  left_top: [],
  left_center: [],
  left_bottom: [],

  right_top: [],
  right_center: [],
  right_bottom: [],

  center_top: [],
  center_center: [],
  center_bottom: []
  };
  /**
   * Helper for slice pipe (maxOnScreen)
   */
  dockSize_a: number = 0;
  /**
   * Helper for slice pipe (maxOnScreen)
   */
  dockSize_b: number | undefined = 0;
  /**
   * Helper for slice pipe (maxAtPosition)
   */
  blockSize_a: number  = 0;
  /**
   * Helper for slice pipe (maxAtPosition)
   */
  blockSize_b: number | undefined = 0;
  /**
   * Backdrop Opacity
   */
  backdrop = -1;
  /**
   * How many toasts with backdrop in current queue
   */
  withBackdrop: SnotifyToast[] = [];


  setOptions(toasts) {
    if (this.$snotify.config.global.newOnTop) {
      this.dockSize_a = -this.$snotify.config.global.maxOnScreen;
      this.dockSize_b = undefined;
      this.blockSize_a = -this.$snotify.config.global.maxAtPosition;
      this.blockSize_b = undefined;
      this.withBackdrop = toasts.filter(toast => toast.config.backdrop >= 0);
    } else {
      this.dockSize_a = 0;
      this.dockSize_b = this.$snotify.config.global.maxOnScreen;
      this.blockSize_a = 0;
      this.blockSize_b = this.$snotify.config.global.maxAtPosition;
      this.withBackdrop = toasts.filter(toast => toast.config.backdrop >= 0).reverse();
    }
    this.notifications = this.splitToasts(toasts.slice(this.dockSize_a, this.dockSize_b));
    this.stateChanged('mounted');
  }

  // TODO: fix backdrop if more than one toast called in a row
  /**
   * Changes the backdrop opacity
   * @param {SnotifyEvent} event
   */
  stateChanged(event) {
    if (!this.withBackdrop.length) {
      return;
    }
    switch (event) {
      case 'mounted':
        if (this.backdrop < 0) {
          this.backdrop = 0;
        }
        break;
      case 'beforeShow':
        this.backdrop = this.withBackdrop[this.withBackdrop.length - 1].config.backdrop;
        break;
      case 'beforeHide':
        if (this.withBackdrop.length === 1) {
          this.backdrop = 0;
        }
        break;
      case 'hidden':
        if (this.withBackdrop.length === 1) {
          this.backdrop = -1;
        }
        break;
    }

  }

  /**
   * Split toasts toasts into different objects
   * @param {SnotifyToast[]} toasts
   * @returns {SnotifyNotifications}
   */
  splitToasts(toasts) {
    const result = {};

    for (const property in SnotifyPosition) {
      if (SnotifyPosition.hasOwnProperty(property)) {
        result[SnotifyPosition[property]] = [];
      }
    }

    toasts.forEach((toast) => {
      result[toast.config.position].push(toast);
    });

    return result;
  }


  created() {
    this.$snotify.emitter.$on('snotify', (toasts) => {
      this.setOptions(toasts);
    });
  }
}
