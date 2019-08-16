<template>
  <div class="wish">
    <div class="wish_top">
      <div class="wish_top_left">心愿单</div>
      <div class="wish_top_right"><button>创建心愿单</button></div>
    </div>
    <div class="wish_bg"></div>
    <div class="wish_bot">
      <div class="wish_bot_top">在爱彼迎上保存和分享你的旅程</div>
      <div class="wish_bot_bot">心愿单可以让您轻松回顾自己心仪之地，并和他人一起完成行程规划。</div>
      <button class="wish_bot_but">创建心愿单</button>
    </div>
    <div class="wish_groom">
      <div class="wish_groom_left">热门心愿单</div>
      <button class="wish_groom_right">查看所有</button>
      <div class="wish_groom_img">
        <div></div>
      </div>
    </div>
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
    padding: 0 24px;
    /* position: relative; */
  }
  .wish_top{
    display: flex;
    justify-content: space-between;
    padding: 24px 0;
  }
  .wish_top_left{
    margin: 0px !important;
    word-wrap: break-word !important;
    font-family: Circular, "PingFang-SC", "Hiragino Sans GB", "微软雅黑", "Microsoft YaHei", "Heiti SC" !important;
    font-size: 32px !important;
    font-weight: 800 !important;
    line-height: 1.125em !important;
    color: #484848 !important;
    padding-top: 6px !important;
    padding-bottom: 6px !important;
  }
  .wish_top_right{
        margin-top: 16px !important;
  }
  .wish_top_right button{
    border-radius:  4px !important;
    font-size:  16px !important;
    line-height:  24px !important;
    letter-spacing:  normal !important;
    font-family:  Circular, "PingFang-SC", "Hiragino Sans GB", "微软雅黑", "Microsoft YaHei", "Heiti SC" !important;
    text-transform:  undefined !important;
    padding-top:  10px !important;
    padding-bottom:  10px !important;
    font-weight:  800 !important;
    border-width: 2px !important;
    padding-left: 22px !important;
    padding-right: 22px !important;
    box-shadow:  none !important;
    background:  transparent !important;
    border-color:  #008489 !important;
    color:  #008489 !important;
    display: inline-block !important;
    margin: 0px !important;
    position: relative !important;
    text-align: center !important;
    text-decoration: none !important;
  }
  .wish_bg{
    width: 100% !important;
    padding-bottom: 100% !important;
    background-position: center center !important;
    background-size: 100% 100% !important;
    background-repeat: no-repeat !important;
    background-image: url(https://a0.muscache.com/airbnb/static/startWishlistingIllustration.4b09cd02.svg) !important;
  }
  .wish_bot{
    display: block !important;
    width: 100% !important;
    padding: 24px 0 0 !important;
  }
  .wish_bot_top{
    margin: 0px !important;
    word-wrap: break-word !important;
    font-family: Circular, "PingFang-SC", "Hiragino Sans GB", "微软雅黑", "Microsoft YaHei", "Heiti SC" !important;
    font-size: 38px !important;
    font-weight: 800 !important;
    line-height: 1.1578947368421053em !important;
    color: #484848 !important;
    padding-top: 8px !important;
    padding-bottom: 8px !important
  }
  .wish_bot_bot{
    margin: 0px !important;
    word-wrap: break-word !important;
    font-family: Circular, "PingFang-SC", "Hiragino Sans GB", "微软雅黑", "Microsoft YaHei", "Heiti SC" !important;
    font-size: 16px !important;
    font-weight: 400 !important;
    line-height: 1.375em !important;
    color: #484848 !important;
    margin-bottom: 48px !important;
  }
  .wish_bot_but{
     border-radius: 4px !important;
    font-size:  16px !important;
    line-height:  24px !important;
    letter-spacing:  normal !important;
    font-family: Circular, "PingFang-SC", "Hiragino Sans GB", "微软雅黑", "Microsoft YaHei", "Heiti SC" !important;
    text-transform:  undefined !important;
    padding-top:  10px !important;
    padding-bottom:  10px !important;
    font-weight:  800 !important;
    border-width:  2px !important;
    padding-left:  22px !important;
    padding-right:  22px !important;
    box-shadow:  none !important;
    background: #008489 !important;
    border-color:  transparent !important;
    color:  #ffffff !important;
  }
  .wish_groom{
    position: relative;
    margin-top: 32px !important;
    margin-bottom: 32px !important;
    align-items: center !important;
  }
  .wish_groom_left{
    margin: 0px !important;
    word-wrap: break-word !important;
    font-family: Circular, "PingFang-SC", "Hiragino Sans GB", "微软雅黑", "Microsoft YaHei", "Heiti SC" !important;
    font-size: 16px !important;
    font-weight: 600 !important;
    line-height: 1.375em !important;
    color: #484848 !important;
    position: absolute;
    left: 0;
    top:0;
  }
  .wish_groom_right{
    border-radius: 24px !important;
    background-color: #ffffff !important;
    padding-top:  0px !important;
    padding-bottom:  0px !important;
    padding-right:  10px !important;
    padding-left:  10px !important;
    box-shadow: 0 1px rgba(22, 22, 22, 0.2) !important;
    border: none !important;
    cursor: pointer !important;
    position: absolute;
    right: 0;
    top:0;
  }
  .wish_groom_img{
    position: relative;
    margin-top: 0px !important;
    margin-left: -24px !important;
    margin-right: -24px !important;
    overflow-y: hidden !important;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .wish_groom_img div{
    background-image: url(https://a0.muscache.com/im/pictures/375446/d252a4d6_original.jpg?aki_policy=large);
    background-position: center center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    height: 100% !important;
    width: 100% !important;
    box-sizing: border-box;
    display: block !important;
    padding: 0 18px !important;
  }
</style>
