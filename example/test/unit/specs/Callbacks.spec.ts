import {load, unload} from '../loader';

describe('Success Toast', () => {
  let vm = null;
  beforeEach(() => {
    vm = load();
  });
  afterEach(() => {
    unload(vm);
  });

  it('beforeShow toast', (done) => {
    vm.$snotify.prompt('test')
      .on('beforeShow', (toast) => {
      expect(toast.body).toEqual('test');
      done();
    });
  });

  it('mounted toast', (done) => {
    vm.$snotify.prompt('test')
      .on('mounted', (toast) => {
      expect(toast.body).toEqual('test');
      done();
    });
  });

  it('beforeHide toast', (done) => {
    vm.$snotify.prompt('test', {
      closeOnClick: true,
    })
      .on('beforeHide', (toast) => {
      expect(toast.body).toEqual('test');
      done();
    });

    vm.$nextTick(() => {
      const node: HTMLInputElement = vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-prompt');
      const event = new Event('click');
      node.dispatchEvent(event);
    });
  });

  it('click toast', (done) => {
    vm.$snotify.prompt('test')
      .on('click', (toast) => {
      expect(toast.body).toEqual('test');
      done();
    });
    vm.$nextTick(() => {
      const node: HTMLInputElement = vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-prompt');
      const event = new Event('click');
      node.dispatchEvent(event);
    });
  });


  it('destroyed toast', (done) => {
    vm.$snotify.prompt('test', {
      closeOnClick: true
    })
      .on('destroyed', (toast) => {
      expect(toast.body).toEqual('test');
      done();
    });
    vm.$nextTick(() => {
      const node: HTMLInputElement = vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-prompt');
      const event = new Event('click');
      node.dispatchEvent(event);
    });
  });

  it('hidden toast', (done) => {
    vm.$snotify.prompt('test', {
      closeOnClick: true,
    }).on('hidden', (toast) => {
      expect(toast.body).toEqual('test');
      done();
    });

    vm.$nextTick(() => {
      const node: HTMLInputElement = vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-prompt');
      const event = new Event('click');
      node.dispatchEvent(event);
    });
  });

  it('input toast', (done) => {
    vm.$snotify.prompt('test')
      .on('input', (toast) => {
      expect(toast.value).toEqual('Hello');
      done();
    });
    vm.$nextTick(() => {
      const node: HTMLInputElement = vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-prompt input');
      node.value = 'Hello';
      const event = new Event('input');
      node.dispatchEvent(event);
    });
  });

  it('mouseenter toast', (done) => {
    vm.$snotify.prompt('test')
      .on('mouseenter', (toast) => {
      expect(toast.body).toEqual('test');
      done();
    });
    vm.$nextTick(() => {
      const node: HTMLInputElement = vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-prompt');
      const event = new Event('mouseenter');
      node.dispatchEvent(event);
    });
  });

  it('mouseleave toast', (done) => {
    vm.$snotify.prompt('test')
      .on('mouseleave', (toast) => {
      expect(toast.body).toEqual('test');
      done();
    });
    vm.$nextTick(() => {
      const node: HTMLInputElement = vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-prompt');
      const event = new Event('mouseleave');
      node.dispatchEvent(event);
    });
  });
});

