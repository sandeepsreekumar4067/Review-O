<template>
  <div class="allUsers-container">
    <NavBar :title="title" :subtitle="subtitle" :user="user" @toggle-sidebar="setSidebarActive"/>
    <div :class="['allUsers-components',{active:isSidebarActive}]">
      <SideBar :isActive="isSidebarActive" :activeSpan="3"/>
      <div class="users-searchBar-and-addContainer">
          <div class="users-searchBar">
            <i class="bi bi-search"></i>
            <input type="text" placeholder="Search" />
          </div>
          <div class="users-Adding-and-filtering-container">
            <div id="users" @click="navigate('/add-organisation')">
              <i class="bi bi-plus-circle"></i>
              <p>Add Organisation</p>
            </div>
            <div id="Userfilter">
              <i class="bi bi-sliders"></i>
              <p>Filter</p>
            </div>
          </div>
        </div>
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