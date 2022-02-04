<template>
  <div id="sixTrysDiv">
    <div class="mainContainer">
      <h2>SIX TRYS</h2>
      <!-- soon -->
      <div id="words">
        <div v-show='final===true' class="wordContainer" v-for="letter in word" :key="letter.id">
          <div class="letter">{{letter}}</div>
        </div>
        <br>
        <div class="wordContainer" id="inputsContainer">
          <input class='letter' type="text" maxlength="1" v-for="letter in word" :key="letter.id" :value="guess.id">
        </div>
        <br>
        <button class="button" type="confirm">Confirm</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'sixTrysComponent',
  data(){
    return{
      wordBackend:[], // words in the backend / JSON

      word:'', // word to guess
      guess:[], // guess the word
      final:true, // the end game
    }
  },
  methods: {
    async getData(){ // getting the data in the backend
      const req = await fetch("http://localhost:3000/sixTrysEasy/")
      const data = await req.json()
      this.wordBackend = data
    },
  },
  mounted() { // activate the function
    this.getData()
  }
}
</script>

<style scoped>
  #sixTrysDiv{
    background-color: grey;
    padding-bottom: 100px;
  }
  .wordContainer{
    display: inline-flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 10px;
    align-content: center;
    
  }
  #words{
    margin-top: 20px;
  }
  .letter{
    background-color: white;
    border: 3px solid black;
    padding: 20px;
    font-weight: bold;
    font-size: 30px;
    text-transform:uppercase;
    text-align: center;
  }
  input{
    width: 30px;
  }
  .button{
    padding: 15px;
    margin-top: 10px;
    border: 2px solid rgb(255, 255, 255);
    color: rgb(255, 251, 0);
    background-color: #333;
    border-radius: 10px;
    cursor: pointer;
  }
</style>