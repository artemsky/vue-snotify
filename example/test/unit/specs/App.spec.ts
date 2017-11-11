import {load, unload} from '../loader';


describe('App.vue', () => {
  let vm = null;
  beforeEach(() => {
    vm = load();
  });
  afterEach(() => {
    unload(vm);
  });

  it('should render app', (done) => {
    expect(vm.$el.querySelector('.brand h1').textContent)
      .toEqual('Vue-Snotify');
    done();
  });

  it('should set default options app', (done) => {
    vm.$snotify.setDefaults({
      toast: {
        timeout: 5000
      }
    });
    expect(vm.$snotify.config.toast.timeout)
      .toBe(5000);
    done();
  });

});

