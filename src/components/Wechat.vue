<template>
  <div>

  </div>
</template>

<script>
import axios from '@/plugins/axios'

export default {
  props: {
    timeline: {},
    url: '',
    appmessage: {}
  },
  created () {
    axios.get(`/_common/wechatjs?url=${this.url}`)
      .then(function (response) {
        window.wx.config(response.data)
        window.wx.ready(function () {
        })
        window.wx.onMenuShareTimeline(this.timeline)
        window.wx.onMenuShareAppMessage(this.appmessage)
        window.wx.error(function (res) {
          window.alert('微信功能初始化失败')
        })
      }.bind(this))
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>
