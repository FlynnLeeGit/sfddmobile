<template>
  <market>
    <market-item>
      <div class="top">
        <section class="top__txt">
          我们知道客户对于质量的高度关注与自身责任之重大，
          <br> 质量优先的理念扎根在我们每个工作人员心中，
          <br> 在面临多项目进发、手工作业多、执业人员素养中下、
          <br> 管理环节众多、设计复杂程度高、多方协同困难的局面下，
          <br> 我们至少做对了这几件事情：高精度制图、全尺寸放线、
          <br> 班组技术培训、三检制度（品控）、研发项目管理系统、
          <br> 研发施工图标准插件，以保障每个复杂的工程项目的质量不出纰漏。
          <br>
        </section>
      </div>
    </market-item>
    <market-item>
      <frag-whole-line />
    </market-item>

    <market-item>
      <div class="accuracy">
        <section class="accuracy__hd _tc"
                 grid='middle'>
          <div>
            <h1 class="Intro__title">高精度制图</h1>
            <p class="Intro__desc">制图精度是装修的第一道保证，
              <br> 我们研发了针对装饰行业的制图标准插件
              <br> SADP（Sfdd-Auto-Desing-Plugin），
              <br> 确保每一张图纸都精准合规。
              <br> 尺寸详细标注、立面完整表达、材质标识清晰，
              <br> 收口与大样与剖面一张不漏，
              <br> 这些用心不仅为我们效率大幅提升，
              <br> 更为您家的效果落地保驾护航。
            </p>
          </div>
        </section>
        <section class="accuracy__bd _tc">
          <video class="accuracy__video"
                 src="//video.baogaoyezhu.com/video/sfdd/3.mp4"
                 controls></video>
        </section>
      </div>
    </market-item>

    <market-item>
      <div class="tri">
        <section class="tri__hd _tc"
                 grid='middle'>
          <div>
            <h1 class="Intro__title">三检制度</h1>
            <p class="Intro__desc">施工的质量离不开成熟的质量控制体系、
              <br> 我们标准采用高于国际（GB-50203）的企业标准验收依据，
              <br> 独创了品控的三检制度，施工员自检、项目经理自检、质检员全检，
              <br> 三检完成后提报验收，
              <br> 每次验收时均用仪器采集数据，用数据判定合规标准。
              <br> 更为您家的效果落地保驾护航。
            </p>
          </div>
        </section>
        <section class="tri__bd _tc">
          <picture>
            <source type='image/webp'
                    srcset='../../../assets/ideas/quality/tri.jpg.webp'>
            <img src="../../../assets/ideas/quality/tri.jpg"
                 class="tri__img">
          </picture>
        </section>
      </div>
    </market-item>

    <market-item>
      <div class="team">
        <section class="team__hd _tc"
                 grid='middle'>
          <div>
            <h1 class="Intro__title">成熟班组</h1>
            <p class="Intro__desc">施工人员的专业度与项目经理资历是质量体系的基石，
              <br> 我们常年自备专业施工队伍与管理队伍，并就常见施工质量通病预防，
              <br> 反复多次培训与讲解，
              <br> 下载中孚空间常见质量通病预防。
            </p>
          </div>
        </section>
      </div>
    </market-item>

    <market-item>
      <div class="flow">
        <section class="flow__hd _tc"
                 grid='middle'>
          <div>
            <h1 class="Intro__title">高效管理</h1>
            <p class="Intro__desc">多项目并发考验着我们的管理能力
              <br> 面对同时数百个在建项目，每个项目超过120个质量主控点
              <br> 我们采用云端项目管理系统，
              <br> 井井有条的管理着每年数万计的质量主控点
            </p>
          </div>
        </section>
        <section class="flow__bd _tc">
          <picture>
            <source type='image/webp'
                    srcset='../../../assets/ideas/quality/flow.jpg.webp'>
            <img src="../../../assets/ideas/quality/flow.jpg"
                 class="flow__img">
          </picture>
        </section>
      </div>
    </market-item>

    <market-item>
      <frag-count-down />
    </market-item>

  </market>
</template>

<style src='./quality.css' scoped></style>

<script>
import Market from '@/components/Market'
import MarketItem from '@/components/MarketItem'
import fragWholeLine from '@/components/frag/whole-line'
import fragCountDown from '@/components/frag/count-down'

export default {
  components: {
    Market,
    MarketItem,
    fragWholeLine,
    fragCountDown
  }
}
</script>
