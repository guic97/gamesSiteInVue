<template>
  <div class="main">
    <div id="divs">
      <h2>GuiGames</h2>
      <div id="gamesContainer">
        <div id="game1" class="game image" @click="rockPaperScissors">Rock Paper Scissors</div>
        <div id="game2" class="game image" @click="sixTrysLink" >6 trys</div>
        <div id="game3" class="game image" @click="ticTacToeLink">Tic Tac Toe
        </div>
        <div id="game4" class="game image">Chess</div>
        <div id="game5" class="game image">Hangman Game</div>
        <div id="game6" class="game image">Checkers</div>
        <div id="game7" class="game image">21 points</div>
        <div id="game8" class="game image">Memory game</div>
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
    },
    rockPaperScissors: function(){
      window.location.href='http://localhost:8080/#/rockpaperscissors'
    },
  }
}

</script>

<style scoped>
  .main{
    margin: auto;
    background-color: rgb(82, 69, 69);
  }
  #divs{
    padding-top: 20px;
  }
  h2{
    font-size: 50px;
    margin-bottom: 20px;
    color: beige;
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
    background-color: rgb(157, 224, 157);
    margin-right: auto;
    margin-top: 20px;
    border: 2px solid black;
    cursor:pointer;
    font-weight: bold;
    color: rgb(238, 255, 0);
    font-size: 26px;
    -webkit-text-stroke: 1px black;
    
  }
  .image{
    background-position: 0 -220px;
    background-size: cover;
    height: 300px;
    transition: .3s;
  }
  #game1:hover{
    background-color: rgb(95, 80, 150);
    background-image: url('https://media.istockphoto.com/vectors/rockpaperscissors-hands-vector-id1219826525?b=1&k=20&m=1219826525&s=170667a&w=0&h=_Dq3TcWrvj0Psk3hrIyTSkUMa0_IaGI_DYjsge37L30=');
  }
  #game5:hover{
    background-color: darkgray;
    background-position: 0 -20px;
    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5SPl4fO8fl0HXZCNIc-r-Hdcg-KhKUvE4YA&usqp=CAU');
  }

  
</style>
