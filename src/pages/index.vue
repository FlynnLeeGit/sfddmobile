<template>
<div>
  <wechat :timeline="timeline" :url="url" :appmessage="appmessage"></wechat>
</div>
</template>
<script>
import Wechat from '@/components/Wechat'

export default {
  components: {
    Wechat
  },

  data () {
    return {
      url: window.location.href.split('#')[0],
      timeline: {
        title: '测试分享朋友圈',
        link: 'http://staging.sfdd.com',
        imgUrl: 'http://dn-st.baogaoyezhu.com/zhenyu/57d2865c1ea17.JPG_case380',
        success: function () {
          window.alert('分享成功')
        },
        cancel: function () {
          window.alert('取消分享')
        }
      },
      appmessage: {
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
      }
    }
  }
}
</script>

<style>

</style>
