import SnotifyToast from './Snotify.vue'
import SnotifyService from './SnotifyService'
import {SnotifyType, SnotifyAction, SnotifyPosition} from './enums';

const Snotify = {
  install (Vue, {config = null, options = null}) {
    Vue.filter('truncate', function (value, limit = 40, trail = '...') {
      return value.length > limit ? value.substring(0, limit) + trail : value
    });
    Vue.component('vue-snotify', SnotifyToast);
    SnotifyService.setConfig(config, options);
    Vue.prototype.$snotify = SnotifyService;
  }
};

export {
  Snotify as default,
  SnotifyType,
  SnotifyAction,
  SnotifyPosition
}
