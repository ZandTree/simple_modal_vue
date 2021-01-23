<template>
  <div class="container">
    <h1>Your result = {{getPace}} seconds</h1>
    <div class="display-static">
      <h1>Reaction Timer</h1>
      <!-- <button @click="letsPlay" 
      class="but-active" :disabled="isPlaying">
        Play
      </button>   -->
      <button @click="letsPlay" 
      :class="isPlaying ? 'but-blur' : 'but-active'">
        Play
      </button>  
    </div>
  <div v-if="showBox" class="box" @click="startCountDown">

  </div>
  <hr> 
  </div>
</template>

<script>
function getRandomInterval(min=2, max=5) {
  //The maximum is exclusive and the minimum is inclusive  
  return Math.random() * (max - min) + min;  
}

export default {
  name: 'Play', 
  data(){
    return{
      isPlaying:false,
      showBox:false,
      // delay:null,
      startMsec:0,
      endMsec:0
    }
  },
  methods:{
   letsPlay(){
     this.isPlaying =!this.isPlaying;
     let interv = getRandomInterval()*1000;
     console.log("in letsPlay",interv)
     setTimeout(() => {
        //  console.log("clicable",this.initial);
        //  console.log(getRandomInterval())
          this.showBox = true
          this.startMsec = new Date().getTime();    
      }, interv);
    },
   startCountDown(){
     this.endMsec = new Date().getTime();
      
      }
   },
   computed:{
     getPace(){
      return (this.endMsec - this.startMsec)/1000;
      // return Math.round(this.endMsec - this.startMsec);
    
     }
   }
} 

</script>
<style scoped>
.display-static{
  margin-bottom: 2rem;
}
.box{
  width:300px;
  height: 300px;
  margin: 50px auto;
  background-color: forestgreen;
}
.but-active{
    background-color: darkred;
    color:wheat;
    padding:20px;
    margin-bottom: 2rem;
    
}
.but-blur{
    background-color: rgba(136, 66, 66, 0.39);
    pointer-events: none;
     padding:20px;
    margin-bottom: 2rem;
}

</style>

