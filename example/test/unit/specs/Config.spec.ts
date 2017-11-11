import {load, unload} from '../loader';


describe('Test options', () => {
  let vm = null;
  beforeEach(() => {
    vm = load();
  });
  afterEach(() => {
    unload(vm);
  });

  it('should set custom id', () => {
    const toast = vm.$snotify.simple('test', {
      id: 'Custom Identity'
    });
    expect(toast.id).toEqual('Custom Identity');
  });

});

