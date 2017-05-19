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

import ucenter from '@/pages/ucenter'
import ucContract from '@/pages/ucenter/contract'
import ucMaterial from '@/pages/ucenter/material'
import ucProgress from '@/pages/ucenter/progress'
import ucAfterSales from '@/pages/ucenter/aftersales'
import ucLoan from '@/pages/ucenter/loan'
import ucBind from '@/pages/ucenter/bind'

import customDesignIndex from '@/pages/custom-design/index'

import ideas from '@/pages/about/ideas'
import ideasDesign from '@/pages/about/ideas/design'
import ideasMaterial from '@/pages/about/ideas/material'
import ideasQuality from '@/pages/about/ideas/quality'

import services from '@/pages/about/services'

import caseDragon from '@/pages/cases/dragon'

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
    component: services
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
