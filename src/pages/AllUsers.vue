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
      <!-- User search bar -->
      <div class="users-searchBar-and-addContainer">
        <div class="users-searchBar">
          <i class="bi bi-search"></i>
          <input type="text" placeholder="Search" />
        </div>
        <div class="users-Adding-and-filtering-container">
          <div id="users">
            <i class="bi bi-plus-circle"></i>
            <p>Add User</p>
          </div>
          <div id="Userfilter">
            <i class="bi bi-sliders"></i>
            <p>Filter</p>
          </div>
        </div>
      </div>
      <!-- User Details container -->
      <div class="user-details-container">
        <div class="user-title">
          <span>User name</span>
          <span>Email address</span>
          <span>Phone number</span>
          <span :class="['action',{active:!isSidebarActive}]">Action</span>
        </div>
        <div class="users-container" v-for="user in paginatedUsers" :key="user.username">
          <span>
            <img :src="userImg" alt="" />
            {{ user.username }}
          </span>
          <span>
            {{ user.email }}
          </span>
          <span>
            {{ user.phoneNumber }}
          </span>
          <div class="action-container">
            <i class="bi bi-eye"></i>
            <i class="bi bi-pencil-square"></i>
            <i class="bi bi-trash"></i>
          </div>
        </div>
      </div>
      <!-- Pagination -->
      <div class="pagination">
        <div class="record-number">
          <p>
            Showing {{ displayStart }} - {{ displayEnd }} of {{ users.length }} records
          </p>
        </div>
        <div>
          <span @click="prevPage" :disabled="currentPage === 1">
              <i class="bi bi-chevron-left"></i>
            </span>
          <span
            v-for="page in visiblePages"
            :key="page"
            @click="goToPage(page)"
            :class="{ active: currentPage === page }"
          >
            {{ page }}
          </span>
          <span @click="nextPage" :disabled="currentPage === totalPages">
              <i class="bi bi-chevron-right"></i>
            </span>
        </div>
      </div>
    </div>
  </div>
  <FooterComponent/>
</template>


<script>
import NavBar from "@/components/NavBar.vue";
import "../style/allusers.css";
import SideBar from "@/components/SideBar.vue";
import userImg from "../assets/userName.svg";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "AllUsers",
  components: { NavBar, SideBar,FooterComponent },
  data() {
    return {
      title: "All Users",
      subtitle: "All Users Information",
      user: "Sandeep Sreekumar",
      isSidebarActive: true,
      userImg: userImg,
      users: [
        {
          username: "JohnDoe",
          email: "johndoe@example.com",
          phoneNumber: "+1-555-123-4567",
          image: "user1.png",
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
      ],
      currentPage: 1,
      usersPerPage: 7,
      pagesToShow: 3, // Number of page numbers to show at a time
      startPage: 1, // Starting page number to display
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.users.length / this.usersPerPage);
    },
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.usersPerPage;
      const end = start + this.usersPerPage;
      return this.users.slice(start, end);
    },
    visiblePages() {
      const endPage = Math.min(
        this.startPage + this.pagesToShow - 1,
        this.totalPages
      );
      const pages = [];
      for (let i = this.startPage; i <= endPage; i++) {
        pages.push(i);
      }
      return pages;
    },
    displayStart() {
      return (this.currentPage - 1) * this.usersPerPage + 1;
    },
    displayEnd() {
      return Math.min(this.currentPage * this.usersPerPage, this.users.length);
    },
  },
  methods: {
    setSidebarActive() {
      this.isSidebarActive = !this.isSidebarActive;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        if (this.currentPage < this.startPage) {
          this.startPage = Math.max(this.currentPage - this.pagesToShow + 1, 1);
        }
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        if (this.currentPage > this.startPage + this.pagesToShow - 1) {
          this.startPage++;
        }
      }
    },
    goToPage(page) {
      this.currentPage = page;
      if (page >= this.startPage + this.pagesToShow) {
        this.startPage = page - this.pagesToShow + 1;
      } else if (page < this.startPage) {
        this.startPage = page;
      }
    },
  },
};
</script>
