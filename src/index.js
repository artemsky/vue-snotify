import SnotifyToast from './Snotify.vue'
import {SnotifyService} from './SnotifyService'
import {SnotifyType, SnotifyAction, SnotifyPosition} from './enums';

const instance = {
  install (Vue, options) {
    Vue.filter('truncate', function (value, limit = 40, trail = '...') {
      return value.length > limit ? value.substring(0, limit) + trail : value
    });
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
