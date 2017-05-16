<template>
<div>
  hello word
</div>
</template>
<script>
import axios from '@/plugins/axios'

export default {
  components: {},
  created () {
    const url = window.location.href
    axios.get(`/_common/wechatjs?url=${url}`)
      .then(function (response) {
        window.wx.config(response.data)
        window.wx.ready(function () {
          console.log('验证成功')
          window.wx.onMenuShareTimeline({
            title: '测试分享朋友圈',
            link: 'http://staging.sfdd.com',
            imgUrl: 'http://dn-st.baogaoyezhu.com/zhenyu/57d2865c1ea17.JPG_case380',
            success: function () {
              window.alert('分享成功')
            },
            cancel: function () {
              window.alert('取消分享')
            }
          })
          window.wx.onMenuShareAppMessage({
            title: '分享消息',
            desc: '测试发送分享消息',
            link: 'http://staging.sfdd.com',
            imgUrl: 'http://dn-st.baogaoyezhu.com/zhenyu/57d2865c1ea17.JPG_case380',
            type: 'link',
            dataUrl: '',
            success: function () {
              window.alert('分享成功')
            },
            cancel: function () {
              window.alert('分享失败')
            }
          })
        })
        window.wx.error(function (res) {
          window.alert(res)
          console.log(res)
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  data () {
    return {}
  }
}
</script>

<style>

</style>
