//对于axios二次封装
import axios from 'axios'
//进度条 +样式
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

//利用axios对象方法的create创建axios
const requests = axios.create({
    //配置对象request就是axios
    baseURL:'/mock',
    //请求超时时间
    temeout:5000
})
//请求拦截其 发请求之前做的事
requests.interceptors.request.use((config)=>{
    //进度条开始
    nprogress.start()
    return config
})
//响应拦截其 成功失败的回调
requests.interceptors.response.use((res)=>{
//成功的回调
  //进度条结束
nprogress.done()
return res.data;
},(error)=>{
//响应失败
return Promise.reject(new Error('faile'))
})

//对外暴露
export default requests