<template>
    <div class="indexCm">
        <div class="houses">
            <!-- 第一个房源 -->
            <router-link class="goto" to="/minutehouse">
                <div class="house">
                    <div class="imgpro">
                        <img src="../../assets/house1.jpg">
                    </div>
                    <div class="collect">
                        <img src="../../assets/collect.png">    
                    </div>
                    <div class="title">
                        <span>整套公寓·杭州</span>
                    </div>
                    <div class="subtitle">
                        <span>【恃风舍】温馨风 市中心 长寿路、江宁路地铁口</span>
                    </div>
                    <div class="spice">
                        <p><span>￥367 </span><s>￥408</s>/晚</p>
                    </div>
                    <div class="comment">
                        <p><span>★★★★★</span>8 · 超赞房东</p>
                    </div>
                </div>
            </router-link>
            <!-- 第二个房源 -->
            <router-link class="goto" to="/minutehouse">
                <div class="house">
                    <div class="imgpro">
                        <img src="../../assets/house1.jpg">
                    </div>
                    <div class="collect">
                        <img src="../../assets/collect.png">    
                    </div>
                    <div class="title">
                        <span>整套公寓·杭州</span>
                    </div>
                    <div class="subtitle">
                        <span>【恃风舍】温馨风 市中心 长寿路、江宁路地铁口</span>
                    </div>
                    <div class="spice">
                        <p><span>￥367 </span><s>￥408</s>/晚</p>
                    </div>
                    <div class="comment">
                        <p><span>★★★★★</span>8 · 超赞房东</p>
                    </div>
                </div>
            </router-link>
        </div>
        <router-link class="btn" to="/allhouse">
            <button >显示更多房源</button>
        </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.indexCm{
    width:100%;    
}
.houses{
    width:100%;
    display: flex;
    justify-content:space-around;
}
.goto{
    width: 45%;
    text-decoration:none;
}
.house{
    width: 100%;
    position:relative;
    color:black;
    
}
.imgpro{
    width:100%;
}
.imgpro img{
    width:100%;
}
.house .collect{
    position: absolute;
    top:10%;
    right:10%;
    opacity:0.5;
}
.house .title{
    color:#9b3143;
    font-size: 12px;
}
.house .subtitle{
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.house .spice{
    font-size: 14px;
}
.house .spice span{
    font-size:16px;
    font-weight:600;
}
.house .comment{
    font-size:12px;
}
.house .comment span{
    color:#00848A;
}
.indexCm .btn{
    display:block;
    width:325px;
    height:40px;
    margin:auto;
    margin-top:20px;
}
.indexCm .btn button{
    width:325px;
    height:40px;
    color: #00848A;
    border:1px solid #00848A;
    background: #fff;
}
</style>