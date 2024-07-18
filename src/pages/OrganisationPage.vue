<template>
  <NavBar
    title="Organisations"
    subtitle="All Organizations Information"
    user="Robert Allen"
    @toggle-sidebar="setSideBarActive"
  />
  <SideBar :isActive="isSideBarActive"/>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import "../style/organisationpage.css";
import SideBar from '../components/SideBar.vue'
export default {
  name: "organisationPage",
  components: {
    NavBar,
    SideBar
  },
  data(){
    return{
      isSideBarActive:false
    }
  },
  methods:{
    setSideBarActive(){
      this.isSideBarActive=!this.isSideBarActive
    }
  }
};
</script>

