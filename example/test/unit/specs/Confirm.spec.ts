import Vue from 'vue';
import Snotify from 'vue-snotify';
import {App} from '../../../src/App';

Vue.config.productionTip = false;
Vue.use(Snotify);

describe('Confirm Toast', () => {
  it('should render toast', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    vm.$snotify.confirm('test');
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-confirm'))
        .toBeTruthy();
      vm.$snotify.clear();
    });
  });

  it('should render [body]', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    vm.$snotify.confirm('test');
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-confirm .snotifyToast__body').textContent)
        .toEqual('test');
      vm.$snotify.clear();
    });
  });

  it('should render [body, title]', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    vm.$snotify.confirm('test', 'test2');
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-confirm .snotifyToast__body').textContent)
        .toEqual('test');
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-warning .snotifyToast__title').textContent)
        .toEqual('test2');
      vm.$snotify.clear();
    });
  });

  it('should render [body, title, config]', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    vm.$snotify.confirm('test', 'test2', {
      titleMaxLength: 1
    });
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-confirm .snotifyToast__body').textContent)
        .toEqual('test');
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-confirm .snotifyToast__title').textContent)
        .toEqual('t...');
      vm.$snotify.clear();
    });
  });

  it('should render one button', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    vm.$snotify.confirm('test', 'test2', {
      titleMaxLength: 1,
      buttons: [
        { text: 'Yes' }
      ]
    });
    vm.$nextTick(() => {
      expect(vm.$el.querySelectorAll('.snotify.snotify-rightBottom .snotifyToast.snotify-confirm .snotifyToast__buttons button').length)
        .toBe(1);
      vm.$snotify.clear();
    });
  });

  it('should render four buttons', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    vm.$snotify.confirm('test', 'test2', {
      titleMaxLength: 1,
      buttons: [
        { text: 'Yes' },
        { text: 'Yes' },
        { text: 'Yes' },
        { text: 'Yes' },
      ]
    });
    vm.$nextTick(() => {
      expect(vm.$el.querySelectorAll('.snotify.snotify-rightBottom .snotifyToast.snotify-confirm .snotifyToast__buttons button').length)
        .toBe(4);
      vm.$snotify.clear();
    });
  });
});


