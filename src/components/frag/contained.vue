<template>
  <div class="Advertise contained"
       grid='middle'>
    <div class="Advertise__mask"></div>
    <div class="Advertise__content">
      <h1 class="Advertise__title">
        了解中孚空间整体装修预案
      </h1>
      <router-link to='/assemble/list'
                   class="Advertise__btn"
                   event='touchstart'>
        点击前往
      </router-link>
    </div>

  </div>
</template>

<style>
.contained {
  background-image: url('../../assets/contained.jpg');
}
</style>

