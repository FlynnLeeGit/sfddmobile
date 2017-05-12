<template>
  <div class="Market">
    <slot></slot>
    <div v-finger:swipe='swipe'
         @touchstart.prevent
         class="Market__item -mask">
      <img :hide='idx>=len-1'
           class="Market__arrow"
           :src="arrowImg"
           alt="arrow">
      <div v-finger:tap='togglePlay'
           class="Market__audio">
        <i class="iconfont"
           :class="[isPlay?'icon-stop':'icon-play']"></i>
        <audio ref='audio'
               :src="audio">
        </audio>
      </div>
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
    this.$refs.audio.play()
  }
}
</script>
