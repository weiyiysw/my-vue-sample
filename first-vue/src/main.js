// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueHighlightJS from 'vue-highlightjs'
import 'vue-highlightjs/node_modules/highlight.js/styles/solarized-light.css'
import jsBeautify from 'js-beautify'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueHighlightJS)

Vue.prototype.$jsBeautify = jsBeautify

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
