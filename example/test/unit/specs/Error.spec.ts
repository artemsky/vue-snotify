import {load, unload} from '../loader';

describe('Error Toast', () => {
  let vm = null;
  beforeEach(() => {
    vm = load();
  });
  afterEach(() => {
    unload(vm);
  });
  it('should render toast', (done) => {
    vm.$snotify.error('test');
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-error'))
        .toBeTruthy();
      done();
    });
  });

  it('should render [body]', (done) => {
    vm.$snotify.error('test');
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-error .snotifyToast__body').textContent)
        .toEqual('test');
      done();
    });
  });

  it('should render [body, title]', (done) => {
    vm.$snotify.error('test', 'test2');
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-error .snotifyToast__body').textContent)
        .toEqual('test');
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-error .snotifyToast__title').textContent)
        .toEqual('test2');
      done();
    });
  });

  it('should render [body, title, config]', (done) => {
    vm.$snotify.error('test', 'test2', {
      titleMaxLength: 1
    });
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-error .snotifyToast__body').textContent)
        .toEqual('test');
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-error .snotifyToast__title').textContent)
        .toEqual('t...');
      done();
    });
  });
});


