import Vue from 'vue'
import { IMG_SERVER } from '../../localConfig'

export const imgFilter = (fname, suffix = '') => {
  return fname && `${IMG_SERVER}/${fname}${suffix && '_' + suffix}`
}

Vue.filter('imgFilter', imgFilter)
