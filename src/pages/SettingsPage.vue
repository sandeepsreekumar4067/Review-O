<template>
  <NavBar :title="title" :subtitle="subtitle" :user="user" @toggle-sidebar="setSidebarActive"/>
  <div class="settings-container">
    <div :class="['settings-components',{active:isSidebarActive}]">
      <SideBar :isActive="isSidebarActive" :activeSpan="5"/>
      <span>Settings Page</span>
    </div>
  </div>
  <FooterComponent/>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import '../style/settingspage.css'
import SideBar from "@/components/SideBar.vue"; 
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "SettingsPage",
  components: { NavBar , SideBar,FooterComponent},
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