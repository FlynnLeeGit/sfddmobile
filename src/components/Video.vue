<template>
  <div class="Video _tc">
    <video class="Video__v"
           :src="src"
           height="100%"
           controls
           playsinline>
    </video>
  </div>
</template>
<style src='./Video.css'></style>
<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    }
  }
}
</script>
