<template>
  <div id="navbar">
    <router-link to="/">HOME</router-link>
    <router-link to="/support">SUPPORT</router-link>
  </div>
</template>

<script>
export default {
  name:"navbar",
}
</script>

<style scoped>
  #navbar{
    background-color: rgba(226, 193, 149, 0.904);
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 3px solid hsl(34, 100%, 83%);
  }
  #navbar a{
    text-decoration: none;
    margin-left: 15px;
    font-weight: bold;
    transition: .2s;
  }
  #navbar a:hover{
    color: yellow;
  }
</style>