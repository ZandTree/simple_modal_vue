<template>
  
    <h3>{{title}}</h3>
    <input type="text" ref="zoo">
    <button @click="handleClick">Click me</button>
    <hr>       
    <router-link to="/about">About</router-link>
    <hr>
    <button @click="toggleSignUp">Sign Up</button>
    <button @click="toggleLogIn">Login</button>

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
import Modal from '@/components/Modal.vue'
export default {
  name:"App",
  components:{
    Modal
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
    }
  }
}
</script>

<style>
 
.marine{
  background-color:#b5e5cf;
}
.modal .actions a {
    color:rgb(240, 12, 23);
    padding:8px;
    border:1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin:10px;
    font-size: 2rem;
}

</style> 
