import Vue from 'vue';
import Snotify from 'vue-snotify';
import {App} from '../../../src/App';

Vue.config.productionTip = false;
Vue.use(Snotify, {
  toast: {
    timeout: 5000
  }
});


describe('App.vue', () => {
  it('should render app', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.brand h1').textContent)
      .toEqual('Vue-Snotify');
  });

  it('should set default options app', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    expect(vm.$snotify.config.toast.timeout)
      .toBe(5000);
  });

});

