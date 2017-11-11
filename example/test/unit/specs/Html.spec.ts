import {load, unload} from '../loader';

describe('Html Toast', () => {
  let vm = null;
  beforeEach(() => {
    vm = load();
  });
  afterEach(() => {
    unload(vm);
  });
  it('should render toast', (done) => {
    vm.$snotify.html('test');
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-simple'))
        .toBeTruthy();
      done();
    });
  });

  it('should render [HTML]', (done) => {
    vm.$snotify.html('<b>html</b><u>test</u>');
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-simple .snotifyToast__inner').innerHTML)
        .toEqual('<b>html</b><u>test</u>');
      done();
    });
  });

  it('should render [HTML] with config', (done) => {
    const toast = vm.$snotify.simple('test', 'test2', {
      html: '<b>html</b><u>test</u>'
    });
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-simple .snotifyToast__inner').innerHTML)
        .toEqual('<b>html</b><u>test</u>');
      done();
    });
  });
});


