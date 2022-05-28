//统一接口管理   发请求:返回的结果是promise对象
import requests from './request'
//三级联动接口 
export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'})

