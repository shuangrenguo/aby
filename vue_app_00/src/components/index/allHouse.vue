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
        <div>
            <div>
                
            </div>
            <div>
                <img src="../../assets/collect.png">
            </div>
            <div>
                <img src="../../assets/carousel6.jpg" alt="">
            </div>
            <div>
                <span>独立房间·1室1卫1床</span>
            </div>
            <div>
                <span>卓小花【初雪】城西loft公寓步行至按时发份</span>
            </div>
            <div>
                <span>超赞房东</span>
            </div>
            <div>
                <span>★★★★★</span><span>278条评价</span>
            </div>
            <div></div>
            <div>
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
</style>
