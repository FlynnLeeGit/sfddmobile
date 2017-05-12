<template>
  <market :audio='bgAudio'>
    <market-item class="assemble-top">
      <div class="assemble-top__img animted fade"></div>
      <div class="assemble-top__info">
        <h1 class="assemble-top__title animated scale">新古典</h1>
        <p class="assemble-top__desc animated slideInUp fade">
          新式古典，引领风骚
        </p>
        <span class="assemble-top__price animated fade slideInUp">
          2580/m
        </span>
      </div>

    </market-item>
    <market-item>
      <div class="assemble-sub">
        <h1 class="assemble-sub__title animated fade">
          情调绅士
        </h1>
        <p class="assemble-sub__desc animated fade slideInUp">
          曾流连于塞纳河旁，蓝色流水舒缓无声，
          <br> 漫步过香榭丽舍大街，梧桐树声窸窸窣窣。
          <br> 半轮落日，一杯拿铁，一缕幽香，
          <br> 就在某个不经意的时间节点，
          <br> 忘却一切烦扰。
          <br> 留声机一圈一圈唱着小情调，雕花大门开了又关，
          <br> 有人频频回首，不知是听风，还是等雨停。
        </p>
      </div>
    </market-item>
    <market-item>
      <div class="assemble-space hall">
        <div class="assemble-space__img animated fade"></div>
        <div class="assemble-space__info">
          <img class="assemble-space__bg animated fade slideInDown"
               width="144px"
               src="../../assets/assemble/classic/bg-hall.png"
               alt="bg-ahll">
          <h1 class="assemble-space__title animated fade">
            客厅
          </h1>
          <p class="assemble-space__desc animated fade slideInUp">
            新古典的主要特点是形散神聚，用现代的手法和材质还原古典气质。客厅装饰风格的色彩运用比较多，有与餐厅相一致的画框墙和黑白装饰墙，沉稳的静谧蓝沙发和地毯，还有棕褐色的窗帘，无一例外的显示出一种绅士的品格。值得一提的是橙色圆柱皮椅，还给整个空间注入了活力，丝毫不显得沉闷。
          </p>
        </div>
      </div>
    </market-item>
    <market-item>
      <div class="assemble-space dining-room">
        <div class="assemble-space__img animated fade"></div>
        <div class="assemble-space__info">
          <img class="assemble-space__bg animated scaleToRight"
               width="130px"
               src="../../assets/assemble/classic/bg-dining-room.png"
               alt="bg-dining-room">
          <h1 class="assemble-space__title animated fade">
            餐厅
          </h1>
          <p class="assemble-space__desc animated fade slideInUp">
            奢华的嵌入式沙发椅，不论从面料还是质感都能牢牢吸住目光，再加上静谧蓝和微蓝绿的色彩选择，具备了古典与现代的双重审美效果，使人在享受美味的同时也满足了视觉审美。挂满画框的墨绿墙面与纵深视觉的黑白装饰墙相对，提升了整体的空间层次感。
          </p>
        </div>
      </div>
    </market-item>

    <market-item>
      <div class="assemble-space bedroom">
        <div class="assemble-space__img animated fade"></div>
        <div class="assemble-space__info">
          <img class="assemble-space__bg animated scaleToLeft"
               width="223px"
               src="../../assets/assemble/classic/bg-bedroom.png"
               alt="bg-bedroom">
          <h1 class="assemble-space__title animated fade">
            卧室
          </h1>
          <p class="assemble-space__desc animated slideInUp">
            因为延续了客厅的用色选择，各种色块的拼接还是显出了一致性，去除过多的线条装饰，只用了两种简洁的近似图案装饰房间，保留了主人精粹、高雅的性格，仍可以感受到丰富的艺术底蕴和历史文脉特色。糅合了少量白色，使色彩看起来明亮、大方，使整个空间给人以开放、宽容的非凡气度。
          </p>
        </div>
      </div>
    </market-item>
    <market-item>
      <div class="assemble-space whole">
        <div class="assemble-space__img animated fade"></div>
        <div class="assemble-space__info">
          <img class="assemble-space__bg animated fade scaleToRight"
               width="75px"
               src="../../assets/assemble/classic/bg-whole.png"
               alt="bg-whole">
          <h1 class="assemble-space__title animated fade">
            全景图
          </h1>
          <p class="assemble-space__desc animated fade slideInUp">
            新古典设计风格，是用简化的手法、现代的材料和加工技术去追求传统样式的大致轮廓特点；注重装饰效果，用室内陈设品来增强历史文脉特色。整套设计空间布置合理，色彩和材质的大致风格尽量做到一致，从简单到繁杂、从整体到局部都一丝不苟，且摒弃了过于复杂的肌理和装饰，简化线条。
          </p>
        </div>
      </div>
    </market-item>
    <market-item>
      <div class="assemble-ft">
        <h1 class="assemble-ft__title animated slideInUp">
          设计师寄语
        </h1>
        <p class="assemble-ft__desc animated fade">
          电影里那个被紧紧追随的背影，
          <br> 永远是领结袖扣、
          <br> 西装笔挺，在羡艳的目光中，走在圆拱门下。
          <br> 无数人站在门外，
          <br> 踟蹰踱步、相顾无言。
          <br> 没有人是唯一的绅士，只需迈出一步，
          <br> 演绎经典，成就人生。
        </p>
      </div>
    </market-item>
  </market>
</template>
<script>
import Market from '@/components/Market'
import MarketItem from '@/components/MarketItem'
import bgAudio from '@/assets/assemble/classic/bg.mp3'

export default {
  components: {
    Market,
    MarketItem
  },
  data () {
    return {
      bgAudio
    }
  }
}
</script>

<style scoped src='./classic.css'></style>
