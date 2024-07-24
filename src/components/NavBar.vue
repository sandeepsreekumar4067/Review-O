<template>
  <div class="navbar-container">
    <div class="navbar-left-container">
      <i class="bi bi-list" @click="toggleSidebar"></i>
      <img :src="Logo" alt="" />
      <div class="navbar-title-container">
        <div class="navbar-title">
          {{ title }}
        </div>
        <div class="navbar-subtitle">
          {{ subtitle }}
        </div>
      </div>
    </div>
    <i v-if="!showRightContainer" class="bi bi-caret-left-fill" @click="toggleRightContainer"></i>
    <i v-else class="bi bi-caret-right-fill" @click="toggleRightContainer"></i>
    <div :class="['navbar-right-container', { 'visible': showRightContainer }]">
      <div class="navbar-search-bar">
        <i class="bi bi-search"></i>
        <input type="text" placeholder="Search" />
      </div>
      <i class="bi bi-bell"></i>
      <div class="navbar-drop-down" @click="toggleDropdown">
        <img :src="ProfilePic" />
        <p>{{ user }}</p>
        <i class="bi bi-caret-down"></i>
        <div v-if="dropdownVisible" class="dropdown-menu">
          <a href="#">Profile Page</a>
          <a href="#">Logout</a>
          <a href="#">More info</a>
        </div>
      </div>
    </div>
    
  </div>
</template>


<script>
import "../style/navbar.css";
import Logo from "../assets/Logo2.png";
import ProfilePic from "../assets/navbar-profilePic.png";

export default {
  name: "NavBar",
  props: ["title", "subtitle", "user"],
  data() {
    return {
      Logo: Logo,
      ProfilePic: ProfilePic,
      dropdownVisible: false,
      showRightContainer: false, // State to manage right container visibility
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },

    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.dropdownVisible = false;
      }
    },
    toggleSidebar(){
      this.$emit('toggle-sidebar')
    },
    toggleRightContainer() {
      this.showRightContainer = !this.showRightContainer;
    }
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>
