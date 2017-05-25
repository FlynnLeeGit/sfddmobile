<template>
  <div class="vr">
    <iframe :src="vrUrl"
            width="100%"
            height="100%"
            frameborder="0"></iframe>
  </div>
</template>
<style scoped>
.vr {
  position: absolute;
  top: 40px;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
<script>
import axios from '@/plugins/axios'
export default {
  data () {
    return {
      styleId: 0
    }
  },
  beforeCreate () {
    axios.get(`/_fapi/planscheme/recomend`)
    .then(({data}) => {
      this.styleId = data[this.$route.params.style]
    })
  },
  computed: {
    vrUrl () {
      return `/virtual_reality/scene/${this.styleId}?mobile=1`
    }
  }
}
</script>
