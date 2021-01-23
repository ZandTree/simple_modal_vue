<template>
    <div class="container">
        <h1>Game is over.</h1>
        <h3>Your result is: {{score}}</h3>
        <h4>Rate: {{rank}}</h4>
    </div>
</template>

<script>
export default {
    name:'Result',
    props:['score'],
    data(){
        return {
            rank:""
        }
    },
    mounted(){
        if(this.score<250){
            this.rank = "Great"
        }else if(this.score<450){
            this.rank = "Goed"
        }else{
            this.rank = "You dit it!"
        }
    }
}
</script>