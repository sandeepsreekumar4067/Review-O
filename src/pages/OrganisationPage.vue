<template>
  <div>
    <NavBar
      title="Organisations"
      subtitle="All Organizations Information"
      user="Robert Allen"
      @toggle-sidebar="setSideBarActive"
    />
    <div class="organisation-container">
      <SideBar :isActive="isSideBarActive" />
      <div :class="['organisation-components', { active: isSideBarActive }]">
        <div v-for="(branch, index) in paginatedBranches" :key="index" class="branch">
          <h3>{{ branch.officeName }}</h3>
          <p>Location: {{ branch.location }}</p>
          <p>Number of Users: {{ branch.numberOfUsers }}</p>
        </div>
        <div class="pagination">
          <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
          <span>Page {{ currentPage }} of {{ totalPages }}</span>
          <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";
import "../style/organisationpage.css";

export default {
  name: "organisationPage",
  components: {
    NavBar,
    SideBar
  },
  data() {
    return {
      isSideBarActive: false,
      branches: [], // This will hold the fetched data
      currentPage: 1,
      branchesPerPage: 8
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
    }
  },
  methods: {
    setSideBarActive() {
      this.isSideBarActive = !this.isSideBarActive;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
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
        // Add more simulated branches as needed
      ];
    }
  },
  mounted() {
    this.fetchBranches();
  }
};
</script>


