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
            <input type="text" placeholder="Search">
          </div>
          <div class="organisation-Adding-and-filtering-container">
            <div id="addOrganisation">
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
          <div v-for="(branch, index) in paginatedBranches" :key="index" class="branch">
            <div class="branchOffice-imageContainer">

            </div>
            <div class="branch-details">
              <div class="branch-title">

              </div>
              <div class="branch-location-and-users">
                
              </div>
            </div>

            <!-- <h3>{{ branch.officeName }}</h3>
            <p>Location: {{ branch.location }}</p>
            <p>Number of Users: {{ branch.numberOfUsers }}</p> -->
          </div>
        </div>
        <div class="pagination">
          <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
          <span v-for="page in visiblePages" :key="page" @click="goToPage(page)" :class="{ active: currentPage === page }">{{ page }}</span>
          <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";
import "../style/organisationpage.css"; // Ensure this path is correct

export default {
  name: "organisationPage",
  components: {
    NavBar,
    SideBar
  },
  data() {
    return {
      isSideBarActive: true,
      branches: [], // This will hold the fetched data
      currentPage: 1,
      branchesPerPage: 8,
      pagesToShow: 4, // Number of page numbers to show at a time
      startPage: 1 // Starting page number to display
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
      const endPage = Math.min(this.startPage + this.pagesToShow - 1, this.totalPages);
      const pages = [];
      for (let i = this.startPage; i <= endPage; i++) {
        pages.push(i);
      }
      return pages;
    }
  },
  methods: {
    setSideBarActive() {
      this.isSideBarActive = !this.isSideBarActive;
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
        { officeName: "Office 1", location: "Location 1", numberOfUsers: 100 },
        { officeName: "Office 2", location: "Location 2", numberOfUsers: 120 },
        { officeName: "Office 3", location: "Location 3", numberOfUsers: 90 },
        { officeName: "Office 4", location: "Location 4", numberOfUsers: 80 },
        { officeName: "Office 5", location: "Location 5", numberOfUsers: 110 },
        { officeName: "Office 6", location: "Location 6", numberOfUsers: 95 },
        { officeName: "Office 7", location: "Location 7", numberOfUsers: 130 },
        { officeName: "Office 8", location: "Location 8", numberOfUsers: 85 },
        { officeName: "Office 9", location: "Location 9", numberOfUsers: 105 },
        { officeName: "Office 10", location: "Location 10", numberOfUsers: 115 },
        { officeName: "Office 6", location: "Location 6", numberOfUsers: 95 },
        { officeName: "Office 7", location: "Location 7", numberOfUsers: 130 },
        { officeName: "Office 8", location: "Location 8", numberOfUsers: 85 },
        { officeName: "Office 9", location: "Location 9", numberOfUsers: 105 },
        { officeName: "Office 10", location: "Location 10", numberOfUsers: 115 },
        { officeName: "Office 1", location: "Location 1", numberOfUsers: 100 },
        { officeName: "Office 2", location: "Location 2", numberOfUsers: 120 },
        { officeName: "Office 3", location: "Location 3", numberOfUsers: 90 },
        { officeName: "Office 4", location: "Location 4", numberOfUsers: 80 },
        { officeName: "Office 5", location: "Location 5", numberOfUsers: 110 },
        { officeName: "Office 4", location: "Location 4", numberOfUsers: 80 },
        { officeName: "Office 5", location: "Location 5", numberOfUsers: 110 },
        { officeName: "Office 6", location: "Location 6", numberOfUsers: 95 },
        { officeName: "Office 7", location: "Location 7", numberOfUsers: 130 },
        { officeName: "Office 8", location: "Location 8", numberOfUsers: 85 },
        { officeName: "Office 1", location: "Location 1", numberOfUsers: 100 },
        { officeName: "Office 2", location: "Location 2", numberOfUsers: 120 },
        { officeName: "Office 3", location: "Location 3", numberOfUsers: 90 },
        { officeName: "Office 4", location: "Location 4", numberOfUsers: 80 },
        { officeName: "Office 5", location: "Location 5", numberOfUsers: 110 },
        { officeName: "Office 1", location: "Location 1", numberOfUsers: 100 },
        { officeName: "Office 2", location: "Location 2", numberOfUsers: 120 },
        { officeName: "Office 3", location: "Location 3", numberOfUsers: 90 },
        { officeName: "Office 4", location: "Location 4", numberOfUsers: 80 },
        { officeName: "Office 5", location: "Location 5", numberOfUsers: 110 },
        { officeName: "Office 5", location: "Location 5", numberOfUsers: 110 },
        { officeName: "Office 6", location: "Location 6", numberOfUsers: 95 },
        { officeName: "Office 7", location: "Location 7", numberOfUsers: 130 },
        { officeName: "Office 8", location: "Location 8", numberOfUsers: 85 },
        { officeName: "Office 9", location: "Location 9", numberOfUsers: 105 },
        { officeName: "Office 10", location: "Location 10", numberOfUsers: 115 },
        { officeName: "Office 6", location: "Location 6", numberOfUsers: 95 },
        { officeName: "Office 7", location: "Location 7", numberOfUsers: 130 },
        { officeName: "Office 8", location: "Location 8", numberOfUsers: 85 },
        { officeName: "Office 9", location: "Location 9", numberOfUsers: 105 },
        { officeName: "Office 10", location: "Location 10", numberOfUsers: 115 },
        { officeName: "Office 1", location: "Location 1", numberOfUsers: 100 },
        { officeName: "Office 2", location: "Location 2", numberOfUsers: 120 },
        { officeName: "Office 3", location: "Location 3", numberOfUsers: 90 },
        { officeName: "Office 1", location: "Location 1", numberOfUsers: 100 },
        { officeName: "Office 2", location: "Location 2", numberOfUsers: 120 },
        { officeName: "Office 3", location: "Location 3", numberOfUsers: 90 },
        { officeName: "Office 4", location: "Location 4", numberOfUsers: 80 },
        { officeName: "Office 5", location: "Location 5", numberOfUsers: 110 },
        { officeName: "Office 1", location: "Location 1", numberOfUsers: 100 },
        { officeName: "Office 2", location: "Location 2", numberOfUsers: 120 },
        { officeName: "Office 3", location: "Location 3", numberOfUsers: 90 },
        { officeName: "Office 4", location: "Location 4", numberOfUsers: 80 },
        // Add more simulated branches as needed
      ];
    }
  },
  mounted() {
    this.fetchBranches();
  }
};
</script>



