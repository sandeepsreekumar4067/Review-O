<template>
  <div class="app-container">
    <NavBar
      :title="title"
      :subtitle="subtitle"
      :user="user"
      @toggle-sidebar="setSideBarActive"
    />
    <div :class="['app-components', { active: isSideBarActive }]">
      <SideBar :isActive="isSideBarActive" :activeSpan="4" />
      <div class="appPage-searchBar">
        <i class="bi bi-search"></i>
        <input type="text" placeholder="Search" />
      </div>
      <div class="apps-select-container">
        <div class="uber">
          <div class="image-and-subscribeContainer">
            <div class="image-container">
              <img :src="uber" alt="" />
            </div>
            <div class="subscribe-button">
              <input
                v-if="!isSubscribed"
                type="button"
                value="Unsubscribe"
                @click="toggleSubscription"
              />
              <input
                v-else
                type="button"
                value="Subscribe"
                id="subscribed"
                @click="toggleSubscription"
              />
            </div>
          </div>
          <div class="description-box">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem...
            </p>
          </div>
        </div>
        <div class="doorDash">doordash</div>
        <div class="appGoogle">google</div>
        <div class="tripAdvisor">trip advisor</div>
        <div class="skipTheDishes">skip the dishes</div>
        <div class="faceBook">facebook</div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import "../style/appsPage.css";
import SideBar from "@/components/SideBar.vue";
import uber from "../assets/uber.svg";
export default {
  name: "AppsPage",
  components: {
    NavBar,
    SideBar,
  },
  data() {
    return {
      title: "Apps",
      subtitle: "Apps Information",
      user: "Sandeep Sreekumar",
      isSideBarActive: true,
      uber: uber,
      isSubscribed: false,
    };
  },
  methods: {
    setSideBarActive() {
      this.isSideBarActive = !this.isSideBarActive;
    },
    toggleSubscription() {
      this.isSubscribed = !this.isSubscribed;
    },
  },
};
</script>

<style>
</style>