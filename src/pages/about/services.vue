<template>
  <div>
    <tab-header :tabs='tabs' font-size='13px'/>
    <router-view />
  </div>
</template>
<script>
import TabHeader from '@/components/TabHeader'
export default {
  components: {
    TabHeader
  },
  computed: {
    tabs () {
      return [
        { name: '闭口合同', to: '/about/services/zero' },
        { name: '所见即所得', to: '/about/services/see' },
        { name: '先施工后付款', to: '/about/services/construction' },
        { name: '装修贷款', to: '/about/services/loan' }
      ]
    }
  }
}
</script>

