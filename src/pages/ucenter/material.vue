<template>
  <div>
    <msg :title="title" :description="desc" :buttons="buttons" icon="waiting"></msg>
  </div>
</template>

<script>
import axios from '@/plugins/axios'
import {Msg} from 'vux'

export default {
  components: {
    Msg
  },
  data () {
    return {
      title: '您的项目尚未创建',
      desc: '关于材料清单 联系客服:400-080-2121'
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
