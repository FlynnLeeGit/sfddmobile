// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import { AlertPlugin, ToastPlugin, LoadingPlugin } from 'vux'
// for detect webp
import './plugins/modernizr-custom'
import './plugins/vue-lazy'
import AlloyFinger from 'alloyfinger'
import AlloyFingerVue from 'alloyfinger/vue/alloy_finger.vue'
window.AlloyFinger = AlloyFinger

Vue.use(AlertPlugin)
Vue.use(AlloyFingerVue)
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
