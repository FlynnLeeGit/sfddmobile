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
      <div class="line">
        <section class="line__hd _tc"
                 grid='middle'>
          <div>
            <h1 class="Intro__title">全尺寸放线</h1>
            <p class="Intro__desc">全尺寸放线作为我们在正式施工第一步，至关重要，
              <br> 它是图纸校验、施工指导、分包商与材料商的量尺依据，
              <br> 通过五根主控线（空间主控线、轴线、一米水平线、地面完成面线、
              <br> 吊顶完成面线、机电标高线）
              <br> 加以湿作业施工线、造型线、天花投影，
              <br> 同时放线于现场，清晰的标示材质、尺寸，能提早暴露现场问题，
              <br> 高效协调我们与各材料商、分包商之间的工作范围，
              <br> 确保施工一气呵成。
            </p>
          </div>
        </section>
        <section class="line__bd _tc">
          <video class="line__video"
                 src="//video.baogaoyezhu.com/video/sfdd/2.mp4"
                 controls></video>
        </section>
      </div>
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
          <img src="../../../assets/ideas/quality/tri.jpg"
               class="tri__img">
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
        <section class="flow__bd _tc">
          <img src="../../../assets/ideas/quality/flow.jpg"
               class="flow__img">
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
import fragCountDown from '@/components/frag/count-down'

export default {
  components: {
    Market,
    MarketItem,
    fragCountDown
  }
}
</script>
