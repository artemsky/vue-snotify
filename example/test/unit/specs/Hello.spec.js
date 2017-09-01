import Vue from 'vue'
import App from '@/App'

describe('App.vue', () => {
  it('should render app', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.brand h1').textContent)
      .to.equal('Vue-Snotify')
  })
})
