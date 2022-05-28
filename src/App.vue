<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <!-- 登录注册不显示footer -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components: { Header, Footer },
  //三级联动那莫名其妙刷新没数据
  created() {
    //在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("messageStore", JSON.stringify(this.$store.state))
    })

    //在页面加载时读取localStorage里的状态信息
    localStorage.getItem("messageStore") && this.$store.replaceState(Object.assign(this.$store.state, JSON.parse(localStorage.getItem("messageStore"))));
  }

}
</script>

<style>
</style>
