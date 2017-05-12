<template>
  <market :audio='bgAudio'>
    <market-item class="assemble-top">
      <div class="assemble-top__img animated fade"></div>
      <div class="assemble-top__info">
        <h1 class="assemble-top__title animated fade scale">新中式</h1>
        <p class="assemble-top__desc animated fade slideInUp">
          低调优雅，独成天地
        </p>
        <span class="assemble-top__price animated fade slideInUp">
          2580/m
        </span>
      </div>
    </market-item>
    <market-item>
      <div class="assemble-sub">
        <h1 class="assemble-sub__title animated fade">
          惊鸿一面
        </h1>
        <p class="assemble-sub__desc animated fade slideInUp">
          风吹晚灯，杜鹃摇曳
          <br> 一盏茶，一席话，一段情
          <br> 尘世间独留一片方圆，自成天地
          <br> 山水是你的眼帘
          <br> 画与你是我的风景
          <br> 不恋红尘却难舍这番回忆
          <br> 莲白、湛鸟、墨枝，在屋檐下交织出那年惊鸿一面
        </p>
      </div>
    </market-item>
    <market-item>
      <div class="assemble-space hall">
        <div class="assemble-space__img animated fade"></div>
        <div class="assemble-space__info">
          <img class="assemble-space__bg"
               src="../../assets/assemble/cn/moutain.png"
               alt="bg-ahll">
          <h1 class="assemble-space__title animated fade">
            客厅
          </h1>
          <p class="assemble-space__desc animated fade slideInUp">
            新中式风格，东方人特有的情怀，木构架门的装饰显示主人的成熟稳重。知更鸟蓝撞色地毯、抱枕和金色花鸟卷背景完美融合在一起。地面大理石纹沉静大气，与天花板大片留白遥相呼应，现代中揉着古典。另外大开大合式的家具装饰，将房间整体层次美糅合升华，显出大家风范。
          </p>
        </div>
      </div>
    </market-item>

    <market-item>
      <div class="assemble-space dining-room">
        <div class="assemble-space__img animated fade"></div>
        <div class="assemble-space__info">
          <img class="assemble-space__bg"
               src="../../assets/assemble/cn/moutain.png"
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
          <img class="assemble-space__bg"
               src="../../assets/assemble/cn/moutain.png"
               alt="bg-bedroom">
          <h1 class="assemble-space__title animated fade">
            卧室
          </h1>
          <p class="assemble-space__desc animated fade slideInUp">
            卧室延续了客厅的花鸟和餐厅的水墨画装饰，色调也是如出一辙的优雅大气，在中式的基础上，加入了现代飘窗元素，花朵的装饰给整个空间添上了温馨的气息，在低调中缓缓道来生活与艺术的真理。地面换成了木板，不仅舒适度倍增，还赋有自然的纹理，符合中国人一贯的“天人合一”追求。
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
          尘世嚣嚣，
          <br> 欲望横流，
          <br> 你是否还坚持心中那一份最初的悸动。
          <br> 坐卧进这一片港湾，
          <br> 无论潮起潮落，
          <br> 任千年的故事顺指尖流淌。
          <br> 独在这片雅静天空，
          <br> 寻找心灵的平静。
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
      bgAudio: require('@/assets/assemble/cn/bg.mp3')
    }
  }
}
</script>
<style src='./cn.css' scoped></style>

