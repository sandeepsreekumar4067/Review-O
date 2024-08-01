<template>
  <div class="settings-container">
    <NavBar :title="title" :subtitle="subtitle" :user="user" @toggle-sidebar="setSidebarActive"/>
    <div :class="['settings-components',{active:isSidebarActive}]">
      <SideBar :isActive="isSidebarActive" :activeSpan="5"/>
      settings
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import '../style/settingspage.css'
import SideBar from "@/components/SideBar.vue";
export default {
  name: "SettingsPage",
  components: { NavBar , SideBar},
  data() {
    return {
      title: "Settings",
      subtitle: "Settings page",
      user: "Sandeep Sreekumar",
      isSidebarActive:true
    };
  },
  methods:{
    setSidebarActive(){
      this.isSidebarActive=!this.isSidebarActive
    }
  }
};
</script>

<style>
</style>