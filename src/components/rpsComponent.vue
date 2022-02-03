<template>
  <div id='main' class="mainContainer">
    <h2>Rock Paper Scissors</h2>
    <div>
      <button v-show="play===false" type="confirm" @click="play=true">Play</button>
      <div v-show="play===true && result==''">
        <div><h1>Choose one:</h1></div>
        <div  id="rpsContainer">
          <div class="item rock " @click="rpsGame('rock')">rock</div>
          <div class="item paper" @click="rpsGame('paper')">paper</div>
          <div class="item scissors" @click="rpsGame('scissors')">scissors</div>
        </div>
        <button type="confirm" @click="play=false">Cancel</button>
      </div>
      <div v-show="result!=''" id="divResult">
        <div><h1>Result:</h1></div>
        <div id="outputContainer">
          <div id="resultContainer">
              <div v-show="selected=='rock'" class="item rock">{{selected}}</div>
              <div v-show="selected=='paper'" class="item paper">{{selected}}</div>
              <div v-show="selected=='scissors'" class="item scissors">{{selected}}</div>
              <div class='symbol'><h1>VS</h1></div>
              <div v-show="oneRandom=='rock'" class="item rock">{{oneRandom}}</div>
              <div v-show="oneRandom=='paper'" class="item paper">{{oneRandom}}</div>
              <div v-show="oneRandom=='scissors'" class="item scissors">{{oneRandom}}</div>
              <div class='symbol'><h1>=</h1></div>
          </div>
          <div>
            <div id="resultId" class="item"><h1>{{result}}</h1></div>
          </div>
        </div>
        <div>
          <button type="confirm" @click="result=''">Play again</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"rpsComponent",
  data(){
    return{
      play:false,
      random:['rock', 'paper', 'scissors'],
      result:'',
      oneRandom:'',
      selected:'',
    }
  },
  methods:{
    rpsGame: function(selected){
      this.sortRandom();
      this.selected=selected;
      if (this.oneRandom==this.selected){
        this.result='tie';
        }else{
          if ((this.selected=='paper' && this.oneRandom=='rock')||(this.selected=='scissors' && this.oneRandom=='paper')||(this.selected=='rock' && this.oneRandom=='scissors')){
            this.result='win'} else this.result='lose';
        }
      this.changeResultColor();
    },
    sortRandom: function() {
      this.oneRandom = this.random[Math.floor(Math.random()*this.random.length)];
    },
    changeResultColor: function() {
      if (this.result=='win') {
        document.getElementById("resultId").style.backgroundColor='green';
      }else if (this.result=='lose') {
        document.getElementById("resultId").style.backgroundColor='red';
      }else document.getElementById("resultId").style.backgroundColor='yellow';
    },
  },
}

</script>

<style scoped>
  #main{
    background-color: darkgray;
    padding-bottom: 235px;
  }
  h2{
    margin-bottom: 50px;
  }
  h1{
    margin-bottom: 20px;
    font-size: 50px;
    font-weight: bold;
    color: white;
    -webkit-text-stroke: 2px black;
  }
  button{
    background-color: #444;
    padding: 20px;
    margin-top: 20px;
    font-size: 30px;
    font-weight: bold;
    color: white;
    -webkit-text-stroke: 1px black;
    transition: .3s;
    cursor: pointer;
  }
  #main button:hover{
    background-color: white;
    -webkit-text-stroke: 1px #222;
    color: #333;
  }
  .symbol{
    padding: 0 30px;
  }
  #outputContainer{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }
  #rpsContainer, main{
    display: flex;
    flex-direction: row;
    justify-content: center;
    cursor: pointer;
  }
  #rpsContainer div{
    margin-left: 10px;
  }
  .item{
    background-color: #666;
    width: 150px;
    height: 150px;
    border: 2px solid #222;
    text-transform:uppercase;
  }
  #resultContainer{
    display: flex;
    flex-direction: row;
    justify-items: flex-start;
    align-items: center;
  }
  #resultId{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .rock{
    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFF8prUe82TNl8F1D2WxLH_h16QxpmVDc6TQ&usqp=CAU');
  }
  .paper{
    background-image: url('https://www.collinsdictionary.com/images/full/paper_111691001.jpg');
    background-position: 0 -250px;
  }
  .scissors{
    background-image: url('https://images.yaoota.com/KZpAB_0umxQvdRKYaN9Mhb2KJUA=/trim/yaootaweb-production-ng/media/crawledproductimages/567fb0e648fb834d20cb24f246f5d6010f8f2bd3.jpg');
    background-position: -180px -70px;
  }
</style>