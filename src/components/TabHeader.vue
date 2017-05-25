<template>
  <ul class="TabHeader">
    <router-link v-for='tab in tabs'
                 :key='tab.to'
                 :to='tab.to'
                 :exact='tab.exact'
                 :style='liStyle'
                 tag='li'>
      {{tab.name}}
    </router-link>
  </ul>
</template>

<style src='./TabHeader.css'></style>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    fontSize: {
      type: String,
      default: '16px'
    }
  },
  computed: {
    liStyle () {
      return {
        fontSize: this.fontSize
      }
    }
  }
}
</script>
