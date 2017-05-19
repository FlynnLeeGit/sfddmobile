<template>
  <div>
    <tab-header :tabs='tabs'
                v-show='showTabs' />
    <router-view />
  </div>
</template>
<script>
import TabHeader from '@/components/TabHeader'
export default {
  components: {
    TabHeader
  },
  data () {
    return {
      showTabs: true
    }
  },
  computed: {
    style () {
      const [, staticStyle] = this.$route.path.match(/\/intro\/(\w+)/) || []
      return this.$route.params.style || staticStyle
    },
    tabs () {
      return [
        { name: '介绍', to: `/assemble/intro/${this.style}` },
        { name: 'VR全景', to: `/assemble/vr/${this.style}` },
        { name: '材料', to: `/assemble/material/${this.style}` }
      ]
    }
  },
  beforeCreate () {
    this.$root.$on('assemble:hideTabs', () => {
      this.showTabs = false
    })
    this.$root.$on('assemble:showTabs', () => {
      this.showTabs = true
    })
  }
}
</script>

<style src='./assemble.css'></style>

