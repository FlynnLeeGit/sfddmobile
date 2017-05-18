<template>
  <div>
     <router-view />
  </div>
</template>

<script>
import axios from '@/plugins/axios'

export default {
  beforeRouteEnter (to, from, next) {
    console.log(to)
    const callbackUri = to.path
    if (to.query.code && to.query.state) {
      // 用户确认授权 获取用户信息 并执行登录流程
      axios.post('/_common/tokens', {})
        .then((res) => {
          if (!res.data.sfdd && res.data.wechat) {
            next(`/mobile/ucenter/bind?openId=${res.data.wechat.openId}&callbackUri=${callbackUri}`)
          }
        })
      // 获取回来的用户信息 如果只包含微信部分的信息 那么证明该用户并未注册成功 那么继续执行注册绑定流程
      // 如果获取回来的用户信息包含了用户的微信信息和平台的用户信息证明用户已然存在那么执行登录流程 即可
    } else {
      // next()
    }
  }
}
</script>

<style lang="css">
</style>
