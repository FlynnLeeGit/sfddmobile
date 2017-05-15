<template>
  <market>

    <market-item class="assemble-top cn">
      <div class="assemble-top__img animated fade"></div>
      <div class="assemble-top__info">
        <h1 class="assemble-top__title animated scale fade">新中式</h1>
        <p class="assemble-top__desc animated slideInUp fade">
          低调优雅，独成天地
        </p>
        <router-link to='/assemble/intro/cn'
                     class="assemble-top__btn animated slideInUp fade">
          查看详情
        </router-link>
      </div>
    </market-item>

    <market-item class="assemble-top classic">
      <div class="assemble-top__img animated fade"></div>
      <div class="assemble-top__info">
        <h1 class="assemble-top__title animated scale fade">新古典</h1>
        <p class="assemble-top__desc animated slideInUp fade">
          新式古典，引领风骚
        </p>
        <router-link to='/assemble/intro/classic'
                     class="assemble-top__btn animated slideInUp fade">
          查看详情
        </router-link>
      </div>
    </market-item>

    <market-item class="assemble-top simple">
      <div class="assemble-top__img animated fade"></div>
      <div class="assemble-top__info">
        <h1 class="assemble-top__title animated scale fade">现代简约</h1>
        <p class="assemble-top__desc animated slideInUp fade">
          品味纯净，因你动心
        </p>
        <router-link to='/assemble/intro/simple'
                     class="assemble-top__btn animated slideInUp fade">
          查看详情
        </router-link>
      </div>
    </market-item>

    <market-item class="assemble-top america">
      <div class="assemble-top__img animated fade"></div>
      <div class="assemble-top__info">
        <h1 class="assemble-top__title animated scale fade">简 美</h1>
        <p class="assemble-top__desc animated slideInUp fade">
          华美世界，自由至上
        </p>
        <router-link to='/assemble/intro/america'
                     class="assemble-top__btn animated slideInUp fade">
          查看详情
        </router-link>
      </div>
    </market-item>
  </market>
</template>

<style scoped src='./list.css'></style>

<script>
import Market from '@/components/Market'
import MarketItem from '@/components/MarketItem'
export default {
  components: {
    Market,
    MarketItem
  },
  created () {
    this.$root.$emit('assemble:hideTabs')
  },
  destroyed () {
    this.$root.$emit('assemble:showTabs')
  }
}
</script>

