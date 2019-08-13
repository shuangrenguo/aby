import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Wish from "./components/tian/Wish.vue"


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/Wish',component:Wish},
    {path:'/',component:HelloContainer},
  ]
})
