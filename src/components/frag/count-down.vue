<template>
  <div class="Advertise count-down"
       grid='middle'>
    <div class="Advertise__content">
      <h1 class="Advertise__title">
        2017年春季 · 整装方案
      </h1>
      <p class="Advertise__desc">
        每季度整装产品限时发售，离本季产品下架时间还有
        <br>
        <span class="_color-primary">{{this.dayRange}}</span>天
      </p>
      <router-link to='/assemble/list'
                   class="Advertise__btn"
                   event='touchstart'>
        点击前往
      </router-link>
    </div>

  </div>
</template>

<style src='./count-down.css'></style>

<script>
export default {
  computed: {
    dayRange () {
      const now = new Date().getTime()
      const end = new Date('2017-07-01').getTime()
      const oneDay = 24 * 3600 * 1000
      const rangeTime = end - now
      return Number.parseInt(rangeTime / oneDay)
    }
  }
}
</script>
