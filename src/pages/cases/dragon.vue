<template>
  <market class="dragon">
    <market-item>
      <div class="top">
        <picture>
          <img class="animated fade"
               src="../../assets/cases/dragon/top-txt.png"
               width="80%">
        </picture>
        <p class="animated fade slideInUp">
          装修-设计-施工-预算-方案-官方推荐
        </p>
      </div>
    </market-item>

    <market-item>
      <div class="style">
        <section class="style__hd _tc"
                 grid='middle'>
          <h1 class="Intro__title">风格筛选</h1>
        </section>
        <section class="style__tab">
          <tab v-model='currentStyle'
               active-color='#008489'>
            <tab-item v-for='(style,idx) in styles'
                      :key='idx'>{{style}}</tab-item>
          </tab>
        </section>
        <section class="style__bd _tc">
          <div class="style__content "
               v-for='(sImgs,sIdx) in styleContent'
               v-if='sIdx === currentStyle'
               :key='sIdx'>
            <div class="style__img animated fade slideInUp"
                 v-for='src in sImgs'>
              <img width="100%"
                   :src="src">
            </div>
          </div>
        </section>
      </div>
    </market-item>

    <market-item>
      <div class="budget">
        <div class="budget__hd _tc">
          <h1 class="Intro__title">城开珑庭·中孚空间预算</h1>
          <p class="Intro__desc">施工预算约￥ xxxx/m²，推荐软装约￥dd</p>
        </div>
        <div class="budget__bd"
             grid='middle'>
          <div class="budget__list"
               grid>
            <div class="budget__item"
                 grid='middle'>
              <div>
                <img src="../../assets/cases/dragon/icon1.png"
                     width="55px">
                <p>了解工程预算</p>
                <img src="../../assets/cases/dragon/icon-arrow.png"
                     width="20px">
              </div>
            </div>
            <div class="budget__item"
                 grid='middle'>
              <div>
                <img src="../../assets/cases/dragon/icon2.png"
                     width="45px">
                <p>了解建材清单</p>
                <img src="../../assets/cases/dragon/icon-arrow.png"
                     width="20px">
              </div>
            </div>
            <div class="budget__item"
                 grid='middle'>
              <div>
                <img src="../../assets/cases/dragon/icon3.png"
                     width="55px">
                <p>了解软装建议</p>
                <img src="../../assets/cases/dragon/icon-arrow.png"
                     width="20px">
              </div>
            </div>
            <div class="budget__item"
                 grid='middle'>
              <div>
                <img src="../../assets/cases/dragon/icon4.png"
                     width="34px">
                <p>了解设备电气清单</p>
                <img src="../../assets/cases/dragon/icon-arrow.png"
                     width="20px">
              </div>
            </div>
          </div>
        </div>
      </div>
    </market-item>

    <market-item>
      <div class="layout">
        <section class="layout__hd _tc"
                 grid='middle'>
          <h1 class="Intro__title">
            城开珑庭·房型设计
            <br>布局方案
          </h1>
        </section>
        <section class="layout__tab">
          <tab v-model='currentLayout'>
            <tab-item>两房</tab-item>
            <tab-item>三房</tab-item>
          </tab>
        </section>
        <section class="layout__bd">

        </section>

      </div>

    </market-item>

    <!--<market-item>
                    <div class="video">
                      <section class="video__hd _tc"
                               grid='middle'>
                        <h1 class="Intro__title">了解中孚的三个视频</h1>
                      </section>
                      <section class="video__bd">
                        <video class="video__item"
                               src="//video.baogaoyezhu.com/video/sfdd/1.mp4">
                        </video>
                        <video class="video__item"
                               src="//video.baogaoyezhu.com/video/sfdd/2.mp4">
                        </video>
                        <video class="video__item"
                               src="//video.baogaoyezhu.com/video/sfdd/3.mp4">
                        </video>
                      </section>
                    </div>
                  </market-item>-->

    <market-item>
      <div class="team">
        <section class="team__hd _tc"
                 grid='middle'>
          <h1>中孚资深设计团队</h1>
        </section>
        <section class="team__bd">
          <swiper>
            <swiper-item>1</swiper-item>
            <swiper-item>2</swiper-item>
            <swiper-item>3</swiper-item>
            <swiper-item>4</swiper-item>
          </swiper>
        </section>
      </div>
    </market-item>

    <market-item>
      <frag-payflow />
    </market-item>

    <market-item>
      <frag-know-assemble />
    </market-item>

  </market>
</template>

<style src='./dragon.css' scoped></style>

<script>
import Market from '@/components/Market'
import MarketItem from '@/components/MarketItem'
import fragPayflow from '@/components/frag/payflow'
import fragKnowAssemble from '@/components/frag/know-assemble'
import { Tab, TabItem, Swiper, SwiperItem } from 'vux'

export default {
  components: {
    Market,
    MarketItem,
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    fragKnowAssemble,
    fragPayflow
  },
  data () {
    return {
      currentStyle: 0,
      styles: ['新中式', '美式', '现代简约', '新古典'],
      styleContent: [
        [require('../../assets/assemble/cn/hall.jpg'), require('../../assets/assemble/cn/dining-room.jpg')],
        [require('../../assets/assemble/america/hall.jpg'), require('../../assets/assemble/america/dining-room.jpg')],
        [require('../../assets/assemble/simple/hall.jpg'), require('../../assets/assemble/simple/dining-room.jpg')],
        [require('../../assets/assemble/classic/hall.jpg'), require('../../assets/assemble/classic/dining-room.jpg')]
      ],
      currentLayout: 0
    }
  }
}
</script>
