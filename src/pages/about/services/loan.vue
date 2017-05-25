<template>
  <market>
    <market-item>
      <div class="top _tc"
           grid='middle'>
        <div class="top__content">
          <h1 class="Intro__title">装修贷款</h1>
          <p class="Intro__desc">
            最高100万，最长可分60期（五年）
            <br> 还款方式自由，除传统的等额本金/等额本息外，
            <br> 还可以到期一次还本付息，
            <br> 及按照付息任意还本
            <br> 中孚空间免费协助准备装修贷款资料
          </p>
          <router-link class="top__apply"
                       to='/apply'
                       event='touchstart'>去申请</router-link>
        </div>
      </div>
    </market-item>
    <market-item>
      <frag-count-down></frag-count-down>
    </market-item>

  </market>
</template>
<style src='./loan.css' scoped>

</style>

<script>
import Market from '@/components/Market'
import MarketItem from '@/components/MarketItem'
import fragCountDown from '@/components/frag/count-down'
export default {
  components: {
    Market,
    MarketItem,
    fragCountDown
  }
}
</script>
