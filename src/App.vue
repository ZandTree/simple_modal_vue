<template>

  <!-- class="router-link-active router-link-exact-active" -->
  <div id="nav">
    <div class="menu-item">
      <router-link to="/">Home</router-link>       
    </div>
    <div class="menu-item">
      <!-- to="/about" static -->
      <router-link :to="{name:'About'}"
      >About</router-link>    
    </div>
    <div class="menu-item">    
      <button @click="toggleSignUp">Sign Up</button>
    </div>  
    <div class="menu-item">
      <button @click="toggleLogIn">Login</button>
    </div>
    <div class="menu-item">
      <router-link to="/test-it">Play</router-link>    
    </div>
    <div class="menu-item">
      <router-link to="/sign-up-form">Form</router-link>    
    </div>
      
  </div> 
  <hr>
  <button @click="redirect">Re-direct</button>
  <button @click="back">Go Back</button>
  <button @click="forward">Go forward</button>

  <hr>
 
    <teleport to=".modals">
      <div v-if="showSignUp">      
        <Modal @closeModal="toggleSignUp" >
          <slot>Welcome to SignUp</slot>
          <template v-slot:signItUp>          
            <a href="#">contact us</a>
            <p >here comes a singup form</p>
          </template>
        </Modal>     
      </div>
    </teleport>
    <teleport to=".modals">
      <div v-if="showLogIn">
        <Modal @closeModal="toggleLogIn" >
          <slot>
            <p >test it</p>
            Welcome to LogIn</slot>
          <template v-slot:logItIn>
            <a href="#">one link</a>
            <p>here comes a login form</p>
          </template>
        </Modal>
      </div>
    </teleport>
 
  <router-view/>
</template>

<script>
import Modal from '@/components/Modal.vue';


export default {
  name:"App",
  components:{
    Modal,    
   
  },
  data(){
    return {
      title:"Go on,Tata",
      showSignUp:false,
      showLogIn:false
    }
  },
  methods:{
    handleClick(){
      // to catch elem = input by ref
      // console.log(this.$refs.zoo)
      // .add,.focus: are just noraml js
      this.$refs.zoo.classList.add('marine');
      this.$refs.zoo.focus()
    },
    toggleSignUp(){
      this.showSignUp = !this.showSignUp;
      console.log("sing up",this.showSignUp);
    },
    toggleLogIn(){
      this.showLogIn = !this.showLogIn;
      console.log("log in",this.showLogIn);
    },
  redirect(){

  },
  back(){
    this.$router.go(-1)
  },
  forward(){
    this.$router.go( 1)
  }
  },
}
</script>

<style>
 
.marine{
  background-color:#b5e5cf;
}
#nav{
  padding-top:1rem;
  display: flex;
  justify-content: space-around;
}
#nav a{
   padding:5px;
  background: rgb(15, 199, 113);
  border-radius: 10px;
  color:white;
  /* display: inline-block; */
}
#nav a.router-link-active{
  padding:5px;
  background: purple;
  border-radius: 10px;
  color:white;
  /* display: inline-block; */
}
#nav a.router-link-exact-active{
  padding:5px;
  background:rosybrown;
  border-radius: 10px;
  display: inline-block;
}
button{
  margin:0 10px;
  padding:10px;
  border:none;
  border-radius: 4px;
  background-color: silver;
}
</style> 
