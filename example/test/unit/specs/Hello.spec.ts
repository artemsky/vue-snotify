import Vue from 'vue';
import Snotify from 'vue-snotify';
import {App} from '../../../src/App';

Vue.config.productionTip = false;
Vue.use(Snotify);


describe('App.vue', () => {
  it('should render app', () => {
    console.log(111);
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.brand h1').textContent)
      .toEqual('Vue-Snotify');
  });
});
