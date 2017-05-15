import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'

import assemble from '@/pages/assemble'
import assembleList from '@/pages/assemble/list'
import assembleClassic from '@/pages/assemble/classic'
import assembleCn from '@/pages/assemble/cn'
import assembleSimple from '@/pages/assemble/simple'
import assembleAmerica from '@/pages/assemble/america'
import assembleVr from '@/pages/assemble/_vr'
import assembleMaterial from '@/pages/assemble/_material'

import customDesignIndex from '@/pages/custom-design/index'

Vue.use(Router)
import { base } from '../../localConfig'

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: index
  },
  {
    path: '/custom-design',
    component: customDesignIndex
  },
  {
    path: '/assemble',
    component: assemble,
    children: [
      {
        path: 'list',
        component: assembleList
      },
      {
        path: 'intro/classic',
        component: assembleClassic
      },
      {
        path: 'intro/cn',
        component: assembleCn
      },
      {
        path: 'intro/america',
        component: assembleAmerica
      },
      {
        path: 'intro/simple',
        component: assembleSimple
      },
      {
        path: 'vr/:style?',
        component: assembleVr
      },
      {
        path: 'material/:style?',
        component: assembleMaterial
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  base,
  routes
})
