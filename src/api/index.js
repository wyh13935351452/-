//统一接口管理   发请求:返回的结果是promise对象
import requests from './request'
import mockRequests from './mockAjax'
//三级联动接口 
export const reqCategoryList = ()=> requests({url:'/product/getBaseCategoryList',method:'get'})
//轮播图 
export const reqGetBannerList= ()=> mockRequests({url:'/banner',method:'get'})
//floor
export const reqGetFloorList = () => mockRequests({url:'/floor',method:'get'})

