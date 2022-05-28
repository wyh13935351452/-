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
  components:{Header,Footer}
}
</script>

<style>

</style>
