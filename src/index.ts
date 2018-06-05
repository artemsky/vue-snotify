import {Snotify} from './components/Snotify';

import {SnotifyDefaults} from './interfaces';
import {SnotifyService} from './SnotifyService';
import Vue from 'vue';

const Plugin = {
  install (Vue, options: SnotifyDefaults = {}) {
    Vue.filter('truncate', (value, limit = 40, trail = '...') =>
      value.length > limit ? value.substring(0, limit) + trail : value
    );
    const service =  new SnotifyService();
    service.setDefaults(options);
    Vue.prototype.$snotify = service;
    Vue.component('vue-snotify', Snotify);
    // const snotifyElement = document.createElement('div');
    // snotifyElement.setAttribute('id', 'snotify');
    // document.querySelector('body').appendChild(snotifyElement);
    //
    // new Vue({
    //   el: '#snotify',
    //   render: h => h(Snotify)
    // });

    // auto install
    if (typeof window !== 'undefined' && window.hasOwnProperty('Vue')) {
      (window as any).Snotify = service;
    }

  }
};


declare module 'vue/types/vue' {
  interface Vue {
    $snotify: SnotifyService;
  }
}

// auto install
if (typeof window !== 'undefined' && window.hasOwnProperty('Vue')) {
  (window as any).Vue.use(Plugin.install);
}


export default Plugin;
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
export {SnotifyToast} from './components/SnotifyToast/toast.model';

