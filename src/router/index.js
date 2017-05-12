import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'

import assemble from '@/pages/assemble'
import assembleClassic from '@/pages/assemble/classic'
import assembleCn from '@/pages/assemble/cn'
import assembleSimple from '@/pages/assemble/simple'
import assembleAmerica from '@/pages/assemble/america'
import assembleVr from '@/pages/assemble/_vr'
import assembleMaterial from '@/pages/assemble/_material'

Vue.use(Router)
import { base } from '../../localConfig'

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: index
  },
  {
    path: '/assemble',
    component: assemble,
    children: [
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
