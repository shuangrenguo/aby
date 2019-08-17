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
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.all_house .top-input{
    width:325px;
    height:40px;
    margin:auto;
    margin-top:20px;
}
.all_house .top-input input{
    width:325px;
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
