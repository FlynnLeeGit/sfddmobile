<template>
  <div class="vrlist">
    <tab-filter :tabs='tabs' />
    <ul>
      <li class="Article"
          v-for='vr in vrs'
          :key='vr.id'>
        <a :href="'/virtual_reality/inspirations/'+vr.id+'/vr'">
          <div class="Article__img"
               v-lazy.bg="imgFilter(vr.thumb,'case380')"></div>
          <p class="Article__desc">
            {{vr.title}}
          </p>
          <p class="Article__view-all">View 360 VR</p>
        </a>
      </li>
    </ul>
  </div>
</template>
<style src='./vrlist.css'></style>
<script>
import axios from '@/plugins/axios'
import { imgFilter } from '@/plugins/filters'

import TabFilter from '@/components/TabFilter'

export default {
  beforeRouteEnter (to, from, next) {
    Promise.all([axios.get('/_fapi/inspiration/vrs/cate'), axios.get('/_fapi/inspiration/vrs')])
      .then(([cateRes, vrsRes]) => {
        const { spaces, styles } = cateRes.data
        const vrsAll = vrsRes.data
        next(vm => {
          vm.spaces = spaces
          vm.styles = styles
          vm.vrsAll = vrsAll
        })
      })
  },
  components: {
    TabFilter
  },
  data () {
    return {
      vrsAll: [],
      spaces: [],
      styles: []
    }
  },
  methods: {
    imgFilter
  },
  computed: {
    tabs () {
      const styleFilter = {}
      const spaceFilter = {}
      styleFilter.all = spaceFilter.all = '全部'
      this.styles.forEach(s => {
        styleFilter[s] = s
      })
      this.spaces.forEach(s => {
        spaceFilter[s] = s
      })
      return [
        { tag: 'style', name: '风格', filter: styleFilter },
        { tag: 'space', name: '空间', filter: spaceFilter }
      ]
    },
    query () {
      return this.$route.query
    },
    style () {
      return this.query.style
    },
    space () {
      return this.query.space
    },
    vrs () {
      return this.vrsAll.filter(item => {
        if (!this.space || this.space === 'all') {
          return true
        }
        return item.space === this.space
      }).filter(item => {
        if (!this.style || this.style === 'all') {
          return true
        }
        return item.style === this.style
      })
    }
  }
}
</script>

