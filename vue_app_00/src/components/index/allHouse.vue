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
        <router-link class="goto"  to="/minutehouse">
        <div class="allhouse">
            <carouselt class="allhouse_img"/>
            <div class="allhouse_head"><img src="../../assets/carousel3.jpg" alt=""></div>
            <div class="allhouse_collection">
                <img src="../../assets/collect.png">
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
        </router-link>
    </div>
</template>
<script>
import Carouselt from "./Carousel2"
export default {
    data() {
        return {
            
        }
    },
    components: {
        Carouselt,
    }
}

</script>
<style scoped>
.all_house{
    width:100%;
}
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
    box-shadow:#666 0px 0px 5px;
    color:black;
}
.goto{
    text-decoration:none;
}
.allhouse_head{
    width:40px;
    height:40px;
    position: absolute;
    border:2px solid #fff;
    border-radius:50%;
    top:54%;
    right:4%;
    overflow: hidden;
}
.allhouse_head img{
    width:100%;
    height:100%;
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
    padding:0 15px;
}
.allhouse_subtitle{
    font-size:16px;
    font-weight: 600;
    padding:0 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.allhouse_label{
    margin:5px 0;
    padding:0 15px;
}
.allhouse_label span{
    font-size:14px;
    padding:2px 5px;
    background:gray;
}
.allhouse_comment{
    font-size:12px;
    padding:0 15px;
}
.allhouse_line{
    margin:5px 0;
    border:1px solid rgba(0, 0, 0, 0.15);
}
.allhouse_spice{
    display: flex;
    font-size:14px;
    justify-content: space-between;
    padding:0 15px;
    margin-bottom: 10px;
}
.allhouse_spice span:first-child{
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
}
</style>
