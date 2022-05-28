//配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 解决vue-router在3.0版本以上重复报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

//导出
export default new VueRouter({
    //配置路由  直接拦截在
    routes:[
        {
            path:'/home',
            component:() => import('@/pages/Home'),
            meta:{show:true}
        },
        {
            path:'/login',
            component:() => import('@/pages/Login'),
            meta:{show:false}
        },
        {
            path:'/register',
            component:() => import('@/pages/Register'),
            meta:{show:false}
        },
        {
            path:'/search/:keyword?',
            component:() => import('@/pages/Search'),
            meta:{show:true},
            name:'search'

        },
        {
            //重定向
            path:'',
            redirect:'/home'
        }
    ]
})