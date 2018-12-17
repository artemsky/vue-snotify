import { load, unload } from '../loader';

describe('Prompt Toast', () => {
  let vm = null;
  beforeEach(() => {
    vm = load();
  });
  afterEach(() => {
    unload(vm);
  });
  it('should render toast', (done) => {
    vm.$snotify.prompt('test');
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-prompt'))
        .toBeTruthy();
      done();
    });
  });

  it('should render [body]', (done) => {
    vm.$snotify.prompt('test');
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-prompt .snotifyToast__body').textContent)
        .toEqual('test');
      done();
    });
  });

  it('should render [body, title]', (done) => {
    vm.$snotify.prompt('test', 'test2');
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-prompt .snotifyToast__body').textContent)
        .toEqual('test');
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-prompt .snotifyToast__title').textContent)
        .toEqual('test2');
      done();
    });
  });

  it('should render [body, title, config]', (done) => {
    vm.$snotify.prompt('test', 'test2', {
      placeholder: 'Test placeholder'
    });
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-prompt .snotifyToast__body').textContent)
        .toEqual('test');
      expect(vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-prompt .snotifyToast__input__labelContent').textContent)
        .toEqual('Test placeholder');
      done();
    });
  });


  it('button click should init action', (done) => {
    const toast = vm.$snotify.prompt('test', 'test2', {
      titleMaxLength: 1,
      buttons: [
        { text: 'Yes', action: (t) => {
            expect(toast.id)
              .toBe(t.id);
            done();
        }},
      ]
    });
    vm.$nextTick(() => {
      (vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-prompt .snotifyToast__buttons button') as HTMLElement).click();
    });
  });

  it('should accept text', (done) => {
    const toast = vm.$snotify.prompt('test', 'test2');
    vm.$nextTick(() => {
      const node: HTMLInputElement = vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-prompt input');
      node.value = 'Hello';
      const event = new Event('input');
      node.dispatchEvent(event);
      vm.$nextTick(() => {
        expect(toast.value).toEqual('Hello');
        done();
      });
    });
  });
  
  it('should set initial value', (done) => {
    const toast = vm.$snotify.prompt('test', 'test2', {
      initialValue: 'Hello'
    });
    vm.$nextTick(() => {
      const node: HTMLInputElement = vm.$el.querySelector('.snotify.snotify-rightBottom .snotifyToast.snotify-prompt input');
      expect(node.value).toEqual('Hello');
      done();
    });
  });
});


