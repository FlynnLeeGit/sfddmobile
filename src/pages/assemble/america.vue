<template>
  <market :audio='bgAudio'>
    <market-item class="assemble-top">
      <div class="assemble-top__img animated fade"></div>
      <div class="assemble-top__info">
        <h1 class="assemble-top__title animated scale fade">简 美</h1>
        <p class="assemble-top__desc animated slideInUp fade">
          华美世界，自由至上
        </p>
        <span class="assemble-top__price animated slideInUp fade">
          2580/m
        </span>
      </div>
    </market-item>
    <market-item>
      <div class="assemble-sub">
        <h1 class="assemble-sub__title animated fade">
          遇见魅力
        </h1>
        <p class="assemble-sub__desc animated slideInUp fade">
          华灯初上，星夜璀璨
          <br> 斑斓的光点映在害羞女孩的脸庞
          <br> 倚车观望，杯中红酒跳跃
          <br> 优雅先生第一次透过一双眼，窥到整个世界
          <br> 簇拥一个她，拥有一个家
          <br> 一霎那，遇见此生最好的美好
          <br> 天空中绝响的，是一首关于自由的赞美诗
        </p>
      </div>
    </market-item>
    <market-item>
      <div class="assemble-space hall">
        <div class="assemble-space__img animated fade"></div>
        <div class="assemble-space__info">
          <img class="assemble-space__bg animated scaleToLeft"
               src="../../assets/assemble/america/limb.png"
               width="120px"
               alt="bg-hall">
          <h1 class="assemble-space__title animated fade">
            客厅
          </h1>
          <p class="assemble-space__desc animated slideInUp">
            客厅作为招待来宾的场所，在材料选择上大多倾向于较硬、光挺、华丽的材质，藏蓝和姜黄两种沙发简直是命中注定的搭配，就像爱意正浓的情侣一般。光滑石材的桌面，大气不失内涵，金属环形桌柱和上方的方形金属圆柱吊灯搭出了强烈的视觉冲击力。客厅是沉稳与华丽的结合，简洁明快的色调，在干净利落中凸显出美式自由的艺术感。
          </p>
        </div>
      </div>
    </market-item>

    <market-item>
      <div class="assemble-space dining-room">
        <div class="assemble-space__img animated fade"></div>
        <div class="assemble-space__info">
          <img class="assemble-space__bg animated scaleToRight"
               width="113px"
               src="../../assets/assemble/america/leaf.png"
               alt="bg-dining-room">
          <h1 class="assemble-space__title animated fade">
            餐厅
          </h1>
          <p class="assemble-space__desc animated slideInUp">
            恰到好处的生活，是别样的精致。餐厅色彩以灰调+白调为主，大胆的加入了明亮的姜黄色作为调剂，跟吊顶排灯色调相一致，反而提升了整个餐厅的格调，大气磅礴又不失含蓄内敛，做到了情感上的收放自如；缎面的窗帘更是给整个空间添上了一抹柔和的感情色彩，显示出主人柔软的内心。整体没有过多的空间装饰，却起到了以少胜多，以简胜繁的效果。
          </p>
        </div>
      </div>
    </market-item>

    <market-item>
      <div class="assemble-space bedroom">
        <div class="assemble-space__img animated fade"></div>
        <div class="assemble-space__info">
          <img class="assemble-space__bg bedroom__flower animated scaleToLeft fade"
               src="../../assets/assemble/america/flower.png"
               alt="bg-bedroom"
               width="138px">
          <img class="assemble-space__bg bedroom__flower-leaf animated scaleToLeft fade delay600"
               src="../../assets/assemble/america/flower-leaf.png"
               alt="bg-bedroom"
               width="86px">
          <h1 class="assemble-space__title animated fade">
            卧室
          </h1>
          <p class="assemble-space__desc animated fade slideInUp">
            美式家居的卧室布置较为温馨，作为主人的私密空间，主要以功能性和实用舒适为考虑的重点，多用非炫目灯光，多用温馨柔软的成套布艺来装点；同时在色彩选择上，也以简单、素雅为主，空间的色彩没有突兀的部分，可以有效地建立一种温情暖意的家庭氛围。同时，没有反复的空间布局和多余的设计，显得宽广，不会觉得束缚。
          </p>
        </div>
      </div>
    </market-item>

    <market-item>
      <div class="assemble-ft">
        <h1 class="assemble-ft__title animated fade slideInUp">
          设计师寄语
        </h1>
        <p class="assemble-ft__desc animated fade">
          一杯白开水，一本没有结局的书，
          <br> 世上那么多的纯粹，是不问缘由。
          <br> 剪一片心情挂在窗外，
          <br> 远方的风轻轻拂过，带来遥远的问候。
          <br> 卸下平日的思绪万千，
          <br> 将手边的物什雕琢成精致的模样，
          <br> 简约又不简单的活着，
          <br> 就能邂逅最美的自己。
        </p>
      </div>
    </market-item>
  </market>
</template>
<script>
import Market from '@/components/Market'
import MarketItem from '@/components/MarketItem'
export default {
  components: {
    Market,
    MarketItem
  },
  data () {
    return {
      bgAudio: require('@/assets/assemble/america/bg.mp3')
    }
  }
}
</script>
<style src='./america.css' scoped></style>

