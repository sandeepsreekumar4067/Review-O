import {  createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/pages/LoginPage.vue";
import OrganisationPage from "@/pages/OrganisationPage.vue";
const routes = [
    {
        path : '/',component:LoginPage
    },
    {
        path:'/organisation',component:OrganisationPage
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router