<template>
    <div class="car">
        <mt-swipe :auto="4000">
        <mt-swipe-item><img src="../../assets/carousel1.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/carousel2.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/carousel3.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/carousel4.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/carousel5.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
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
</style>