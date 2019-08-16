<template>
    <div>
        <div class="title">
            <h5>房源</h5>
        </div>
        <div class="inputPlace">
            <input type="text" placeholder="输入区域、景点">
        </div>
        <div class="buttonTime">
            <button>入住退房日期</button>
        </div>
        <div class="b_search">
            <button>搜索房源</button>
        </div>
        <div class="infor">
            <h2>夏季特惠房源</h2>
            <span>低至7折，可叠加使用礼卷</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .title{
        margin:10px 20px 20px 15px;
    }

    .inputPlace{
        width:325px;
        height:40px;
        margin:auto;
        margin-bottom:8px;
    }
    .inputPlace input{
        width:325px;
        height:40px;
        font-size: 18px;
        padding-left:40px;
        
    }
    .buttonTime{
        width:325px;
        height:40px;
        margin:auto;
        margin-bottom:12px;
    }
    .buttonTime button{
        width:325px;
        height:40px;
    }
    .b_search{
        width:325px;
        height:40px;
        margin:auto;
    }
    .b_search button{
        width:325px;
        height:40px;
        background: #00848A;
        border-radius: 5px;
        outline: none;
        padding:0;
    }
    .infor{
        margin:25px 0 15px 25px;
    }
</style>