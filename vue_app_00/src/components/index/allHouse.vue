<template>
    <div class="all_house">
       <div class="top-input">
           <input type="text">
        </div>
        <div class="btn">
            <div><button>日期</button></div>
            <div><button>人数</button></div>
            <div><button>位置区域</button></div>
            <div><button>筛选条件</button></div>
        </div>
        <div class="allhouse">
            <div class="allhouse_collection">
                <img src="../../assets/collect.png">
            </div>
            <div class="allhouse_img">
                <img src="../../assets/carousel6.jpg" alt="">
            </div>
            <div class="allhouse_title">
                <span>独立房间·1室1卫1床</span>
            </div>
            <div class="allhouse_subtitle">
                <span>卓小花【初雪】城西loft公寓步行至按时发份</span>
            </div>
            <div class="allhouse_label">
                <span>超赞房东</span>
            </div>
            <div class="allhouse_comment">
                <span>★★★★★</span><span>278条评价</span>
            </div>
            <div class="allhouse_line"></div>
            <div class="allhouse_spice">
                <span>￥488/晚</span>
                <span>满7天立享9.5折</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.all_house .top-input{
    width:87%;
    height:40px;
    margin:auto;
    margin-top:20px;
}
.all_house .top-input input{
    width:100%;
    height:40px;
}
.all_house .btn{
    display: flex;
    margin:10px 0 0 25px;;
}
.all_house .btn div:not(:first-child) {
    margin-left:10px;
}
.all_house .btn div button{
    padding:2px 5px;
    border-radius:5px;
    outline: none;
    background-color: #fff;
    border:1px solid rgba(0, 0, 0, 0.3);
}
.allhouse{
    width:87%;
    margin: auto;
    margin-top:50px;
    position: relative;
}
.allhouse_img{
    width:100%;
}
.allhouse_img img{
    width: 100%;
}
.allhouse_collection{
    position: absolute;
    top:5%;
    right:5%;
}
.allhouse_collection img{
    opacity:0.4;
}
.allhouse_title{
    color:#9b3143;
    font-size: 12px;
    margin-top:10px;
}
.allhouse_subtitle{
    font-size:16px;
    font-weight: 600;
}
.allhouse_label{
    font-size:14px;
    padding:0 5px;
    background:gray;
}
</style>
