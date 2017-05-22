<template>
  <ul class="TabFilter">
    <li class="TabFilter__item"
        v-for='(tab,tabIdx) in tabs'
        :key='tab.tag'>
      {{tab.name}}
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
    }
  },
  data () {
    return {
      selected: []
    }
  },
  watch: {
    selected (newSelected) {
      const newQuery = {}
      newSelected.forEach((sel, idx) => {
        const fTag = this.tabs[idx].tag
        newQuery[fTag] = sel
      })
      this.$router.push({ query: newQuery })
    }
  }
}
</script>

