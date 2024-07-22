<template>
  <NavBar
    :title="title"
    :subtitle="subtitle"
    :user="user"
    @toggle-sidebar="setSideBarActive"
  />
  <div class="new-profile-container">
    <SideBar :isActive="isSideBarActive" />
    <div :class="['new-profile-components', { active: isSideBarActive }]">
        helo world
    </div>
  </div>
</template>

<script>
import "../style/newprofile.css";
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  name: "AddProfilePage",
  components: {
    NavBar,
    SideBar,
  },
  data() {
    return {
      title: "New Profile",
      subtitle: "Add Profile Details",
      user: "New User",
      isSideBarActive: false,
    };
  },
  methods: {
    setSideBarActive() {
      this.isSideBarActive = !this.isSideBarActive;
    },
  },
};
</script>

<style>
</style>