<template>
  <NavBar :title="title" :subtitle="subtitle" @toggle-sidebar="setSidebarActive"/>
  <div class="addOrganisation-container">
    <div :class="['addOrganisation-components',{active:isSidebarActive}]">
        helo
    </div>
    <SideBar :isActive="isSidebarActive"/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import '../style/addorganisation.css'
import SideBar from '@/components/SideBar.vue';
export default {
    name:'AddOrganisations',
    components:{
        NavBar,
        SideBar
    },
    data(){
        return{
            title:'Add Organisation',
            subtitle :'Organisations/Add organisation',
            isSidebarActive : true
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