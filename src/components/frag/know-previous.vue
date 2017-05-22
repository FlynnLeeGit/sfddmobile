<template>
  <div class="Advertise know-previous"
       grid='middle'>
    <div class="Advertise__mask"></div>
    <div class="Advertise__content">
      <h1 class="Advertise__title">了解我们过往的作品</h1>
      <router-link event='touchstart'
                   class="Advertise__btn"
                   to='/1'>点击前往</router-link>
    </div>
  </div>
</template>

<style src='./know-previous.css'></style>

<style>
.know-previous {
  background-image: url('../../assets/know-previous.jpg');
}
</style>
