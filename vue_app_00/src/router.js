import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
//引入组件
import Carousel from "./components/index/Carousel.vue"
import index from "./components/index/index.vue"
import title from "./components/index/Title.vue"

import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:HelloContainer},
    {path:'/carousel',component:Carousel},
    {path:'/index',component:index},
    {path:'/title',component:title},
  ]
})
