<template>
  <div>
    <tab-header :tabs='tabs' />
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
      tabs: [
        { name: '设计标准', to: '/about/ideas/design' },
        { name: '质量控制', to: '/about/ideas/quality' },
        { name: '材料选择', to: '/about/ideas/material' }
      ]
    }
  }
}
</script>

