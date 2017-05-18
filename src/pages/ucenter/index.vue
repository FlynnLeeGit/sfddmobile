<template>
  <div>
     <router-view />
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    if (to.query.code && to.query.state) {
      // 用户确认授权 下一步通过code和state去请求后端 通过后端去拿取access_token 并种下登录凭证
      window.alert(to.query.code)
    } else {
      next()
    }
  }
}
</script>

<style lang="css">
</style>
