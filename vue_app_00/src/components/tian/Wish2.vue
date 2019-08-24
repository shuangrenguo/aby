<template>
  <div class="wish2">
    <mt-header class="wish2_top">
      <mt-button v-link="'/Wish'" slot="left">
        <img style="width:20px;" src="../../assets/fanhui.png"/>
      </mt-button>
      <mt-button slot="right">
          <img style="width:20px;" src="../../assets/shanchu.png">
      </mt-button>
    </mt-header>
    <div class="wish2_bot">
      <div class="wish2_bot_shi">杭州市</div>
      <div class="wish2_bot_sj">
        任何时间 ·
        <span>1</span> · 仅限受邀用户
      </div>
        <mt-button class="wish2_bot_yq">邀请好友 +</mt-button>
      <div class="wish2_bot_df">
        <span>1</span>个可定房源
      </div>
    </div>
    <div class="wish2_list">
      <div class="wish2_list_img">
        <img src="../../assets/carousel10.jpg" />

      </div>
      <div class="wish2_list_gy">
        整套公寓 ·
        <span>1</span>张床
      </div>
      <div class="wish2_list_xq">换嘎嘎点击活动方式开机欧几艘风扇电机开发健康房价快速减肥课上课的福建会计法卡萨</div>
      <div class="wish2_list_jg">
        ￥
        <span>200</span>/晚
      </div>
      <div class="wish2_list_zan">
        <img src="../../assets/xingxing.png">
        <span>50</span>
        <span> · 超赞房东</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
html{
    margin: 0 auto;
}
.wish2 {
  padding: 0 20px;
}
.wish2_top {
  background: #fff;
}
  .wish2_bot_shi{
    margin-top: 10px;
    font-family: Circular, "PingFang-SC", "Hiragino Sans GB", "微软雅黑", "Microsoft YaHei", "Heiti SC";
    font-size: 32px;
    font-weight:800;
    color: #484848;
}
 .wish2_bot_sj{
    margin: 0px;
    font-family: Circular, "PingFang-SC", "Hiragino Sans GB", "微软雅黑", "Microsoft YaHei", "Heiti SC";
    font-size: 18px;
    font-weight: 400;
    line-height: 1.1578947368421053em;
    color: #484848;
    padding-top: 5px;
    padding-bottom: 15px;
  }
  .wish2_bot_yq{
    width: 120px;
    height: 30px;
    background: #fff;
    border: 1px solid #10661C;
    border-radius: 20px;
    font-family: Circular, "PingFang-SC", "Hiragino Sans GB", "微软雅黑", "Microsoft YaHei", "Heiti SC";
    font-size: 14px;
    font-weight: 400;
    color:#10661C;
  }
  .wish2_bot_df{
    margin-top: 30px;
    font-family: Circular, "PingFang-SC", "Hiragino Sans GB", "微软雅黑", "Microsoft YaHei", "Heiti SC";
    font-size: 24px;
    font-weight: 600;
  }

.wish2_list{
  margin-top: 15px;
}
  .wish2_list_img img{
    width:100%
  }
  .wish2_list_gy{
    font-size: 12px;
    font-weight: 800;
    color: #831B10;
  }
  .wish2_list_xq{
    font-size: 20px;
    font-weight: 600;
  }
  .wish2_list_jg{
    font-size: 13px;
    color:#918D8C;
  }
  .wish2_list_zan{
    font-size: 12px;
    height: 48px;
    display: flex;
  }
    .wish2_list_zan span{
      line-height: 48px;
    }


</style>