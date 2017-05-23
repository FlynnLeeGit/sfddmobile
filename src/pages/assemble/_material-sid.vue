<template>
  <div>
    <ul v-if='materials.length'>
      <li class="Article"
          :key='m.id'
          @click='showDialog(m)'
          v-for='m in materials'>
        <h1 class="Article__title">{{m.name}}</h1>
        <div class="Article__img"
             v-lazy.bg.edge="imgFilter(m.img,'case600')">
          <div class="edge-content"></div>
        </div>
        <p class="Article__desc">
          {{m.description}}
        </p>
      </li>
    </ul>
    <frag-no-result v-else />
    <div>
      <x-dialog v-model='show'
                :hide-on-blur='true'>
        <div class="dialog">
          <img :src="imgFilter(currentMaterial.img,'case600')"
               width="100%">
          <div class="dialog__infos">
            <h3>{{currentMaterial.name}}
              <span class="dialog__price">{{currentMaterial.price}}元</span>
            </h3>
            <p class="dialog__desc">
              {{currentMaterial.description}}
            </p>
          </div>
        </div>
      </x-dialog>
    </div>
  </div>
</template>
<style src='./_material-sid.css' scoped></style>

<script>
import axios from '@/plugins/axios'
import { imgFilter } from '@/plugins/filters'
import fragNoResult from '@/components/frag/no-result'
import { XDialog, XImg } from 'vux'

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
    this.$vux.loading.show()
    getMaterials(to.params.sid)
      .then(({ data }) => {
        this.materials = data
        this.$vux.loading.hide()
        next()
      })
  },
  components: {
    fragNoResult,
    XDialog,
    XImg
  },
  data () {
    return {
      materials: [],
      show: false,
      currentMaterial: { img: '' }
    }
  },
  methods: {
    imgFilter,
    showDialog (m) {
      this.currentMaterial = m
      this.show = true
    }
  }

}
</script>

