<template>
  <div>
     
    <div v-if="showBox" class="box" @click="stopTimer">
        <p>delay is: {{delay}}</p>
    </div>
    <!-- <div v-if="display" class="box" @click="endCount"></div> -->

  </div>
</template>

<script>

export default {
  name: 'Box', 
  //let op: delay in millisec
  props:['delay'],
  data(){
    return{
        showBox:false,
        timer:null,
        userPace:null      
    }
  },
  mounted(){
      // let op: delay in millisec
      // mount method will get a delay |=> box will appear with delay
      setTimeout(()=>{
          this.showBox = true;
          this.startTimer()
        
      },this.delay)
  },
  methods:{
      startTimer(){
        //   return new Date().getMilliseconds();
        this.timer = setInterval(() => {
            this.userPace+=10;
        }, 10);
      },
      stopTimer(){
          // built-in method: to stop timer
          clearInterval(this.timer);
          this.$emit('mSec',this.userPace)
      },
      
    },
    
}
  

  
</script>
<style>
.box{
  width:300px;
  height: 300px;
  margin: 50px auto;
  border-radius: 20px;
  background-color: #810e25ed;
  display: flex;
  justify-content: center;
  align-items: center;
  color:white;
}

</style>

