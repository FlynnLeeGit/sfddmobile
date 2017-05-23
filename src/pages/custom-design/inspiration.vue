<template>
  <div class='inspiration'>
    <tab-filter :tabs='tabs' />
    <ul grid>
      <li class="ins-item"
          v-for='ins in insList'
          :key='ins.id'>
        <div class="ins-item__img"
             v-lazy.bg="hozzyImgFilter(ins.src,'case380')"></div>
      </li>
    </ul>
  </div>
</template>
<style src='./inspiration.css' scoped></style>
<script>
import axios from '@/plugins/axios'
import TabFilter from '@/components/TabFilter'

export default {
  beforeRouteEnter (to, from, next) {
    axios.get(`/_fapi/inspiration/img`)
      .then(({ data }) => {
        console.log(data)
        next(vm => {
          vm.insList = data.paginate.items
          vm.styles = data.styles
          vm.rooms = data.rooms
        })
      })
  },
  beforeRouteUpdate (to, from, next) {
    this.$vux.loading.show()
    axios.get(`/_fapi/inspiration/img`)
      .then(({ data }) => {
        console.log(data)
        this.$vux.loading.hide()
        next()
      })
  },
  components: {
    TabFilter
  },
  data () {
    return {
      page: 1,
      insList: [],
      styles: {},
      rooms: {},
      totalCount: 0
    }
  },
  computed: {
    tabs () {
      return [
        { tag: 'room', name: '房间', filter: this.rooms },
        { tag: 'style', name: '风格', filter: this.styles }
      ]
    }
  },
  methods: {
    hozzyImgFilter (fname, suffix) {
      return `https://dn-st.baogaoyezhu.com/${fname}_${suffix}`
    }
  }

}
</script>
