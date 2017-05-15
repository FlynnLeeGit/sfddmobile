<template>
  <div class="know-previous">
    <div class="know-previous__mask"></div>
    <h1 class="know-previous__title">了解我们过往的作品</h1>
    <router-link event='touchstart' class="know-previous__btn"
                 to='/1'>点击前往</router-link>
  </div>
</template>

<style lang='postcss'>
.know-previous {
  position:relative;
  height: 100%;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  color:#fff;
  background-image:url('../../assets/know-previous.jpg');
  background-size:cover;
  background-position:center;
  &__mask{
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    background-color:rgba(0,0,0,.3);
    z-index:0;
  }
  &__title{
    font-size:21px;
    position:relative;
    z-index:2;
  }
  &__btn{
    font-size:10px;
    margin-top: 30px;
    padding: 5px 16px;
    border:1px solid;
    color:#fff;
    position:relative;
    z-index:2;
  }
}
</style>
