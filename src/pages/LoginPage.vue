<template>
  <div class="login-container">
    <div class="left-container">
      <img :src="LoginImage" alt="" class="left"/>
      <span class="left"> Sed ut perspiciatis unde omnis iste natus </span>
      <p class="left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididun.
      </p>
    </div>
    <div class="right-container">
      <div class="logo-container">
        <img :src="Logo" class="right" />
      </div>
      <div class="login-title right">
        Welcome back to the
        officeO community
      </div>
      <div class="login-buttons">
        <div class="google right">
          <img :src="google" alt="" />
          <p>Log In with Google</p>
        </div>
        <div class="Microsoft right">
          <img :src="Microsoft" alt="" />
          <p>Log In with Microsoft</p>
        </div>
      </div>
      <input type="text" placeholder="Email Address" class="email-input right" />
      <div class="login-input-container">
        <input type="button" value="Login" @click="()=>{this.$router.replace('/new-profile')}"/>
      </div>
    </div>
  </div>
</template>

<script>
import "../style/LoginPage.css";
import "../style/app.css";
import LoginImage from "../assets/Illustration.png";
import Logo from "../assets/Logo2.png";
import google from "../assets/google.svg";
import Microsoft from "../assets/Microsoft.svg";
import {gsap} from 'gsap'
export default {
  name: "LoginPage",
  data() {
    return {
      LoginImage: LoginImage,
      Logo: Logo,
      passVisibility: false,
      passType: "password",
      google: google,
      Microsoft: Microsoft,
    };
  },
  methods: {
    togglePassword() {
      this.passVisibility = !this.passVisibility;
    },
    loginAnimation(){
      gsap.to('.left',{
        duration:1,
        opacity:0,
        stagger:0.3,
        yPercent:-100
      })
      gsap.to('.right',{
        duration:1,
        stagger:0.3,
        opacity:0,
        yPercent:-100
      })
    },
    handleLogin(){
      this.loginAnimation()
      setTimeout(() => {
        this.$router.replace('/new-profile')
      }, 1500);
    }
  },
};
</script>



<style>
</style>