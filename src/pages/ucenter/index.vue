<template>
  <div>
     <router-view />
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    next()
  }
}
</script>

<style lang="css">
</style>
