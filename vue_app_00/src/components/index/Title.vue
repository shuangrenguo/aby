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
    }
    .buttonTime button{
        width:325px;
        height:40px;
    }
</style>