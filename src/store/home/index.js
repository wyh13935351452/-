import {reqCategoryList} from "@/api"
const start = {}
const mutations = {}
const actions = {
    cargoryList(){
        let result = reqCategoryList()
        console.log(result);
    }
}
const getters = {}
export default{
    start,mutations,actions,getters
}