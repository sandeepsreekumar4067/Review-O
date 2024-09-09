<template>
  <div class="personal-info-container">
    <div class="personal-profile-pic-container">
        <i class="bi bi-camera"></i>
    </div>
    <div class="personal-info-entering-container">
        <input type="text" placeholder="First Name">
        <input type="text" placeholder="Last Name">
        <input type="number" placeholder="Mobile Number" >
        <input type="email" placeholder="Email address">
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
      status:false
    }
  },
  methods:{
    addUsers(){
      this.showThumbsUp=true
      setTimeout(() => {
        this.showThumbsUp=false
      }, 1500);
    },
    randomResult(){
      this.status=Math.random()<0.5
      this.addUsers()
    }
  }
};
</script>

<style>
</style>