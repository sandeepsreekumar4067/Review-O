<template>
  <div class="addusers-container">
    <NavBar :subtitle="subtitle" :title="title" :user="user" @toggle-sidebar="setSideBarActive"/>
    <div :class="['addusers-components',{active:isSidebarActive}]">
        <SideBar :isActive="isSidebarActive" :activeSpan="3"/>
    </div>
  </div>
  <FooterComponent/>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import "../style/addusers.css";
import SideBar from "@/components/SideBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "AddUsers",
  components: {
    NavBar,
    SideBar,
    FooterComponent
  },
  data(){
    return{
        subtitle:'Add users',
        title:'Add users',
        user:'Sandeep Sreekumar',
        isSidebarActive:true
    }
  },
  methods:{
    setSideBarActive(){
        this.isSidebarActive=!this.isSidebarActive
    }
  }
};
</script>

<style>
</style>