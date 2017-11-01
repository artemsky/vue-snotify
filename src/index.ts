import {Snotify} from './components/Snotify';
import {SnotifyService} from './SnotifyService';
import {SnotifyPosition} from './enums';

// declare global {
//   interface Window { Vue: any; }
// }


function install (Vue, options = {}) {
  Vue.filter('truncate', function (value, limit = 40, trail = '...') {
    return value.length > limit ? value.substring(0, limit) + trail : value;
  });
  Vue.component('vue-snotify', Snotify);
  // SnotifyService.setConfig(options.config || null, options.options || null);
  Vue.prototype.$snotify = SnotifyService;
}

// auto install
// if (typeof window !== 'undefined' && window.Vue) {
//   window.Vue.use(install);
// }


export {
  install as default,
  SnotifyPosition
};
