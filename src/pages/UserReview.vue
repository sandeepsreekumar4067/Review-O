<template>
  <NavBar
    :user="user"
    :title="title"
    :subtitle="subtitle"
    @toggle-sidebar="setSidebarActive"
  />
  <div class="user-review-container">
    <div :class="['user-review-components', { active: isSideBarActive }]">
      <SideBar :isActive="isSideBarActive" :activeSpan="4" />
      <!-- container about app image and description -->
      <div class="app-header-container">
        <div class="app-image">
          <img :src="icon" alt="" />
        </div>
        <div class="app-description">
          <div class="app-title">
            {{ title }}
          </div>
          <div class="app-desc">
            {{ description }}
          </div>
        </div>
      </div>
      <!-- App review container -->
      <div class="app-review-section">
        <div class="review">
          <div class="review-user-image">
            <img :src="img" alt="">
          </div>
          <div class="review-user-details">
            <div class="review-user-name">
              User
            </div>
            <div class="review-user-comment">
              {{ description }}
            </div>
            <div class="reply-button">
              Reply
              <i class="bi bi-reply"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>
  
<script>
import NavBar from "@/components/NavBar.vue";
import "../style/userreview.css";
import SideBar from "@/components/SideBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import img from '../assets/userName.svg'
export default {
  components: {
    NavBar,
    SideBar,
    FooterComponent,
  },
  props: ["title", "subtitle", "description", "icon"], // Accept props passed via router
  data() {
    return {
      user: "Sandeep",
      isSideBarActive: true,
      img:img
    };
  },
  methods: {
    setSidebarActive() {
      this.isSideBarActive = !this.isSideBarActive;
    },
  },
};
</script>
  

  