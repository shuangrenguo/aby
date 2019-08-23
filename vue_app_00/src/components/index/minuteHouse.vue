<template>
    <div class="mu_house">
        <carouselt/>
        <div class="collect">
            <img src="../../assets/collect.png">
        </div>
        <div class="content">
            <div class="Label">
                <span>杭州市·整件Loft</span>
            </div>
            <div class="title">
                <div class="subtitle">
                    <span>【质.感】浙大旁复古两床巨幕投影Loft地铁口800米</span>
                </div>
                <div class="head"><img src="../../assets/touxiang.png" ></div>
            </div>
            <div class="sublabel">
                <span>5.0分·84条评论</span>
            </div>
            <div class="condition">
                <div class="condition-item">
                    <img src="../../assets/tenant.png">
                    <span>4位房客</span>
                </div>
                <div class="condition-item">
                    <img src="../../assets/bedroom.png">
                    <span>1间卧室</span>
                </div>
                <div class="condition-item">
                    <img src="../../assets/bed.png">
                    <span>1张床</span>
                </div>
                <div class="condition-item">
                    <img src="../../assets/toilet.png">
                    <span>1间卫生间</span>
                </div>
            </div>
            <div class="detail">
                <div class="detail-title">
                    <span>详情</span>
                </div>
                <div class="detail-subtitle">
                    <span>[ELE JANE STUDIO 出品  小而美系列]
Weibo: ELE_JANE_STUDIO</span>
                </div>
                <div class="detail-text">
                    <span>灵感来源于王家卫导演的《重庆森林》,淡淡的感情色彩带入,将自己交给这个房间里每一处细小的感动｡
-配备浴缸,因设计视觉效果没有遮挡,所以适合很亲密的组合出行｡(淋浴浴缸同一区域,电压小的关系 之前因为使用及时加热的热水器功率太大导致频繁跳闸 影响到各位的入住体验这边就置换了储水型的热水器 但是因为洗手间空间有限 我们热水器容量不大 这对我们的浴缸设计带来弊病 淋浴和浴缸是一起的 淋浴是没有问题 尽量分开洗漱｡
-配备一次性备品,沐浴用品｡五星级别一客一换干净床单被套毛巾｡
-独立卫生间和厨房,配备厨具,需自带调料｡
-位于定安地铁口出口,步行仅需3分钟
-配有烟雾探测器和一氧化碳探测器安全放心

以这里为据点与杭州相拥,在一个清晨打开窗,于西湖荷香中吮吸着俗世阳光｡

特别提醒:商业拍摄需要额外收费,请订房前咨询客服
位于杭州本地社区 市区的房子普遍不是很新 我们尽最大可能进行改造 如有对老社区设施/环境/房内老旧格局等介意的 请慎拍
这边我会尽快安排处理方案</span>
                </div>
            </div>
            <hr>
            <div class="security">
                <span>爱彼迎旅行保障</span>
                <span>·无忧出行</span>
            </div>
            <hr>
            <div>

            </div>
        </div> 
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
    },
}
</script>
<style scoped>
.mu_house{
    width:100%;
    position: relative;
}
.mu_house .collect{
    position: absolute;
    z-index:10;
    top:5%;
    right:8%;
    opacity:0.5;
}
.content{
    width:90%;
    margin:auto;
    margin-top:20px;
}
.content .Label{
    font-size:12px;
}
.title{
    width:100%;
    display: flex;
    margin-bottom:15px;
}
.title .subtitle{
    font-size: 22px;
    width:80%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}

.title .head{
    width:40px;
    height:40px;
    border: 1px solid #fff;
    border-radius:50%;
    margin-left:20px;
    overflow: hidden;
}
.title .head img{
    width:100%;
    height: 100%;

}
.content .sublabel{
    font-size:12px;
    margin-bottom:20px;
}
.content .sublabel span{
    background:lightcoral;
    padding:2px 4px;
    border-radius:5px;
    margin-right:4px;
}
.content .condition{
    width:100%;
    display: flex;
    flex-wrap: wrap;
    font-size:14px;
    margin-bottom:20px;
}
.condition-item{
    width:49%;
}
.condition-item span{
    margin-left:10px;
}
.detail{
    width:100%;
    font-size:14px;
}
.detail .detail-title{
    font-size: 16px;
    margin-bottom:10px;
}
.detail .detail-subtitle{
    margin-bottom:10px;
}
.detail .detail-text{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    margin-bottom:15px;
}
.content .security{
    margin:15px 0;
    font-size: 14px;
}
.content .security span:first-child{
    font-weight:600;
}
</style>
