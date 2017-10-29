<template>
  <div>
    <div class="snotify-backdrop" v-if="backdrop >= 0" :style="{opacity: backdrop}"></div>
    <div v-for="(position, index) in notifications" class="snotify" :class="'snotify-' + index">
      <toast v-for="toast in position.slice(blockSize_a, blockSize_b)" :toastData="toast" :key="toast.id" @stateChanged="stateChanged">
      </toast>
    </div>
  </div>
</template>

<script>
  import Toast from './components/Toast'
  import SnotifyService from './SnotifyService'
  import SnotifyPosition from './enums/SnotifyPosition'
  import {sortNotificationsByPositions} from './util'

  export default {
    data () {
      return {
        backdrop: -1,
        positions: SnotifyPosition,
        notifications: {},
        withBackdrop: []
      }
    },
    methods: {
      setOptions(toasts) {
        if (SnotifyService.config.global.newOnTop) {
          this.dockSize_a = -SnotifyService.config.global.maxOnScreen;
          this.dockSize_b = undefined;
          this.blockSize_a = -SnotifyService.config.global.maxAtPosition;
          this.blockSize_b = undefined;
          this.withBackdrop = toasts.filter(toast => toast.config.backdrop >= 0);
        } else {
          this.dockSize_a = 0;
          this.dockSize_b = SnotifyService.config.global.maxOnScreen;
          this.blockSize_a = 0;
          this.blockSize_b = SnotifyService.config.global.maxAtPosition;
          this.withBackdrop = toasts.filter(toast => toast.config.backdrop >= 0).reverse();
        }
        this.notifications = this.splitToasts(toasts.slice(this.dockSize_a, this.dockSize_b));
        this.stateChanged('mounted')
      },

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

      },

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
    },
    components: {
      Toast
    },
    created () {
      // this.setOptions(SnotifyService.options);

      SnotifyService.$on('notificationsChanged', (toasts) => {
        this.setOptions(toasts);
      });

      // SnotifyService.$on('notificationsChanged', (notifications) => {
      //   this.notifications = sortNotificationsByPositions(notifications.slice(this.dockSize_a, this.dockSize_b));
      //   const list = notifications.filter(toast => toast.config.backdrop >= 0);
      //
      //   if (list.length) {
      //     if (this.backdrop < 0) {
      //       this.backdrop = 0;
      //       setTimeout(() => {
      //         this.backdrop = list[list.length - 1].config.backdrop
      //       }, 10)
      //     }
      //   } else {
      //     if (this.backdrop > 0) {
      //       this.backdrop = 0;
      //       setTimeout(() => {
      //         this.backdrop = -1
      //       }, 200)
      //     }
      //   }
      // })
    }
  }
</script>
