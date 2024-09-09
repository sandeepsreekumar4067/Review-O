<template>
  <NavBar
    :subtitle="subtitle"
    :title="title"
    :user="user"
    @toggle-sidebar="setSideBarActive"
  />
  <div class="addusers-container">
    <div :class="['addusers-components', { active: isSidebarActive }]">
      <SideBar :isActive="isSidebarActive" :activeSpan="3" />
      <div>
        <span
          :class="['tabs', { active: isPersonalActive }]"
          @click="toggleTabs('personal')"
        >
          <i class="bi bi-person"></i>
          personal info
        </span>
        <span
          :class="['tabs', { active: isAccoutAccessActive }]"
          @click="toggleTabs('account')"
        >
          <i class="bi bi-shield-lock"></i>
          Account Access</span
        >
      </div>
      <div class="personal-container" v-if="isPersonalActive">
        <PersonalInformation />
      </div>
      <div class="account-access-container" v-else>
        <AccountAccess />
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import "../style/addusers.css";
import SideBar from "@/components/SideBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import PersonalInformation from "@/components/PersonalInformation.vue";
import AccountAccess from "@/components/AccountAccess.vue";
export default {
  name: "AddUsers",
  components: {
    NavBar,
    SideBar,
    FooterComponent,
    PersonalInformation,
    AccountAccess,
  },
  data() {
    return {
      subtitle: "Add users",
      title: "Add users",
      user: "Sandeep Sreekumar",
      isSidebarActive: true,
      isPersonalActive: true,
      isAccoutAccessActive: false,
    };
  },
  methods: {
    setSideBarActive() {
      this.isSidebarActive = !this.isSidebarActive;
    },
    toggleTabs(val) {
      if (val === "personal") {
        this.isPersonalActive = true;
        this.isAccoutAccessActive = false;
      } else if (val === "account") {
        this.isPersonalActive = false;
        this.isAccoutAccessActive = true;
      }
    },
  },
};
</script>

<style>
</style>