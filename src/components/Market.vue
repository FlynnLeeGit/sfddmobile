<template>
  <div class="Market"
       v-finger:swipe='swipe'
       @touchmove.prevent>
    <slot></slot>
    <div class="Market__arrow"
         :hide='idx>=len-1'>
      <img height='30%'
           class="Market__arrow-img"
           :src="arrowImg"
           alt="arrow">
    </div>

    <div v-finger:tap='togglePlay'
         v-if='audio'
         class="Market__audio">
      <i class="iconfont"
         :class="[isPlay?'icon-stop':'icon-play']"></i>
      <audio ref='audio'
             :src="audio">
      </audio>
    </div>

  </div>
</template>
<style src='./Market.css'>

</style>
<script>

export default {
  props: {
    audio: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      arrowImg: require('@/assets/arrow.png'),
      idx: 0,
      len: 0,
      isPlay: true
    }
  },
  methods: {
    swipe (e) {
      switch (e.direction) {
        case 'Up':
          this.up()
          break
        case 'Down':
          this.down()
          break
      }
    },
    up () {
      if (this.idx < this.len - 1) {
        this.idx++
        this.broadcast('next')
      }
    },
    down () {
      if (this.idx > 0) {
        this.idx--
        this.broadcast('prev')
      }
    },
    broadcast (direction) {
      this.$children[this.idx].toggleTransition(direction)
    },
    togglePlay () {
      if (this.isPlay) {
        this.isPlay = false
        this.$refs.audio.pause()
      } else {
        this.isPlay = true
        this.$refs.audio.play()
      }
    }
  },
  mounted () {
    this.len = this.$children.length
    this.$children.forEach((item, idx) => {
      item.getIdx(idx)
    })
    if (this.audio) {
      this.$refs.audio.play()
    }
  }
}
</script>
