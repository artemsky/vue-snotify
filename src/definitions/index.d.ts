import Vue  from 'vue';
import {SnotifyService} from './SnotifyService';

declare module '*.vue' {
  import { ComponentOptions } from 'vue';
  let options: ComponentOptions<any>;
  export default options;
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    $snotify?: SnotifyService;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $snotify: SnotifyService;
  }
}
