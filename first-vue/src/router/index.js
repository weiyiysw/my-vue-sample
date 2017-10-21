import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Communication from '../views/communication/Index'
import TestDialog from '../views/dialog/Index'
import EditTable from '../views/editTable/EditTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/communication',
      name: 'Communication',
      component: Communication
    },
    {
      path: '/testDialog',
      name: 'TestDialog',
      component: TestDialog
    },
    {
      path: '/editTable',
      name: 'EditTable',
      component: EditTable
    }
  ]
})
