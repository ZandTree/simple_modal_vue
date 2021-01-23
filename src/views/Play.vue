<template>
  <div class="container">
   
    <div class="display-static">
      
      <Result :score="score" v-if="showResults"></Result>
      <!-- <button @click="start" 
      class='but-active'>
        Play
      </button>   -->
      <button @click="start" 
      :class="isPlaying ? 'but-blur' : 'but-active'">
        Play
      </button>  
    </div> 
    <Box v-if="isPlaying" :delay="delay" @mSec="displayResult"></Box> 
  
  <hr> 
  </div>
</template>

<script>
import Box from '@/components/Box.vue';
import Result from '@/components/Result.vue'

export default {
  name: 'Play',
  components:{
    Box,
    Result
  }, 
  data(){
    return{
      isPlaying:false,
      showBox:false,
      delay:null,
      score:null,
      showResults:false
    }
  },
  methods:{
   start(){
     this.isPlaying =!this.isPlaying;
     this.delay = 2000 + Math.random()*3000 //2000msec - 5 msec
     console.log("delay is",this.delay);     
      },
      displayResult(pace){
        console.log("speed is: ",pace);
        this.score = pace;
        this.isPlaying = false;
        this.showResults = true
    }  
   
  },
  
} 

</script>
<style scoped>
.display-static{
  margin-bottom: 2rem;
}
/* .box{
  width:300px;
  height: 300px;
  margin: 50px auto;
  background-color: forestgreen;
} */
.but-active{
    background-color: darkred;
    color:wheat;
    padding:20px;
    margin-bottom: 2rem;
    cursor: pointer;
    
}
.but-blur{
    background-color: rgba(136, 66, 66, 0.39);
    pointer-events: none;
     padding:20px;
    margin-bottom: 2rem;
    cursor:not-allowed;
}

</style>

