<template>
  <div>
    <ul class="assemble-hd">
      <router-link v-for='tab in tabs'
                   :key='tab.to'
                   :to='tab.to'
                   tag='li'>{{tab.name}}</router-link>
    </ul>
    <router-view />
  </div>
</template>
<script>
export default {
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
  }
}
</script>

<style src='./assemble.css'></style>

