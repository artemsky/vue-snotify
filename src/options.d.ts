import Vue from 'vue';
import {SnotifyService} from './SnotifyService';

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    $snotify?: string;
  }
}
declare module 'vue/types/vue' {
  interface Vue {
    $snotify: SnotifyService | any;
  }
}

declare module 'vue/types/vue' {
  interface VueConstructor {
    $snotify: string;
  }
}
