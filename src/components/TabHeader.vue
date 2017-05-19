<template>
  <ul class="TabHeader">
    <router-link v-for='tab in tabs'
                 :key='tab.to'
                 :to='tab.to'
                 tag='li'>
      {{tab.name}}
    </router-link>
  </ul>
</template>

<style src='./TabHeader.css'></style>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  }
}
</script>
