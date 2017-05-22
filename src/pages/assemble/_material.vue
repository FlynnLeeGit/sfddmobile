<template>
  <div class="material">
    <tab-filter class="material__tab-filter"
                :tabs='tabs'
                mode='params' />
    <router-view />
  </div>
</template>
<style scoped src='./_material.css'></style>
<script>
import axios from '@/plugins/axios'
import TabFilter from '@/components/TabFilter'
export default {
  beforeRouteEnter (to, from, next) {
    axios.get(`/_fapi/planscheme/recomend`)
      .then(({ data }) => {
        const styleId = data[to.params.style]
        return axios.get(`/_fapi/planschemes/${styleId}/space`)
      })
      .then(({ data }) => {
        // const newPath = `${to.path}/${data[0].id}`
        if (!to.params.sid) {
          next(`/assemble/material/${to.params.style}/${data[0].id}`)
        } else {
          next(vm => {
            vm.spaces = data
          })
        }
      })
  },
  components: {
    TabFilter
  },
  data () {
    return {
      spaces: []
    }
  },
  computed: {
    spaceFilter () {
      const spaceFilter = {}
      this.spaces.forEach(s => {
        spaceFilter[s.id] = s.space
      })
      return spaceFilter
    },
    tabs () {
      return [
        { tag: 'sid', name: '空间', filter: this.spaceFilter }
      ]
    }
  }
}
</script>
