<template>
  <market>
    <market-item>
      <div class="top"
           grid='bottom'>
        <section class="top__content">
          <h1 class="Intro__title">全程带资施工</h1>
          <p class="Intro__desc _tl">施工中的纠纷是每个业主都反感的，而当下家装行业普遍以预付款形式让业主维权成本高昂，这其中的主要矛盾点是在质量上，即质量出现问题后的双方扯皮，而预付工程款让业主处处被动。我们认为工程质量有瑕疵在所难免，关键是对待质量的态度，我们采用主动预防（高精度制图、全尺寸放线，质量三检制度等形成我们的质量管理体系）与及时整改，来赢取每个用户的信任。因此，我们从2012年起，每一个项目（仅家装类）均采用先施工后付款，全程带资的形式来服务用户，已坚持了6年，只为业主放心。</p>
        </section>

      </div>
    </market-item>
    <market-item>
      <frag-payflow />
    </market-item>
    <market-item>
      <frag-count-down></frag-count-down>
    </market-item>
  </market>
</template>

<style src='./construction.css' scoped></style>

<script>
import Market from '@/components/Market'
import MarketItem from '@/components/MarketItem'
import fragCountDown from '@/components/frag/count-down'
import fragPayflow from '@/components/frag/payflow'
export default {
  components: {
    Market,
    MarketItem,
    fragCountDown,
    fragPayflow
  }
}
</script>
