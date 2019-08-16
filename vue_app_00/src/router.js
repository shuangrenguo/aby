import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
//引入组件
import index from "./components/index/index.vue"

import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import Wish from "./components/tian/Wish.vue"
import Xqy from "./components/zhang/Xqy.vue"


Vue.use(Router)

export default new Router({
  routes: [ 
    {path:'/Wish',component:Wish},
    {path:'/',component:HelloContainer},
    {path:'/index',component:index},
    {path:'/xqy',component:Xqy}
  ]
})
