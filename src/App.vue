<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>


<style lang="less">
@import '~vux/src/styles/reset.less';

html,
body,
#app {
  height: 100%;
}

body {
  background-color: #fbf9fe;
}
</style>
<style src='./style/global.css'></style>
<style src='./style/grid.css'></style>
<style src='./style/animate.css'></style>
<style src='./style/transitions.css'></style>
<style src='./style/helpers.css'></style>
<style src='./style/atoms.css'></style>
