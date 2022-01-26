<template>
  <div class="main">
    <div id="divs">
      <h2>GuiGames</h2>
      <div id="gamesContainer">
        <div class="game" @click="sixTrysLink" >6 trys</div>
        <div class="game" @click="ticTacToeLink">Tic Tac Toe
        </div>
        <div class="game">Chess</div>
        <div class="game">Hangman Game</div>
        <div class="game">Checkers</div>
        <div class="game">Rock Paper Scissors</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"home",
  data(){
    return{
    }
  },
  methods:{
    ticTacToeLink: function(){
      window.location.href='http://localhost:8080/#/tictactoe'
    },
    sixTrysLink: function(){
      window.location.href='http://localhost:8080/#/sixtrys'
    }
  }
}

</script>

<style scoped>
  .main{
    margin: auto;
    background-color: #333;
  }
  #divs{
    padding-top: 20px;
  }
  h2{
    font-size: 50px;
    margin-bottom: 20px;
  }
  #gamesContainer{
    display: flex; 
    flex-wrap: wrap;
  }
  #gamesContainer div{
    margin: 15px;
  }
  .game{
    height: 150px;
    width: 300px;
    max-height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: green;
    margin-right: auto;
    margin-top: 20px;
    border: 2px solid black;
    cursor:pointer;
  }
</style>
