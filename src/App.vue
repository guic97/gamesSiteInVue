<template>
  <navbar/>
  <router-view/>
  <Footer/>
</template>

<script>
import navbar from "./components/navbar.vue"
import Footer from "./components/footer.vue"
export default {
  name:"app",
  components:{ 
    navbar, 
    Footer, 
  },
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  font-family: helvetica;
  font-size: 20px;
  color: black;
}
.main{
  min-height: 450px;
  text-align: center;
}
</style>