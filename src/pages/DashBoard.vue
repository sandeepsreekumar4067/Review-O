<template>
    <NavBar :title="title" :subtitle="subtitle" :user="user" @toggle-sidebar="setSidebarActive"/>
  <div class="dashBoard-container">
    <div :class="['dashBoard-components',{active:isSidebarActive}]">
        <SideBar :isActive="isSidebarActive" :activeSpan="1"/>
        <span>Dash Board</span>
    </div>
  </div>
  <FooterComponent/>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import '../style/dashboard.css'
import SideBar from '@/components/SideBar.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
    name:'DashBoard',
    components:{NavBar,SideBar,FooterComponent},
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