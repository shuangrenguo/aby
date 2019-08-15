<template>
    <div>
        <div class="car">
            <mt-swipe :auto="4000">
            <mt-swipe-item><img src="../../assets/carousel1.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../assets/carousel2.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../assets/carousel3.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../assets/carousel4.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../assets/carousel5.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../assets/carousel6.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../assets/carousel7.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../assets/carousel8.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../assets/carousel9.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../assets/carousel10.jpg" alt=""></mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="a1">
          <p>杭州市.公寓型住宅里的独立房间</p>
          <h1>【独立单间】近杭州东站500米/双地铁口/可直达西湖河坊街/机场大巴站</h1>
        </div>
        <div class="a2">
          <span class="b1">5.0分.11条评论</span>
          <span class="b2">超赞房东</span>
          <span class="b3">可以做饭</span>
        </div>
        <hr>
        <div class="a3">
          <span>享受8月1日-8月15日 期间的8.8折优惠 在19小时内完成预定,锁定限时好价</span>
          <img src="../../assets/dz.png" alt="">
        </div>
        <hr class="c1">
        <div class="a5">
          <h3>房源概览</h3>
          <span><img src="../../assets/fk.png" alt="">2位房客</span>
          <span><img src="../../assets/ws.png" alt="">1间卧室</span>
          <span><img src="../../assets/c.png" alt="">1张床</span>
          <span><img src="../../assets/wsj.png" alt="">1个公共卫生间</span>
        </div>
        <div class="c2">
          <span>
            <h5>独立房间</h5>
            <p>拥有自己的房间,分享一些公共区域</p>
          </span>
          </div>
          <div  class="c3">
          <span>
            <h5>卧室1</h5>
            <img src="../../assets/111.png" alt="">
            <p>1张标准双人床</p>
          </span>
        </div>
        <div>
          <h3>摘要</h3>
          <p>这套独立单间是两室一厅中的次卧,可住1-2人,有窗户。洗手间、厨房、客厅与主卧客人...</p>
        </div>
        <div>
          <a href="ckxq" font-size:17px; font-weight:600;line-height:22px;color:#fff></a>
        </div>
        <hr class="c4">
        <div class="c5">
          <h3>评价</h3>
          <img src="../../assets/txk.png" alt=""> 莉 2019年8月
          <p>房子单身男子居住,一家人还是比较适合有独立卫生间的地方,
            离东站确实很近,乘车特别方便！推荐第二天一早要乘车的朋友居住!</p>
        </div>
        <div>

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
    .car{
        height:200px;
    }
    .car img{
        width:100%;
        height:200px;
    }
   .a1 p{
     color: #b41d1d;
     font-size: 12px;
   }
   .b1{
     border: 1px solid #f00;
     color: green;
     border-radius: 50px;
   }
   .b2{
     border: 1px solid #f00;
     color: darkgoldenrod;
     border-radius: 50px;
   }
   .b3{
     border: 1px solid #f00;
     color: slategrey;
     border-radius: 50px;
   }
   .a3{
     font-size: 18px;
     margin-right: 60px;
   }
   hr{
    margin-top: 25px; 
    margin-bottom:20px;
   }
   .c1{
     border: 4px solid #af0606;
   }
   .a5 span{
     font-size: 12px;
   }
   .c4{
     border: 4px solid #f00;
   }

</style>