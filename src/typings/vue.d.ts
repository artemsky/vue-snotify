/**
 * Extends interfaces in Vue.js
 */
import Vue = require("vue");
import {SnotifyService} from './snotify/snotify.service';

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    $snotify?: SnotifyService;
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $snotify: SnotifyService;
  }
}
