<template>
  <div class="login-container">
    <div class="left-container">
      <img :src="LoginImage" alt="" />
      <span> Sed ut perspiciatis unde omnis iste natus </span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididun.
      </p>
    </div>
    <div class="right-container">
      <div class="logo-container">
        <img :src="Logo" />
      </div>
      <div class="login-title">
        Welcome back to the
        officeO community
      </div>
      <div class="login-buttons">
        <div class="google">
          <img :src="google" alt="" />
          <p>Log In with Google</p>
        </div>
        <div class="Microsoft">
          <img :src="Microsoft" alt="" />
          <p>Log In with Microsoft</p>
        </div>
      </div>
      <input type="text" placeholder="Email Address" class="email-input" />
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
      
    }
  },
};
</script>



<style>
</style>