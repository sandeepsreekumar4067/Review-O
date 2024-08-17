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
        <input type="button" value="Save" id="save">
    </div>
  </div>
</template>

<script>
import "../style/personalinfo.css";
export default {

};
</script>

<style>
</style>