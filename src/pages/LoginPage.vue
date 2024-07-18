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
        <div class="facebook">
          <img :src="facebook" alt="" />
          <p>Log In with Facebook</p>
        </div>
      </div>
      <input type="text" placeholder="Email Address" class="email-input" />
      <input type="button" value="Login" />
    </div>
  </div>
</template>

<script>
import "../style/LoginPage.css";
import "../style/app.css";
import LoginImage from "../assets/Illustration.png";
import Logo from "../assets/Logo2.png";
import google from "../assets/google.svg";
import facebook from "../assets/facebook.svg";
export default {
  name: "LoginPage",
  data() {
    return {
      LoginImage: LoginImage,
      Logo: Logo,
      passVisibility: false,
      passType: "password",
      google: google,
      facebook: facebook,
    };
  },
  methods: {
    togglePassword() {
      this.passVisibility = !this.passVisibility;
    },
  },
};
</script>



<style>
</style>