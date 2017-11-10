import Vue from 'vue';
import Snotify from 'vue-snotify';
import {App} from '../../../src/App';

Vue.config.productionTip = false;
Vue.use(Snotify);

describe('Prompt Toast', () => {
  it('should render toast', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    vm.$snotify.prompt('test');
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-prompt'))
        .toBeTruthy();
      vm.$snotify.clear();
    });
  });

  it('should render [body]', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    vm.$snotify.prompt('test');
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-prompt .snotifyToast__body').textContent)
        .toEqual('test');
      vm.$snotify.clear();
    });
  });

  it('should render [body, title]', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    vm.$snotify.prompt('test', 'test2');
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-prompt .snotifyToast__body').textContent)
        .toEqual('test');
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-warning .snotifyToast__title').textContent)
        .toEqual('test2');
      vm.$snotify.clear();
    });
  });

  it('should render [body, title, config]', () => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    vm.$snotify.prompt('test', 'test2', {
      placeholder: 'Test placeholder'
    });
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-prompt .snotifyToast__body').textContent)
        .toEqual('test');
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-prompt .snotifyToast__input__labelContent').textContent)
        .toEqual('Test placeholder');
      vm.$snotify.clear();
    });
  });


  it('button click should init action', (done) => {
    const Constructor = Vue.extend(App);
    const vm = new Constructor().$mount();
    const toast = vm.$snotify.prompt('test', 'test2', {
      titleMaxLength: 1,
      buttons: [
        { text: 'Yes', action: (t) => {
            expect(toast.id)
              .toBe(t.id);
            vm.$snotify.clear();
            done();
        }},
      ]
    });
    vm.$nextTick(() => {
      (vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-prompt .snotifyToast__buttons button') as HTMLElement).click();

    });
  });
});


