<template>
  <div class='inspiration'>

    <tab-filter :tabs='tabs' />

    <section ref='list'
             v-if='insList.length'>
      <ul grid>
        <li class="ins-item"
            @click='showPreviewer(ins,idx)'
            v-for='(ins,idx) in insList'
            :key='ins.id'>
          <div class="ins-item__img"
               v-lazy.bg="hozzyImgFilter(ins.src,'case380')"></div>
        </li>

      </ul>
      <load-more :show-loading='hasMore'
                 :tip="hasMore?'正在加载':'没有更多了'"
                 background-color="#fbf9fe"></load-more>
    </section>

    <section class="inspiration__ft"
             v-else>
      <frag-no-result />
    </section>

    <div>
      <previewer :list='previewerList'
                 :options='previewerOptions'
                 ref='previewer'>
      </previewer>
    </div>

  </div>
</template>
<style src='./inspiration.css' scoped></style>
<script>
import axios from '@/plugins/axios'
import TabFilter from '@/components/TabFilter'
import fragNoResult from '@/components/frag/no-result'
import { LoadMore } from 'vux'
import Previewer from '@/components/vux/Previewer'

const getImgs = (query, page) => {
  const axiosParams = Object.assign({}, query, { page: page })
  return axios.get(`/_fapi/inspiration/img`, {
    params: axiosParams
  })
}

export default {
  // 初次进入页面时加载第一页
  beforeRouteEnter (to, from, next) {
    getImgs(to.query, 1)
      .then(({ data }) => {
        next(vm => {
          vm.insList = data.paginate.items
          vm.totalCount = data.paginate.totalCount
          vm.styles = data.styles
          vm.rooms = data.rooms
        })
      })
  },
  beforeRouteUpdate (to, from, next) {
    this.$vux.loading.show()
    // 更新空间和风格时加载第一页
    getImgs(to.query, 1)
      .then(({ data }) => {
        this.insList = data.paginate.items
        this.totalCount = data.paginate.totalCount
        this.page = 1
        this.$vux.loading.hide()
        next()
      })
  },
  components: {
    TabFilter,
    fragNoResult,
    LoadMore,
    Previewer
  },
  data () {
    return {
      page: 1,
      insList: [],
      styles: {},
      rooms: {},
      totalCount: 0,
      isLoadingMore: false,

      previewerList: [],
      previewerOptions: {
        getThumbBoundsFn: (idx) => {
          const thumbIdx = this.previewerList[idx].insIdx
          const thumbnail = document.querySelectorAll('.ins-item__img')[thumbIdx]
          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
          // optionally get horizontal scroll
          // get position of element relative to viewport
          let rect = thumbnail.getBoundingClientRect()
          // w = width
          return { x: rect.left, y: rect.top + pageYScroll, w: rect.width }
        }
      }
    }
  },
  computed: {
    tabs () {
      return [
        { tag: 'room', name: '房间', filter: this.rooms },
        { tag: 'style', name: '风格', filter: this.styles }
      ]
    },
    hasMore () {
      return this.insList.length < this.totalCount
    }
  },
  methods: {
    hozzyImgFilter (fname, suffix) {
      return `https://dn-st.baogaoyezhu.com/${fname}_${suffix}`
    },
    needMore () {
      if (this.hasMore && !this.isLoadingMore) {
        const { bottom } = document.querySelector('.ins-item:last-child').getBoundingClientRect()
        if (bottom < window.innerHeight) {
          this.isLoadingMore = true
          getImgs(this.$route.query, ++this.page)
            .then(({ data }) => {
              this.insList = [...this.insList, ...data.paginate.items]
              this.isLoadingMore = false
            })
        }
      }
    },
    showPreviewer (ins, idx) {
      const img = {}
      img.src = this.hozzyImgFilter(ins.src, 'case800')
      img.insIdx = idx
      const img380 = new Image()
      img380.src = this.hozzyImgFilter(ins.src, 'case380')
      img.w = 800
      img.h = 800 / 380 * img380.height

      this.previewerList.splice(0, 1, img)
      this.$refs.previewer.show(0)
      // 直接操作数组 否则previewer组件在show方法中还未拿到重新赋值的list
    }
  },
  mounted () {
    window.addEventListener('scroll', this.needMore, false)
  },
  destroyed () {
    window.removeEventListener('scroll', this.needMore, false)
  }

}
</script>
