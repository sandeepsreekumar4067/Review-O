<template>
  <div>
    <NavBar
      title="Organisations"
      subtitle="All Organizations Information"
      user="Robert Allen"
      @toggle-sidebar="setSideBarActive"
    />
    <div class="organisation-container">
      <SideBar :isActive="isSideBarActive" :activeSpan="2" />
      <div :class="['organisation-components', { active: isSideBarActive }]">
        <div class="organisation-searchBar-and-addContainer">
          <div class="addOrganisation-searchBar">
            <i class="bi bi-search"></i>
            <input type="text" placeholder="Search" />
          </div>
          <div class="organisation-Adding-and-filtering-container">
            <div id="addOrganisation" @click="navigate('/add-organisation')">
              <i class="bi bi-plus-circle"></i>
              <p>Add Organisation</p>
            </div>
            <div id="filter">
              <i class="bi bi-sliders"></i>
              <p>Filter</p>
            </div>
          </div>
        </div>
        <div class="branches-grid">
          <div
            v-for="(branch, index) in paginatedBranches"
            :key="index"
            class="branch"
          >
            <div class="branchOffice-imageContainer">
              <img :src="branch.OfficeImage" alt="" />
            </div>
            <div class="branch-details">
              <div class="branch-title">
                {{ branch.officeName }}
              </div>
              <div class="branch-location">
                <i class="bi bi-geo-alt"></i>
                {{ branch.location }}
              </div>
              <div class="branch-users">
                <i class="bi bi-person"></i>
                {{ branch.numberOfUsers }}
              </div>
            </div>
          </div>
        </div>
        <div class="pagination">
          <div class="record-number">
            <p>
              Showing {{ displayStart }} - {{ displayEnd }} of
              {{ branches.length }} records
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
              >{{ page }}</span
            >
            <span @click="nextPage" :disabled="currentPage === totalPages">
              <i class="bi bi-chevron-right"></i>
            </span>
          </div>
        </div>
        <FooterComponent/>
      </div>
    </div>
  </div>
</template>


<script>
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";
import "../style/organisationpage.css"; // Ensure this path is correct
import office1 from "../assets/office 1.svg";
import office2 from "../assets/office 2.svg";
import office3 from "../assets/office 3.svg";
import office4 from "../assets/office 4.svg";
import office5 from "../assets/office 5.svg";
import office6 from "../assets/office 6.svg";
import office7 from "../assets/office 6.svg";
import noOffice from "../assets/no office.svg";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "organisationPage",
  components: {
    NavBar,
    SideBar,
    FooterComponent
  },
  data() {
    return {
      isSideBarActive: true,
      branches: [], // This will hold the fetched data
      currentPage: 1,
      branchesPerPage: 8,
      pagesToShow: 4, // Number of page numbers to show at a time
      startPage: 1, // Starting page number to display
      office1: office1,
      office2: office2,
      office3: office3,
      office4: office4,
      office5: office5,
      office6: office6,
      office7: office7,
      noOffice: noOffice,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.branches.length / this.branchesPerPage);
    },
    paginatedBranches() {
      const start = (this.currentPage - 1) * this.branchesPerPage;
      const end = start + this.branchesPerPage;
      return this.branches.slice(start, end);
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
      return (this.currentPage - 1) * this.branchesPerPage + 1;
    },
    displayEnd() {
      return Math.min(
        this.currentPage * this.branchesPerPage,
        this.branches.length
      );
    },
  },
  methods: {
    setSideBarActive() {
      this.isSideBarActive = !this.isSideBarActive;
    },
    navigate(route){
      this.$router.push(route)
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
    fetchBranches() {
      // Simulate an API call
      this.branches = [
        {
          officeName: "Vancouver Office",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 12,
          OfficeImage: office5,
        },
        {
          officeName: "Toronto Office",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 9,
          OfficeImage: office2,
        },
        {
          officeName: "Regional Office",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 17,
          OfficeImage: office1,
        },
        {
          officeName: "Support Desk",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 14,
          OfficeImage: office3,
        },
        {
          officeName: "Vancouver Office",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 8,
          OfficeImage: office7,
        },
        {
          officeName: "Toronto Office",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 19,
          OfficeImage: office6,
        },
        {
          officeName: "Regional Office",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 15,
          OfficeImage: office4,
        },
        {
          officeName: "Support Desk",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 10,
          OfficeImage: office7,
        },
        {
          officeName: "Vancouver Office",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 20,
          OfficeImage: office2,
        },
        {
          officeName: "Toronto Office",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 11,
          OfficeImage: noOffice,
        },
        {
          officeName: "Regional Office",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 7,
          OfficeImage: office1,
        },
        {
          officeName: "Support Desk",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 16,
          OfficeImage: office5,
        },
        {
          officeName: "Vancouver Office",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 13,
          OfficeImage: office4,
        },
        {
          officeName: "Toronto Office",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 6,
          OfficeImage: office3,
        },
        {
          officeName: "Regional Office",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 18,
          OfficeImage: office7,
        },
        {
          officeName: "Support Desk",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 5,
          OfficeImage: office6,
        },
        {
          officeName: "Vancouver Office",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 14,
          OfficeImage: office7,
        },
        {
          officeName: "Toronto Office",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 11,
          OfficeImage: office5,
        },
        {
          officeName: "Regional Office",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 4,
          OfficeImage: office2,
        },
        {
          officeName: "Support Desk",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 10,
          OfficeImage: office3,
        },
        {
          officeName: "Vancouver Office",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 9,
          OfficeImage: noOffice,
        },
        {
          officeName: "Toronto Office",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 17,
          OfficeImage: office4,
        },
        {
          officeName: "Regional Office",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 8,
          OfficeImage: office7,
        },
        {
          officeName: "Support Desk",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 19,
          OfficeImage: office1,
        },
        {
          officeName: "Vancouver Office",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 13,
          OfficeImage: office6,
        },
        {
          officeName: "Toronto Office",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 15,
          OfficeImage: office7,
        },
        {
          officeName: "Regional Office",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 2,
          OfficeImage: office5,
        },
        {
          officeName: "Support Desk",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 20,
          OfficeImage: office4,
        },
        {
          officeName: "Vancouver Office",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 12,
          OfficeImage: office7,
        },
        {
          officeName: "Toronto Office",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 6,
          OfficeImage: office3,
        },
        {
          officeName: "Regional Office",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 18,
          OfficeImage: noOffice,
        },
        {
          officeName: "Support Desk",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 11,
          OfficeImage: office2,
        },
        {
          officeName: "Vancouver Office",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 14,
          OfficeImage: office1,
        },
        {
          officeName: "Toronto Office",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 16,
          OfficeImage: office6,
        },
        {
          officeName: "Regional Office",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 5,
          OfficeImage: office7,
        },
        {
          officeName: "Support Desk",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 3,
          OfficeImage: office5,
        },
        {
          officeName: "Vancouver Office",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 17,
          OfficeImage: office4,
        },
        {
          officeName: "Toronto Office",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 9,
          OfficeImage: office7,
        },
        {
          officeName: "Regional Office",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 13,
          OfficeImage: office3,
        },
        {
          officeName: "Support Desk",
          location: "Vancouver, British Columbia, Canada",
          numberOfUsers: 7,
          OfficeImage: office2,
        },
      ];
    },
  },
  mounted() {
    this.fetchBranches();
  },
};
</script>
