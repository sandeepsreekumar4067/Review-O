<template>
  <div class="allUsers-container">
    <NavBar :title="title" :subtitle="subtitle" :user="user" @toggle-sidebar="setSidebarActive"/>
    <div :class="['allUsers-components',{active:isSidebarActive}]">
      <SideBar :isActive="isSidebarActive" :activeSpan="3"/>
      All Users
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import '../style/allusers.css'
import SideBar from '@/components/SideBar.vue';
export default {
    name:'AllUsers',
    components :{NavBar,SideBar},
    data(){
      return{
        title:'All Users',
        subtitle:'All Users Information',
        user:'Sandeep Sreekumar',
        isSidebarActive:true
      }
    },
    methods:{
      setSidebarActive(){
        this.isSidebarActive=!this.isSidebarActive
      }
    }
}
</script>

<style>

</style>