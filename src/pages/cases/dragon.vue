<template>
  <market class="dragon">
    <market-item>
      <div class="top">
        <img class="animated fade"
             src="../../assets/cases/dragon/top-txt.png"
             width="80%">
        <p class="animated fade slideInUp">
          装修-设计-施工-预算-方案-官方推荐
        </p>
      </div>
    </market-item>

    <market-item>
      <div class="style">
        <h1 class="style__title">风格筛选</h1>
        <tab v-model='currentStyle'
             active-color='#008489'>
          <tab-item v-for='(style,idx) in styles'
                    :key='idx'>{{style}}</tab-item>
        </tab>
        <swiper :show-dots="false"
                height='100vh'
                v-model='currentStyle'>
          <swiper-item v-for='sImgs in styleContent'
                       :key='currentStyle'>
            <div class="style__content">
              <div class="style__img"
                   v-for='img in sImgs'>
                <img :src='img'
                     width="100%" />
              </div>
            </div>
          </swiper-item>
        </swiper>
      </div>
    </market-item>

    <market-item>
      <div class="budget">
        <div class="budget__hd">
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
        <section class="layout__hd"
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

    <market-item>
      <div class="video">
        <section class="video__hd"
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
    </market-item>

    <market-item>
      <div class="team">
        <section class="team__hd"
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
      <div class="flow">
        <section class="flow__hd"
                 grid='middle'>
          <div>
            <h1 class="Intro__title">
              付款流程
            </h1>
            <p class="Intro__desc">
              开工仅需支付￥5000定金，水电验收通过后支付60%，
              <br>泥木验收后支付35%，竣工验收后支付5%
            </p>
          </div>
        </section>
        <section class="flow__bd">
          <ul class="flow-icons"
              grid>
            <li class="flow-icons__li">
              <h3>开工</h3>
              <div class="flow-icons__img-wrap"
                   grid='middle'>
                <img src="../../assets/payflow/icon1.png"
                     width="31px">
              </div>
              <p>￥5000</p>
            </li>
            <li class="flow-icons__li">
              <h3>水电</h3>
              <div class="flow-icons__img-wrap"
                   grid='middle'>
                <img src="../../assets/payflow/icon2.png"
                     width="40px">
              </div>
              <p>60%</p>
            </li>
            <li class="flow-icons__line">
              <img src="../../assets/payflow/line.png"
                   width="100%"
                   height="1px">
            </li>
          </ul>
          <ul class="flow-icons"
              grid>
            <li class="flow-icons__li">
              <h3>泥木</h3>
              <div class="flow-icons__img-wrap"
                   grid='middle'>
                <img src="../../assets/payflow/icon3.png"
                     width="42px">
              </div>
              <p>35%</p>
            </li>
            <li class="flow-icons__li">
              <h3>竣工</h3>
              <div class="flow-icons__img-wrap"
                   grid='middle'>
                <img src="../../assets/payflow/icon4.png"
                     width="40px">
              </div>
              <p>5%</p>
            </li>
            <li class="flow-icons__line">
              <img src="../../assets/payflow/line.png"
                   width="100%"
                   height="1px">
            </li>
          </ul>

        </section>
      </div>

    </market-item>

  </market>
</template>

<style src='./dragon.css' scoped></style>

<script>
import Market from '@/components/Market'
import MarketItem from '@/components/MarketItem'
import { Tab, TabItem, Swiper, SwiperItem } from 'vux'

export default {
  components: {
    Market,
    MarketItem,
    Tab,
    TabItem,
    Swiper,
    SwiperItem
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
