<template>
  <market :audio='bgAudio'>
    <market-item class="assemble-top">
      <div class="assemble-top__img animated fade"></div>
      <div class="assemble-top__info">
        <h1 class="assemble-top__title animated scale">现代简约</h1>
        <p class="assemble-top__desc animated fade slideInUp">
          品味纯净，因你动心
        </p>
        <span class="assemble-top__price">
          2580/m
        </span>
      </div>
    </market-item>
    <market-item>
      <div class="assemble-sub">
        <h1 class="assemble-sub__title animated fade">
          邂逅精致
        </h1>
        <p class="assemble-sub__desc animated fade slideInUp">
          喜欢碧空之上云卷云舒，
          <br> 喜欢杯中咖啡袅袅生香，
          <br> 在每一个温润的气候里，
          <br> 静静欣赏飞鸟划过的轨迹。
          <br> 在一本书的尾页，灯光搅乱了如墨般黑夜，
          <br> 伴着星光点点呼吸清冽的空气，
          <br> 你来，或者不来，我都在这里。
        </p>
      </div>
    </market-item>
    <market-item>
      <div class="assemble-space hall">
        <div class="assemble-space__img animated fade"></div>
        <div class="assemble-space__info">
          <img class="assemble-space__bg animated fade scaleToLeft"
               src="../../assets/assemble/simple/line1.png"
               alt="bg-ahll">
          <h1 class="assemble-space__title animated fade">
            客厅
          </h1>
          <p class="assemble-space__desc animated fade slideInUp">
            一眼览去，客厅空间明亮开敞、内外通透，墙面、地面和宽沙发均是简洁的灰色系，显出一种简约的空间情感、本能和理性的融合。装饰辅材多用金属和玻璃，也是现代风格家具的常见装饰手法，尤其是整个金属材质的茶几，能给人带来前卫、不受拘束的感觉，在这背后体现的是主人公时尚的生活品味。
          </p>
        </div>
      </div>
    </market-item>

    <market-item>
      <div class="assemble-space dining-room">
        <div class="assemble-space__img animated fade"></div>
        <div class="assemble-space__info">
          <img class="assemble-space__bg animated scaleToRight fade"
               src="../../assets/assemble/simple/line2.png"
               alt="bg-dining-room">
          <h1 class="assemble-space__title animated fade">
            餐厅
          </h1>
          <p class="assemble-space__desc animated fade slideInUp">
            整个餐厅色调为黑白灰，餐椅的姜土色与墙上的水墨画和谐般配。天花吊顶灯以木条相交成方格形，简单的用实木做框，层次清晰，有“规矩”和“方圆”之意。餐厅简单的陈设，突出实用性功能和简约性审美，同样的大理石纹在传统中，加入了现代元素，优雅绅士。
          </p>
        </div>
      </div>
    </market-item>

    <market-item>
      <div class="assemble-space bedroom">
        <div class="assemble-space__img animated fade"></div>
        <div class="assemble-space__info">
          <img class="assemble-space__bg animated fade scaleToLeft"
               src="../../assets/assemble/simple/line2.png"
               alt="bg-bedroom">
          <h1 class="assemble-space__title animated fade">
            卧室
          </h1>
          <p class="assemble-space__desc animated fade slideInUp">
            卧室是用来消除工作的疲惫、忘却都市的喧闹的放松空间。色彩运用方面，在灰色的基调上选择了大片的爱丽丝蓝和白色相接，营造出一种安静、祥和的氛围，使人不自觉就放松神经。卧室的整体布置，尽可能的取消了多余的东西，只留下了玻璃和金属配饰这一最能体现简约风的代表物。在满足功能需要的前提下，将空间、人及物进行合理精致的组合，用最洗练的笔触，描绘出最丰富动人的空间效果。
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
      bgAudio: require('@/assets/assemble/simple/bg.mp3')
    }
  }
}
</script>
<style src='./simple.css' scoped></style>

