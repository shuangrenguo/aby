<template>
    <div class="common">
        <carousel/>   
        <Title/>
        <indexHouse/>
    </div>
</template>
<script>
import Carousel from "./Carousel"
import Title from "./Title"
import indexHouse from "./indexHouse"
export default {
    data() {
        return {
            
        }
    },
    components: {
       Carousel,
       Title,
       indexHouse
    },
}
</script>
<style scoped>
    .common{
        width: 100%;
        height:100%;
    }
</style>