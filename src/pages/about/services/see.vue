<template>
  <market>
    <market-item>
      <div class="top"></div>
    </market-item>

    <market-item>
      <div class="real">
        <section class="real__hd _tc"
                 grid='middle'>
          <div>
            <h1 class="Intro__title">
              效果图即实景
            </h1>
            <p class="Intro__desc">
              中孚空间的整装预案从设计、施工、建材、
              <br> 设备、家具、饰品给业主提供整包服务，
              <br> 通过在线VR浏览，提前预知到入住后的各处细节，小到阳台地漏，
              <br> 大到客餐厅的整体效果，一览无余，
              <br> 我们通过SADP（中孚自研的施工图设计插件）
              <br> 确保每张图纸的精确度，
              <br> 再通过全尺寸放线在开工早期就
              <br> 完成最终效果的室内呈现。
            </p>
          </div>
        </section>
        <section class="real__bd _tc">
          <v-video src='//video.baogaoyezhu.com/video/sfdd/1.mp4'></v-video>
        </section>

      </div>

    </market-item>

    <market-item>
      <frag-whole-line />
    </market-item>

    <market-item>
      <frag-count-down></frag-count-down>
    </market-item>

  </market>
</template>
<style src='./see.css' scoped>

</style>

<script>
import Market from '@/components/Market'
import MarketItem from '@/components/MarketItem'
import vVideo from '@/components/Video'
import fragWholeLine from '@/components/frag/whole-line'
import fragCountDown from '@/components/frag/count-down'
export default {
  components: {
    Market,
    MarketItem,
    vVideo,
    fragWholeLine,
    fragCountDown
  }
}
</script>
