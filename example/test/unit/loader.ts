import Vue from 'vue';
import Snotify from 'vue-snotify';
import {App} from '../../src/App';

Vue.config.productionTip = false;
Vue.use(Snotify);

export function load() {
  const Constructor = Vue.extend(App);
  return new Constructor().$mount();
}

export function unload(vm) {
  vm.$snotify.clear();
}
