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
  methods: {
    getTabName (tab, tabIdx) {
      const sKey = this.selected[tabIdx]
      return sKey ? tab.filter[sKey] : tab.name
    }
  },
  watch: {
    selected (newSelected) {
      const newOpts = {}
      newSelected.forEach((sel, idx) => {
        const fTag = this.tabs[idx].tag
        newOpts[fTag] = sel
      })
      if (this.mode === 'query') {
        this.$router.replace({ query: newOpts })
      }
      if (this.mode === 'params') {
        this.$router.replace({
          params: Object.assign(this.$route.params, newOpts)
        })
      }
    }
  }
}
</script>

