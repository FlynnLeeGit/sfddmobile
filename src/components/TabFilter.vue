<template>
  <ul class="TabFilter">
    <li class="TabFilter__item"
        v-for='(tab,tabIdx) in tabs'
        :key='tab.tag'>
      {{ getTabName(tab,tabIdx) }}
      <select v-model='selected[tabIdx]'
              class="TabFilter__select">
        <option v-for='(fname,fval) in tab.filter'
                :value="fval"
                :key='fval'>{{fname}}</option>
      </select>
    </li>
  </ul>
</template>
<style src='./TabFilter.css'></style>
<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    mode: {
      type: String,
      default: 'query'
    }
  },
  data () {
    return {
      selected: []
    }
  },
  computed: {
    isQueryMode () {
      return this.mode === 'query'
    },
    isParamsMode () {
      return this.mode === 'params'
    }
  },
  methods: {
    getTabName (tab, tabIdx) {
      const sKey = this.selected[tabIdx]
      return sKey ? tab.filter[sKey] : tab.name
    },
    updateSelected (newTabs) {
      let filters
      if (this.isQueryMode) {
        filters = this.$route.query
      }
      if (this.isParamsMode) {
        filters = this.$route.params
      }
      // 通过新的饿tabs更新selected值
      newTabs.forEach((tab, tabIdx) => {
        Object.keys(filters).forEach(fKey => {
          if (fKey === tab.tag) {
            this.selected[tabIdx] = filters[fKey]
          }
        })
      })
    }
  },
  watch: {
    selected (newSelected) {
      const newOpts = {}
      newSelected.forEach((sel, idx) => {
        const fTag = this.tabs[idx].tag
        newOpts[fTag] = sel
      })
      // 路由中添加参数
      if (this.isQueryMode) {
        this.$router.replace({
          query: Object.assign({}, this.$route.query, newOpts)
        })
      }
      if (this.isParamsMode) {
        this.$router.replace({
          params: Object.assign({}, this.$route.params, newOpts)
        })
      }
    },
    tabs (newTabs) {
      this.updateSelected(newTabs)
    }
  },
  created () {
    this.selected.length = this.tabs.length
  }
}
</script>

