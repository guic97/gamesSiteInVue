<template>
  <navbar/>
  <router-view/>
  <footerComponent/>
</template>

<script>
import navbar from "./components/navbar.vue"
import footerComponent from "./components/footerComponent.vue"
export default {
  name:"app",
  components:{ 
    navbar, 
    footerComponent, 
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
  min-height: 500px;
  text-align: center;
}
.mainContainer{
    padding-top: 50px;
    padding-bottom: 100px;
  }
.mainContainer h2{
  font-size: 40px;
  border-top: 3px solid #666;
  border-bottom: 3px solid #666;
  background-color: #444;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>