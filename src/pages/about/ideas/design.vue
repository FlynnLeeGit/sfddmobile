<template>
  <market>
    <market-item>
      <div class="accuracy">
        <section class="accuracy__hd _tc"
                 grid='middle'>
          <div>
            <h1 class="Intro__title">高精度制图</h1>
            <p class="Intro__desc">制图精度是装修的第一道保证，
              <br> 我们研发了针对装饰行业的制图
              <br> 标准插件SADP（Sfdd-Auto-Desing-Plugin），
              <br> 确保每一张图纸都精准合规。
              <br> 尺寸详细标注、立面完整表达、材质标识清晰，
              <br> 收口与大样与剖面一张不漏，
              <br> 这些用心不仅为我们效率大幅提升，
              <br> 更为您家的效果落地保驾护航。
            </p>
          </div>
        </section>
        <section class="accuracy__bd _tc">
          <video src="//video.baogaoyezhu.com/video/sfdd/2.mp4"
                 controls></video>
        </section>
      </div>
    </market-item>

    <market-item>
      <div class="space">

        <section class="space__hd _tc"
                 grid='middle'>
          <div>
            <h1 class="Intro__title">空间利用</h1>
            <p class="Intro__desc">每个预案中，我们均考虑了十二类收纳，
              <br> 从零食到孩子的玩具，从被褥到凉席，
              <br> 不论是占地许多的南北货，还是难得一用的旅行箱，
              <br> 我们都在细节中予以规划考虑。
            </p>
          </div>
        </section>
        <section class="space__bd _tc">
          <img src="../../../assets/ideas/design/space.jpg"
               class="space__img">
        </section>
      </div>
    </market-item>

    <market-item>
      <div class="taste">
        <section class="taste__hd _tc"
                 grid='middle'>
          <div>
            <h1 class="Intro__title">品味格调</h1>
            <p class="Intro__desc">每一种风格背后都有他的人文背景，
              <br> 用欣赏与尊重的眼光，
              <br> 去品味中意的历史故事
              <br> 我们已经为您软硬装整体搭配完毕，供有格调的您细细品味，
              <br> 我们提供了小道一个摆件的全套软装方案供您选择，
              <br> 让您买的到，更发现实惠。
            </p>
          </div>
        </section>
      </div>
    </market-item>

    <market-item>
      <div class="personal">
        <section class="personal__hd _tc">
          <div>
            <h1 class="Intro__title">人性化细节</h1>
            <p class="Intro__desc">我们相信以人为本的设计能为您带来
              <br> 切切实实的今后使用之便，从床边USB充电插座，
              <br> 到客厅的电视预埋管，从卫生间的浴霸，到厨房的凉霸，
              <br> 我们全力以赴，只为您入住后的一个点赞。
            </p>
          </div>
        </section>
        <section class="personal__bd _tc">
          <img src="../../../assets/ideas/design/personal.jpg"
               alt=""
               class="personal__img">
        </section>
      </div>
    </market-item>

    <market-item>
      <div class="light">
        <section class="light__hd">
          <h1 class="Intro__title">照明</h1>
          <p class="Intro__desc">灯光是场景的烘托，温馨的保障，
            <br> 我们根据不同空间的场景设置了最适合的灯光数量与色温
            <br> 全屋3500±500K的色温，
            <br> 使您不论在阅读工作还是全家聚餐时都有起到好处的光线。
          </p>
        </section>
      </div>
    </market-item>

    <market-item>
      <div class="budget">
        <section class="budget__hd _tc"
                 grid='middle'>
          <div>
            <h1 class="Intro__title">预算控制</h1>
            <p class="Intro__desc">装修是次昂贵的消费，
              <br> 我们有责任帮您把钱花在实处，
              <br> 在每套方案中，我们提倡“刚刚好”，
              <br> 反对过度设计与材质堆砌，
              <br> 在效果与造价中，取得平衡点，配以我们的集采优势，
              <br> 使得出自大师之手的整装方案可以亲民的价格落到您家，
              <br> 每个系列中，我们制作了三款产品，
              <br> 近似的格调，严选的精品，确保低价。
            </p>
          </div>
        </section>
        <section class="budget__bd _tc">
          <img src="../../../assets/ideas/design/budget.jpg"
               class="budget__img">
        </section>
      </div>
    </market-item>

    <market-item>
      <frag-count-down></frag-count-down>
    </market-item>

  </market>
</template>

<style src='./design.css' scoped></style>

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
