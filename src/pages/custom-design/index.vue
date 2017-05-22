<template>
  <market>
    <market-item>
      <div class="what">
        <section class="what__hd _tc"
                 grid='middle'>
          <div>
            <h1 class="Intro__title animated fade">一对一定制是什么</h1>
            <p class="Intro__desc  animated slideInUp fade">
              一个设计团队，服务一家客户，
              <br> 规划今后的生活，您仅需面对一个主案设计师，
              <br> 剩下的交给我们。
              <br> 只有充分的项目经验、优良的沟通与表达能力，
              <br> 才能懂你与你的家人，
              <br> 主案设计师须拥有十年以上的工作资历，
              <br> 十个以上的大型项目经验，
              <br> 并能掌握深化、家具、木作的协作分工。
            </p>
          </div>
        </section>
        <section class="what__bd _tc">
          <picture>
            <img class="what__img  animated fade"
                 src="../../assets/custom-design/what.png"
                 alt="">
          </picture>
        </section>
      </div>
    </market-item>

    <market-item>
      <div class="who">
        <h1 class="Intro__title  animated fade">哪些客户需要一对一的
          <br>定制设计？
        </h1>
        <p class="Intro__desc  animated fade slideInUp">
          我们认为整装预案能满足
          <br> 大部分客户的需求，
          <br> 但是当有如下情况时，需考虑一对一定制设计，
          <span class="who__hl">
            <br> 需求复杂且不稳定
            <br> 设计难度高
            <br> 独特追求及审美品味
            <br> 居住者多或决策人多
          </span>
        </p>
        <picture>
          <source type="image/webp"
                  srcset="../../assets/custom-design/who.jpg.webp">
          <img class="who__img  animated fade"
               src="../../assets/custom-design/who.jpg"
               width="100%"
               alt="">
        </picture>
      </div>
    </market-item>

    <market-item>
      <div class="flow">
        <section class="flow__hd _tc"
                 grid='middle'>
          <div>
            <h1 class="Intro__title  animated fade">
              定制流程
            </h1>
            <p class="Intro__desc  animated fade slideInUp">
              优秀的作品来自设计师与您与全部家庭成员的充分协作，
              <br> 严谨的流程与高效的沟通是基础。
            </p>
          </div>

        </section>
        <section class="flow__bd _tc">
          <picture>
            <img class="flow__img  animated fade"
                 src="../../assets/custom-design/flow.png">
          </picture>
        </section>
      </div>
    </market-item>

    <market-item>
      <frag-know-previous />
    </market-item>
  </market>
</template>

<style src='./index.css' scoped></style>

<script>
import Market from '@/components/Market'
import MarketItem from '@/components/MarketItem'
import fragKnowPrevious from '@/components/frag/know-previous'
export default {
  components: {
    Market,
    MarketItem,
    fragKnowPrevious
  }
}
</script>

