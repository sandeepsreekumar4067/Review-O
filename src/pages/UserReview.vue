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
    </div>
  </div>
</template>
  
<script>
import NavBar from "@/components/NavBar.vue";
import "../style/userreview.css";
import SideBar from "@/components/SideBar.vue";

export default {
  components: {
    NavBar,
    SideBar
  },
  props: ["title", "subtitle", "description"], // Accept props passed via router
  data() {
    return {
      user: "Sandeep",
      isSideBarActive:true,
    };
  },
  methods: {
    setSidebarActive() {
      this.isSideBarActive = !this.isSideBarActive;
    },
  },
};
</script>
  

  