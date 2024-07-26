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
        <div class="doorDash">
          <div class="image-and-subscribeContainer">
            <div class="image-container">
              <img :src="doorDash" alt="" />
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
        <div class="appGoogle">
          <div class="image-and-subscribeContainer">
            <div class="image-container">
              <img :src="google" alt="" />
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
        <div class="tripAdvisor">
          <div class="image-and-subscribeContainer">
            <div class="image-container">
              <img :src="tripAdvisor" alt="" />
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
        <div class="skipTheDishes">
          <div class="image-and-subscribeContainer">
            <div class="image-container">
              <img :src="skipTheDishes" alt="" />
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
        <div class="faceBook">
          <div class="image-and-subscribeContainer">
            <div class="image-container">
              <img :src="facebook" alt="" />
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
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import "../style/appsPage.css";
import SideBar from "@/components/SideBar.vue";
import uber from "../assets/uber.svg";
import doorDash from "../assets/doorDash.svg";
import google from "../assets/google.svg";
import tripAdvisor from "../assets/tripAdvisor.svg";
import skipTheDishes from "../assets/skipTheDishes.svg";
import facebook from '../assets/facebook.svg'
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
      google: google,
      tripAdvisor: tripAdvisor,
      doorDash: doorDash,
      skipTheDishes: skipTheDishes,
      facebook:facebook,
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