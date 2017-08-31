import SnotifyToast from './Snotify.vue'
import {SnotifyService} from './SnotifyService'

const instance = {
  install (Vue, options) {
    Vue.component('snotify', SnotifyToast)
    SnotifyService.setConfig(null, options)
  }
}

// Export all components too
export {
  instance as Snotify,
  SnotifyService
}
