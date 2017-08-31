<template>
  <div>
    <div class="snotify-backdrop" v-if="backdrop >= 0" :style="{opacity: backdrop}"></div>
    <div v-for="(position, index) in notifications" class="snotify" :class="'snotify-' + index">
      <toast v-for="toast in position.slice(blockSize_a, blockSize_b)" :toastData="toast" :key="toast.id">
      </toast>
    </div>
  </div>
</template>

<script>
  import Toast from './components/Toast'
  import {SnotifyService} from './SnotifyService'
  import {sortNotificationsByPositions} from './util'

  export default {
    data () {
      return {
        backdrop: -1,
        positions: {
          left_top: 'leftTop',
          left_center: 'leftCenter',
          left_bottom: 'leftBottom',

          right_top: 'rightTop',
          right_center: 'rightCenter',
          right_bottom: 'rightBottom',

          center_top: 'centerTop',
          center_center: 'centerCenter',
          center_bottom: 'centerBottom'
        },
        notifications: {}
      }
    },
    components: {
      Toast
    },
    created () {
      if (SnotifyService.options.newOnTop) {
        this.dockSize_a = -SnotifyService.options.maxOnScreen
        this.dockSize_b = undefined
        this.blockSize_a = -SnotifyService.options.maxAtPosition
        this.blockSize_b = undefined
      } else {
        this.dockSize_a = 0
        this.dockSize_b = SnotifyService.options.maxOnScreen
        this.blockSize_a = 0
        this.blockSize_b = SnotifyService.options.maxAtPosition
      }

      SnotifyService.$on('notificationsChanged', (notifications) => {
        this.notifications = sortNotificationsByPositions(notifications.slice(this.dockSize_a, this.dockSize_b))
        const list = notifications.filter(toast => toast.config.backdrop >= 0)

        if (list.length) {
          this.backdrop = 0
          setTimeout(() => {
            this.backdrop = list[list.length - 1].config.backdrop
          }, 10)
        } else {
          if (this.backdrop > 0) {
            this.backdrop = 0
          }
          setTimeout(() => {
            this.backdrop = -1
          }, 200)
        }
      })
    }
  }
</script>
