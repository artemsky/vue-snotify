import SnotifyToast from './Snotify.vue'
import SnotifyService from './SnotifyService'
import {SnotifyType, SnotifyAction, SnotifyPosition} from './enums';

function install (Vue, options = {}) {
  Vue.filter('truncate', function (value, limit = 40, trail = '...') {
    return value.length > limit ? value.substring(0, limit) + trail : value
  });
  Vue.component('vue-snotify', SnotifyToast);
  SnotifyService.setConfig(options.config || null, options.options || null);
  Vue.prototype.$snotify = SnotifyService;
}


export {
  install as default,
  SnotifyType,
  SnotifyAction,
  SnotifyPosition
}
