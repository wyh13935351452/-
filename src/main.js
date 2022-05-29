import Vue from 'vue'
import App from './App.vue'
//引入路由组件
import router from '@/router'
//注册全局组件
import TypNav from '@/components/TypNav'
//轮播图
import Carsousel from '@/components/Carsousel'
//引入仓库
import store from '@/store'
//引入mockjs
import '@/mock/mockServe'

//引入swiper样式
import 'swiper/css/swiper.css'
//测试 export const reqCategoryList分别暴露就要加{}
// import {reqCategoryList} from '@/api'
// reqCategoryList()

Vue.component(Carsousel.name,Carsousel)
Vue.component(TypNav.name,TypNav)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
