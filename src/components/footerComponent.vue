<template>
  <div id="footer">
    <p>&copy;2022 GuiGames</p>
  </div>
</template>

<script>
export default {
  name:'footerComponent',
}
</script>

<style scoped>
  #footer{
    background-color: rgb(236, 202, 157);
    display: flex;
    width: 100%;
    height: 100px;
    border-top: 3px solid rgb(255, 217, 168);
    align-items: center;
    justify-content: center;
    font-size: 20px;
    bottom: 0%;
    font-weight: bold;
  }
</style>
