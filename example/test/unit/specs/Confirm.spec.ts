import {load, unload} from '../loader';


describe('Confirm Toast', () => {
  let vm = null;
  beforeEach(() => {
    vm = load();
  });
  afterEach(() => {
    unload(vm);
  });
  it('should render toast', (done) => {
    vm.$snotify.confirm('test');
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-confirm'))
        .toBeTruthy();
      done();
    });
  });

  it('should render [body]', (done) => {
    vm.$snotify.confirm('test');
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-confirm .snotifyToast__body').textContent)
        .toEqual('test');
      done();
    });
  });

  it('should render [body, title]', (done) => {
    vm.$snotify.confirm('test', 'test2');
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-confirm .snotifyToast__body').textContent)
        .toEqual('test');
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-confirm .snotifyToast__title').textContent)
        .toEqual('test2');
      done();
    });
  });

  it('should render [body, title, config]', (done) => {
    vm.$snotify.confirm('test', 'test2', {
      titleMaxLength: 1
    });
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-confirm .snotifyToast__body').textContent)
        .toEqual('test');
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-confirm .snotifyToast__title').textContent)
        .toEqual('t...');
      done();
    });
  });

  it('should render one button', (done) => {
    vm.$snotify.confirm('test', 'test2', {
      titleMaxLength: 1,
      buttons: [
        { text: 'Yes' }
      ]
    });
    vm.$nextTick(() => {
      expect(vm.$el.querySelectorAll('.snotify.snotify-rightBottom .snotifyToast.snotify-confirm .snotifyToast__buttons button').length)
        .toBe(1);
      done();
    });
  });

  it('should render four buttons', (done) => {
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
      done();
    });
  });
});


