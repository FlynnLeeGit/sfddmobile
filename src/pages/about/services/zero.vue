<template>
  <market>
    <market-item>
      <div class="top">
        <section class="top__hd _tc"
                 grid='middle'>
          <div>
            <h1 class="Intro__title">
              整装一口价，
              <br> 从设计到入驻的全部花费
            </h1>
            <p class="Intro__desc">
              装修是次昂贵的消费，对于普通客户而言，
              <br> 装修工程造价难估难测，既不知省钱后效果是否有折扣，
              <br> 也不知多花费的质量有没有提升，
              <br> 我们有责任帮您把钱花在实处，在每套方案中，
              <br> 我们提倡“恰如其分”的设计原则，反对过度设计与材质堆砌，
              <br> 在效果与造价中，取得平衡点，
              <br> 每一款整装方案中，均配以设计师推荐的软装与设备价格清单，
              <br> 可按需选购。
            </p>
          </div>
        </section>
        <section class="top__bd">
          <picture>
            <source type='image/webp'
                    srcset='../../../assets/services/zero/house.jpg.webp'>
            <img src="../../../assets/services/zero/house.jpg"
                 class="top__img">
          </picture>
        </section>
      </div>
    </market-item>
    <market-item>
      <div class="budget">
        <section class="budget__hd _tc"
                 grid='middle'>
          <div>
            <h1 class="Intro__title">平方米计价，预算即决算</h1>
            <p class="Intro__desc">鉴于家装中的风格与元素、
              <br> 形与机能、取费标准、工艺描述、
              <br> 工程计量、项目内容、分包配套、建材选用均有较强的专业性，
              <br> 使得业主往往多市场跑一圈询价后越发懵圈，
              <br> 有的要先设计，有的报半包价，有的报全包价，
              <br> 有的报估算，有的报概算，
              <br> 至于最关心的住进去前一共要多少钱却没有答案，
              <br> 我们采用硬装平方米计价，软装设备选购的方式，
              <br> 帮您主控自家造价。
            </p>
          </div>
        </section>
        <section class="budget__hd _tc">
          <ul grid>
            <li class="budget__item">
              <h3>装修面积</h3>
              <p>计价面积</p>
              <div class="budget__icon-wrap"
                   grid='bottom'>
                <img src="../../../assets/services/zero/area.png"
                     width="60px">
              </div>
            </li>
            <li class="budget__symbol">
              <img src="../../../assets/services/zero/x.png"
                   width="12px">
            </li>
            <li class="budget__item">
              <h3>整装方案</h3>
              <p>每平方米价格</p>
              <div class="budget__icon-wrap"
                   grid='bottom'>
                <img src="../../../assets/services/zero/price.png"
                     width="60px">
              </div>
            </li>
            <li class="budget__symbol">
              <img src="../../../assets/services/zero/=.png"
                   width="15px">
            </li>
            <li class="budget__item">
              <h3>总金额</h3>
              <p>0增项，0加价</p>
              <div class="budget__icon-wrap"
                   grid='bottom'>
                <img src="../../../assets/services/zero/calc.png"
                     width="50px">
              </div>
            </li>
          </ul>
          <p class="budget__txt">说明：非标项目造价与大宅设计请到店咨询。</p>
        </section>
      </div>
    </market-item>
    <market-item>
      <div class="increment"
           grid='bottom'>
        <div class="increment__content">
          <img class="increment__img"
               src="../../../assets/services/zero/0.png"
               width="160px">
          <h1 class="Intro__title _tl">
            闭口合同，零增项，零漏项
          </h1>
          <p class="Intro__desc _tl">
            我们的专业体现在您能体验到的设计、建材、工程、项目管理，
            <br> 以及您看不到的合约造价与预算管理，
            <br> 我们的成本合约部门，日复一日的精算着整装产品的止损线，
            <br> 跟供应商不断开会模拟现场极端情况，
            <br> 只为保证整装产品的闭口实现。
          </p>
        </div>
      </div>
    </market-item>
    <market-item>
      <frag-count-down />
    </market-item>
  </market>
</template>
<style src='./zero.css' scoped></style>

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
