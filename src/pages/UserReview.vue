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
    };
  },
  methods: {
    setSidebarActive() {
      this.isSideBarActive = !this.isSideBarActive;
    },
  },
};
</script>
  

  