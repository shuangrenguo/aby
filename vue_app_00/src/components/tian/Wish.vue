<template>
  <div class="wish">
    <div class="wish_top">心愿单</div>
    <div class="wish_bot">轻点心形图标收藏住宿和体验活动。</div>
    <div class="wish_img"></div>
  </div>
</template>
<script>
export default {
  data(){
    return{}
  }
}
</script>
<style scoped>
  body{
    margin: 0 auto;
  }
  .wish{
    padding: 0 20px;
  }
  .wish_top{
    margin-top: 20px;
    font-family: Circular, "PingFang-SC", "Hiragino Sans GB", "微软雅黑", "Microsoft YaHei", "Heiti SC";
    font-size: 32px;
    font-weight:800;
    color: #484848;
  }
  .wish_bot{
    margin: 0px;
    font-family: Circular, "PingFang-SC", "Hiragino Sans GB", "微软雅黑", "Microsoft YaHei", "Heiti SC";
    font-size: 18px;
    font-weight: 400;
    line-height: 1.1578947368421053em;
    color: #484848;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .wish_img{
    width: 100%;
    padding-bottom: 100%;
    background-position: center center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(https://a0.muscache.com/airbnb/static/startWishlistingIllustration.4b09cd02.svg);
  }


</style>
