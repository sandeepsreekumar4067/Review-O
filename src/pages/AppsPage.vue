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
              Uber
            </div>
            <div class="subscribe-button">
              <input
                v-if="!uberSubscribed"
                type="button"
                value="Unsubscribe"
                @click="toggleSubscription('uberSubscribed')"
              />
              <input
                v-else
                type="button"
                value="Subscribe"
                id="subscribed"
                @click="toggleSubscription('uberSubscribed')"
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
              doorDash
            </div>
            <div class="subscribe-button">
              <input
                v-if="!doorDashSubscribed"
                type="button"
                value="Unsubscribe"
                @click="toggleSubscription('doorDashSubscribed')"
              />
              <input
                v-else
                type="button"
                value="Subscribe"
                id="subscribed"
                @click="toggleSubscription('doorDashSubscribed')"
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
              Google
            </div>
            <div class="subscribe-button">
              <input
                v-if="!googleSubscribed"
                type="button"
                value="Unsubscribe"
                @click="toggleSubscription('googleSubscribed')"
              />
              <input
                v-else
                type="button"
                value="Subscribe"
                id="subscribed"
                @click="toggleSubscription('googleSubscribed')"
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
              TripAdvisor
            </div>
            <div class="subscribe-button">
              <input
                v-if="!tripAdvisorSubscribed"
                type="button"
                value="Unsubscribe"
                @click="toggleSubscription('tripAdvisorSubscribed')"
              />
              <input
                v-else
                type="button"
                value="Subscribe"
                id="subscribed"
                @click="toggleSubscription('tripAdvisorSubscribed')"
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
              skipTheDishes
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
              Facebook
            </div>
            <div class="subscribe-button">
              <input
                v-if="!facebookSubscribed"
                type="button"
                value="Unsubscribe"
                @click="toggleSubscription('facebookSubscribed')"
              />
              <input
                v-else
                type="button"
                value="Subscribe"
                id="subscribed"
                @click="toggleSubscription('facebookSubscribed')"
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
      uberSubscribed:false,
      doorDashSubscribed:false,
      googleSubscribed:false,
      tripAdvisorSubscribed:false,
      skipTheDishesSubscribed:false,
      facebookSubscribed:false,
      isSubscribed: false,
    };
  },
  methods: {
    setSideBarActive() {
      this.isSideBarActive = !this.isSideBarActive;
    },
    toggleSubscription(subscriptionKey) {
      this[subscriptionKey] = !this[subscriptionKey]
    },
  },
};
</script>

<style>
</style>