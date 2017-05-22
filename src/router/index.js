import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'

const assemble = r => require(['@/pages/assemble'], r)
const assembleList = r => require(['@/pages/assemble/list'], r)
const assembleClassic = r => require(['@/pages/assemble/classic'], r)
const assembleCn = r => require(['@/pages/assemble/cn'], r)
const assembleSimple = r => require(['@/pages/assemble/simple'], r)
const assembleAmerica = r => require(['@/pages/assemble/america'], r)
const assembleVr = r => require(['@/pages/assemble/_vr'], r)
const assembleMaterial = r => require(['@/pages/assemble/_material'], r)
const assembleMaterialSpace = r =>
  require(['@/pages/assemble/_material-sid'], r)

const ucenter = r => require(['@/pages/ucenter'], r)
const ucContract = r => require(['@/pages/ucenter/contract'], r)
const ucMaterial = r => require(['@/pages/ucenter/material'], r)
const ucProgress = r => require(['@/pages/ucenter/progress'], r)
const ucAfterSales = r => require(['@/pages/ucenter/aftersales'], r)
const ucLoan = r => require(['@/pages/ucenter/loan'], r)
const ucBind = r => require(['@/pages/ucenter/bind'], r)

const customDesignIndex = r => require(['@/pages/custom-design/index'], r)
const customDesignVrlist = r => require(['@/pages/custom-design/vrlist'], r)

const ideas = r => require(['@/pages/about/ideas'], r)
const ideasDesign = r => require(['@/pages/about/ideas/design'], r)
const ideasMaterial = r => require(['@/pages/about/ideas/material'], r)
const ideasQuality = r => require(['@/pages/about/ideas/quality'], r)

const services = r => require(['@/pages/about/services'], r)
const servicesZero = r => require(['@/pages/about/services/zero'], r)
const servicesSee = r => require(['@/pages/about/services/see'], r)
const servicesLoan = r => require(['@/pages/about/services/loan'], r)
const servicesConstruction = r =>
  require(['@/pages/about/services/construction'], r)

const caseDragon = r => require(['@/pages/cases/dragon'], r)

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
    path: '/custom-design/vrlist',
    component: customDesignVrlist
  },
  {
    path: '/cases/dragon',
    component: caseDragon
  },
  {
    path: '/about/ideas',
    component: ideas,
    children: [
      {
        path: 'design',
        component: ideasDesign
      },
      {
        path: 'material',
        component: ideasMaterial
      },
      {
        path: 'quality',
        component: ideasQuality
      }
    ]
  },
  {
    path: '/about/services',
    component: services,
    children: [
      {
        path: 'zero',
        component: servicesZero
      },
      {
        path: 'see',
        component: servicesSee
      },
      {
        path: 'loan',
        component: servicesLoan
      },
      {
        path: 'loan',
        component: servicesConstruction
      }
    ]
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
        path: 'material/:style',
        component: assembleMaterial,
        children: [
          {
            path: ':sid',
            name: 'assemble-material-sid',
            component: assembleMaterialSpace
          }
        ]
      }
    ]
  },
  {
    path: '/ucenter',
    component: ucenter,
    children: [
      {
        path: 'contract',
        component: ucContract
      },
      {
        path: 'material',
        component: ucMaterial
      },
      {
        path: 'progress',
        component: ucProgress
      },
      {
        path: 'aftersales',
        component: ucAfterSales
      },
      {
        path: 'loan',
        component: ucLoan
      },
      {
        path: 'bind',
        component: ucBind
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
