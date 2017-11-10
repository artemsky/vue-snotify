import Vue from 'vue';
import Snotify from 'vue-snotify';
import {App} from '../../../src/App';

Vue.config.productionTip = false;
Vue.use(Snotify);

describe('Error Toast', () => {

  it('should render toast', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    vm.$snotify.error('test');
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-error'))
        .toBeTruthy();
      vm.$snotify.clear();
    });
  });

  it('should render [body]', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    vm.$snotify.error('test');
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-error .snotifyToast__body').textContent)
        .toEqual('test');
      vm.$snotify.clear();
    });
  });

  it('should render [body, title]', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    vm.$snotify.error('test', 'test2');
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-error .snotifyToast__body').textContent)
        .toEqual('test');
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-error .snotifyToast__title').textContent)
        .toEqual('test2');
      vm.$snotify.clear();
    });
  });

  it('should render [body, title, config]', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    vm.$snotify.error('test', 'test2', {
      titleMaxLength: 1
    });
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-error .snotifyToast__body').textContent)
        .toEqual('test');
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-error .snotifyToast__title').textContent)
        .toEqual('t...');
      vm.$snotify.clear();
    });
  });
});


