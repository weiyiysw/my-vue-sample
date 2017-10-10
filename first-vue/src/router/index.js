import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import ContainerLayout from '@/components/ContainerLayout'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // }
    {
      path: '/',
      name: 'ContainerLayout',
      component: ContainerLayout
    }
  ]
})
