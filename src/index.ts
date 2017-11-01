import {Snotify} from './components/Snotify';
import {SnotifyService} from './SnotifyService';
import {SnotifyDefaults} from './interfaces';

declare global {
  interface Window { Vue: any; }
}

export default function install (Vue, options: SnotifyDefaults = {}) {
  Vue.filter('truncate', (value, limit = 40, trail = '...') =>
    value.length > limit ? value.substring(0, limit) + trail : value
  );
  Vue.component('vue-snotify', Snotify);
  SnotifyService.setDefaults(options);
  Vue.prototype.$snotify = SnotifyService;
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export * from './interfaces';
export * from './enums';
export * from './types';
