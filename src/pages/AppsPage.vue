<template>
  <NavBar
    :user="user"
    :title="title"
    :subtitle="subtitle"
    @toggle-sidebar="setSidebarActive"
  />
  <div class="app-container">
    <div :class="['app-components', { active: isSideBarActive }]">
      <SideBar :isActive="isSideBarActive" :activeSpan="4" />
      <div class="appPage-searchBar">
        <i class="bi bi-search"></i>
        <input type="text" placeholder="Search" />
      </div>
      <div class="apps-select-container">
        <div
          class="app-card"
          v-for="(company, index) in companies"
          :key="index"
          :style="{
            backgroundColor: company.backGround,
            border: company.border,
          }"
        >
          <div class="image-and-subscribeContainer">
            <div class="image-container">
              <img :src="company.icon" alt="" />
              {{ company.name }}
            </div>
            <div class="subscribe-button">
              <input
                v-if="company.subscribed"
                type="button"
                value="Unsubscribe"
                @click="
                  toggleSubscription(index, company.name, company.description,company.icon,company.subscribed)
                "
              />
              <input
                v-else
                type="button"
                value="Subscribe"
                id="subscribed"
                @click="toggleSubscription(index, company.name, company.description,company.icon,company.subscribed)"
              />
            </div>
          </div>
          <div class="description-box">
            <p>
              {{ company.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import confetti from "canvas-confetti";
import "../style/appsPage.css";
import SideBar from "@/components/SideBar.vue";
import uber from "../assets/uber.svg";
import doorDash from "../assets/doorDash.svg";
import google from "../assets/google.svg";
import tripAdvisor from "../assets/tripAdvisor.svg";
import skipTheDishes from "../assets/skipTheDishes.svg";
import facebook from "../assets/facebook.svg";
import yelp from "../assets/yelp.svg";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "AppsPage",
  components: {
    NavBar,
    SideBar,
    FooterComponent,
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
      facebook: facebook,
      yelp: yelp,
      isSubscribed: true,
      companies: [
        {
          name: "uber",
          subscribed: false,
          icon: uber,
          backGround: "#0000000D",
          border: "1.8px solid #00000059",
          description:
            " Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
        },
        {
          name: "doorDash",
          subscribed: false,
          icon: doorDash,
          backGround: "#E942350D",
          border: "1.8px solid #E9423559",
          description:
            " Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
        },
        {
          name: "Google",
          subscribed: false,
          icon: google,
          backGround: "#FABB050D",
          border: "1.8px solid #FABB0559",
          description:
            " Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
        },
        {
          name: "tripAdvisor",
          subscribed: false,
          icon: tripAdvisor,
          backGround: "#34A8530D",
          border: "1.8px solid #34A85359",
          description:
            " Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
        },
        {
          name: "skipTheDishes",
          subscribed: false,
          icon: skipTheDishes,
          backGround: "#FABB050D",
          border: "1.8px solid #FABB0559",
          description:
            " Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
        },
        {
          name: "facebook",
          subscribed: false,
          icon: facebook,
          backGround: "#4285F40D",
          border: "1.8px solid #4285F459",
          description:
            " Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
        },
        {
          name: "yelp",
          subscribed: false,
          icon: yelp,
          backGround: "#F5EEF2",
          border: "1.8px solid #F2C2C3",
          description:
            " Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
        },
      ],
    };
  },
  methods: {
    setSideBarActive() {
      this.isSideBarActive = !this.isSideBarActive;
    },
    async toggleSubscription(index, name, description,icon) {
      this.companies[index].subscribed = !this.companies[index].subscribed;
      this.companies[index].subscribed ? this.launchConfetti() : "";

      
      // Navigate to UserReview component with data
      this.$router.push({
        path: "/user-review",
        query: {
          title: name, // Pass the company name as the title
          subtitle: "App Information / " +name, // You can adjust the subtitle as per your needs
          description: description,
          icon:icon
        },
      });
    },
    launchConfetti() {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: {
          y: 0.7,
        },
      });
    },
  },
};
</script>

<style>
</style>