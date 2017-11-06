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

export {SnotifyDefaults} from './interfaces/SnotifyDefaults.interface';
export {SnotifyToastConfig} from './interfaces/SnotifyToastConfig.interface';
export {SnotifyStyles} from './interfaces/SnotifyStyles.interface';
export {SnotifyNotifications} from './interfaces/SnotifyNotifications.interface';
export {SnotifyGlobalConfig} from './interfaces/SnotifyGlobalConfig.interface';
export {SnotifyButton} from './interfaces/SnotifyButton.interface';
export {SnotifyAnimate} from './interfaces/SnotifyAnimate.interface';
export {Snotify} from './interfaces/Snotify.interface';
export {SnotifyPosition} from './enums/SnotifyPosition.enum';
export {SnotifyStyle} from './enums/SnotifyStyle.enum';
export {SnotifyType} from './types/snotify.type';
export {SnotifyEvent} from './types/event.type';
