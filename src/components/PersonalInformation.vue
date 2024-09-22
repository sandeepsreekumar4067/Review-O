<template>
  <div class="personal-info-container">
    <div class="personal-profile-pic-container">
        <i class="bi bi-camera"></i>
    </div>
    <div class="personal-info-entering-container">
        <div class="input-wrapper">
          <input type="text" v-model="firstname" placeholder="First Name">
        </div>
        <div class="input-wrapper">
          <input type="text" v-model="lastname" placeholder="Last Name">
        </div>
        <div class="input-wrapper">
          <input type="number" v-model="mobilenumber" placeholder="Mobile Number">

        </div>
        <div class="input-wrapper">
          <input type="email" v-model="email" placeholder="Email address">
        </div>
      </div>
    <div class="button-container">
        <input type="button" value="Cancel">
        <input type="button" value="Save" id="save" @click="randomResult">
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
      firstname:'',
      lastname:'',
      email:'',
      mobilenumber:null
    }
  },
  methods:{
    addUsers(){
      
    },
    
  }
};
</script>

<style>
</style>