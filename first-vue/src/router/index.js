import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Communication from '../views/communication/Index'
import TestDialog from '../views/dialog/Index'
import EditTable from '../views/editTable/EditTable'
import HighlightCode from '../views/code/HighlightCode'
import BeautifyCode from '../views/code/BeautifyCode'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      meta: {
        name: '欢迎页'
      },
      component: Hello
    },
    {
      path: '/communication',
      name: 'Communication',
      meta: {
        name: '组件通信'
      },
      component: Communication
    },
    {
      path: '/testDialog',
      name: 'TestDialog',
      meta: {
        name: '对话框测试'
      },
      component: TestDialog
    },
    {
      path: '/editTable',
      name: 'EditTable',
      meta: {
        name: '可编辑列表'
      },
      component: EditTable
    },
    {
      path: '/highlightCode',
      name: 'HighlightCode',
      meta: {
        name: '高亮代码测试'
      },
      component: HighlightCode
    },
    {
      path: '/beautifyCode',
      name: 'BeautifyCode',
      meta: {
        name: '格式化代码测试'
      },
      component: BeautifyCode
    }
  ]
})
