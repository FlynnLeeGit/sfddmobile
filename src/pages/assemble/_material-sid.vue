<template>
  <div>
    <ul>
      <li class="Article"
          v-for='m in materials'>
        <h1 class="Article__title">{{m.name}}</h1>
        <div class="Article__img"
             v-lazy.bg="imgFilter(m.img,'case600')">
        </div>
        <p class="Article__desc">
          {{m.description}}
        </p>
      </li>

    </ul>
  </div>
</template>
<script>
import axios from '@/plugins/axios'
import { imgFilter } from '@/plugins/filters'

const getMaterials = sid => axios.get(`/_fapi/spaces/${sid}/material`)

export default {
  beforeRouteEnter (to, from, next) {
    getMaterials(to.params.sid)
      .then(({ data }) => {
        next(vm => {
          vm.materials = data
        })
      })
  },
  beforeRouteUpdate (to, from, next) {
    getMaterials(to.params.sid)
      .then(({ data }) => {
        this.materials = data
        next()
      })
  },
  data () {
    return {
      materials: []
    }
  },
  methods: {
    imgFilter
  }

}
</script>

