<template>
  <div class="personal-info-container">
    <div class="personal-profile-pic-container">
        <i class="bi bi-camera"></i>
    </div>
    <div class="personal-info-entering-container">
        <div class="input-wrapper">
          <input type="text" v-model="firstname" placeholder="First Name">
          <div :class="['error-message',{'active':fnameError}]">
            *this field is required
          </div>
        </div>
        <div class="input-wrapper">
          <input type="text" v-model="lastname" placeholder="Last Name">
          <div :class="['error-message',{'active':lnameError}]">
            *this field is required
          </div>
        </div>
        <div class="input-wrapper">
          <input type="number" v-model="mobilenumber" placeholder="Mobile Number">
          <div :class="['error-message',{'active':mobileError}]">
            *this field is required
          </div>
        </div>
        <div class="input-wrapper">
          <input type="email" v-model="email" placeholder="Email address">
          <div :class="['error-message',{'active':emailError}]">
            *this field is required
          </div>
        </div>
      </div>
    <div class="button-container">
        <input type="button" value="Cancel">
        <input type="button" value="Save" id="save" @click="checkUsers">
        <ThumbsUp v-if="status" :show="showThumbsUp" :title="userAddTitle"/>
        <ThumbsDown v-else :show="showThumbsUp" :title="userFailedTitle"/>
    </div>
  </div>
</template>

<script>
import "../style/personalinfo.css";
import ThumbsDown from "./ThumbsDown.vue";
import ThumbsUp from "./ThumbsUp.vue";
export default {
  name:'PersonalInformation',
  components:{
    ThumbsUp,
    ThumbsDown},
  data(){
    return{
      showThumbsUp:false,
      userAddTitle:'User Added..!',
      userFailedTitle:'User not Added..!',
      status:false,
      fnameError:false,
      lnameError:false,
      mobileError:false,
      emailError:false,
      firstname:'',
      lastname:'',
      email:'',
      mobilenumber:null
    }
  },
  methods: {
    addUsers(){
      // Function to add the user after validation
      alert('pass')
    },
    checkUsers() {
      // Validate First Name
      if (this.firstname.length === 0) {
        this.fnameError = true;
        console.log('First name is required');
      } else {
        this.fnameError = false;
      }

      // Validate Last Name
      if (this.lastname.length === 0) {
        this.lnameError = true;
      }else{
        this.lnameError = false;
      }

      // Validate Mobile Number
      if (!this.mobilenumber || this.mobilenumber.toString().length !== 10) {
        this.mobileError=true
      }else{
        this.mobileError=false
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.email)) {
        this.emailError=true
      }else{
        this.emailError=false
      }

      // Additional logic to check for all fields being valid
      if (
        this.firstname.length > 0 &&
        this.lastname.length > 0 &&
        this.mobilenumber &&
        this.mobilenumber.toString().length === 10 &&
        emailRegex.test(this.email)
      ) {
        this.addUsers(); // Call addUsers function if validation is successful
      }
    }
}

};
</script>

<style>
</style>