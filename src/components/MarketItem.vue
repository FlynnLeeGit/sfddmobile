<template>
  <transition appear :name='transition' mode='in-out'>
    <div v-if='isCurrent'
         class="Market__item -item">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    prev: {
      type: String,
      default: 'slideDown'
    },
    next: {
      type: String,
      default: 'slideUp'
    }
  },
  data () {
    return {
      idx: 0,
      transition: this.next
    }
  },
  computed: {
    offset () {
      return this.idx - this.$parent.idx
    },
    isCurrent () {
      return this.offset === 0
    }
  },
  methods: {
    getIdx (idx) {
      this.idx = idx
    },
    toggleTransition (direction) {
      if (direction === 'next') {
        this.goNext()
        return
      }
      if (direction === 'prev') {
        this.goPrev()
        return
      }
    },
    goNext () {
      this.transition = this.next
    },
    goPrev () {
      this.transition = this.prev
    }
  }
}
</script>
