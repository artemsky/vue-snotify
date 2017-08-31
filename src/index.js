import SnotifyToast from './Snotify.vue'
import {SnotifyService} from './SnotifyService'
import {SnotifyType, SnotifyAction, SnotifyPosition} from './enums';

const instance = {
  install (Vue, options) {
    Vue.component('vue-snotify', SnotifyToast);
    SnotifyService.setConfig(null, options);
  }
};

// Export all components too
export {
  instance as Snotify,
  SnotifyService,
  SnotifyPosition,
  SnotifyType,
  SnotifyAction
}
