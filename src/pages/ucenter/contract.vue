<template>
  <div>
    hello contract
  </div>
</template>

<script>
import axios from '@/plugins/axios'

export default {
  data () {
    return {
      data: {}
    }
  },
  beforeCreate () {
    axios.get(`/_fapi/ucenter/contract`)
    .then((res) => {
      this.data = res.data
    })
    .catch((error) => {
      console.log('ss', error)
    })
  }
}
</script>

<style lang="css">
</style>
