<template>
  <div class="dashBoard-container">
    <NavBar :title="title" :subtitle="subtitle" :user="user" @toggle-sidebar="setSidebarActive"/>
    <div :class="['dashBoard-components',{active:isSidebarActive}]">
        <SideBar :isActive="isSidebarActive" :activeSpan="1"/>
        DashBoard
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import '../style/dashboard.css'
import SideBar from '@/components/SideBar.vue';
export default {
    name:'DashBoard',
    components:{NavBar,SideBar},
    data(){
        return{
            isSidebarActive:true,
            title:'Dash Board',
            subtitle:'Dashboard info',
            user:'Sandeep Sreekumar'
        }
    },
    methods:{
        setSidebarActive(){
            this.isSidebarActive=!this.isSidebarActive
        }
    }
}
</script>