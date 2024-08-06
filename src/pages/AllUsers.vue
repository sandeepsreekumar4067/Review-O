<template>
  <div class="allUsers-container">
    <NavBar
      :title="title"
      :subtitle="subtitle"
      :user="user"
      @toggle-sidebar="setSidebarActive"
    />
    <div :class="['allUsers-components', { active: isSidebarActive }]">
      <SideBar :isActive="isSidebarActive" :activeSpan="3" />
      <!--User search bar-->
      <div class="users-searchBar-and-addContainer">
        <div class="users-searchBar">
          <i class="bi bi-search"></i>
          <input type="text" placeholder="Search" />
        </div>
        <div class="users-Adding-and-filtering-container">
          <div id="users" @click="navigate('/add-organisation')">
            <i class="bi bi-plus-circle"></i>
            <p>Add User</p>
          </div>
          <div id="Userfilter">
            <i class="bi bi-sliders"></i>
            <p>Filter</p>
          </div>
        </div>
      </div>
      <!--User Details container-->
      <div class="user-details-container">
        <div class="user-title">
          <span>User name</span>
          <span>Email address</span>
          <span>Phone number</span>
          <span>Action</span>
        </div>
        <div class="users-container" v-for="user in users" :key="user">
          <span>
            <img :src="userImg" alt="">
            {{ user.username }}
          </span>
          <span>
            {{ user.email }}
          </span>
          <span>
            {{ user.phoneNumber }}
          </span>
          <div class="action-container">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import "../style/allusers.css";
import SideBar from "@/components/SideBar.vue";
import userImg from "../assets/userName.svg"
export default {
  name: "AllUsers",
  components: { NavBar, SideBar },
  data() {
    return {
      title: "All Users",
      subtitle: "All Users Information",
      user: "Sandeep Sreekumar",
      isSidebarActive: true,
      userImg:userImg,
      users: [
        {
          username: "JohnDoe",
          email: "johndoe@example.com",
          phoneNumber: "+1-555-123-4567",
          image: "user1.png",
        },
        {
          username: "JaneSmith",
          email: "janesmith@example.com",
          phoneNumber: "+1-555-234-5678",
          image: "user2.png",
        },
        {
          username: "BobJohnson",
          email: "bobjohnson@example.com",
          phoneNumber: "+1-555-345-6789",
          image: "user3.png",
        },
        {
          username: "AliceBrown",
          email: "alicebrown@example.com",
          phoneNumber: "+1-555-456-7890",
          image: "user4.png",
        },
        {
          username: "CharlieDavis",
          email: "charliedavis@example.com",
          phoneNumber: "+1-555-567-8901",
          image: "user5.png",
        },
        {
          username: "DavidWilson",
          email: "davidwilson@example.com",
          phoneNumber: "+1-555-678-9012",
          image: "user6.png",
        },
        {
          username: "EmmaMoore",
          email: "emmamoore@example.com",
          phoneNumber: "+1-555-789-0123",
          image: "user7.png",
        },
        {
          username: "FrankWhite",
          email: "frankwhite@example.com",
          phoneNumber: "+1-555-890-1234",
          image: "user8.png",
        },
        {
          username: "GraceHarris",
          email: "graceharris@example.com",
          phoneNumber: "+1-555-901-2345",
          image: "user9.png",
        },
        {
          username: "HenryMartin",
          email: "henrymartin@example.com",
          phoneNumber: "+1-555-012-3456",
          image: "user10.png",
        },
      ],
    };
  },
  methods: {
    setSidebarActive() {
      this.isSidebarActive = !this.isSidebarActive;
    },
  },
};
</script>

<style>
</style>