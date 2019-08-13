import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入第三方组件库 mint ui
//1：引入
import MintUI from "mint-ui"
//2：引入CSS
import "mint-ui/lib/style.css"
import "mint-ui/lib/mom.css"
//3：将mint ui注册到vue实例中
Vue.use(MintUI)





Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
