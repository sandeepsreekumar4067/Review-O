import {  createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/pages/LoginPage.vue";
import OrganisationPage from "@/pages/OrganisationPage.vue";
import AddProfileDetails from "@/pages/AddProfileDetails.vue";
import AddOrganisations from "@/pages/AddOrganisations.vue";
import AppsPage from "@/pages/AppsPage.vue";
import DashBoard from "@/pages/DashBoard.vue";
import SettingsPage from "@/pages/SettingsPage.vue";
import AllUsers from "@/pages/AllUsers.vue";
const routes = [
    {
        path : '/',component:LoginPage
    },
    {
        path:'/organisation',component:OrganisationPage
    },
    {
        path:'/new-profile',component:AddProfileDetails
    },
    {
        path : '/add-organisation',component:AddOrganisations
    },
    {
        path : '/apps', component : AppsPage
    },
    {
        path:'/dash-board',component:DashBoard
    },
    {
        path:'/settings', component:SettingsPage
    },
    {
        path:'/all-users',component:AllUsers
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router