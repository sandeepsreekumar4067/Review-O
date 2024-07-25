<template>
  <div class="app-container">
    <NavBar
      :title="title"
      :subtitle="subtitle"
      :user="user"
      @toggle-sidebar="setSideBarActive"
    />
    <div :class="['app-components',{active:isSideBarActive}]">
      <SideBar :isActive="isSideBarActive" :activeSpan="4" />
      <div class="appPage-searchBar">
        <i class="bi bi-search"></i>
        <input type="text" placeholder="Search">
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import "../style/appsPage.css";
import SideBar from "@/components/SideBar.vue";
export default {
  name: "AppsPage",
  components: {
    NavBar,
    SideBar,
  },
  data() {
    return {
      title: "Apps",
      subtitle: "Apps Information",
      user: "Sandeep Sreekumar",
      isSideBarActive: true,
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