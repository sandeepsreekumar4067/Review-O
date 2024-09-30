<template>
  <NavBar :user="user" :title="title" :subtitle="subtitle" />
  <div class="user-review-container">
    <p>{{ description }}</p>
  </div>
</template>
  
  <script>
import NavBar from "@/components/NavBar.vue";
import "../style/userreview.css";

export default {
  components: {
    NavBar,
  },
  props: ["title", "subtitle", "description"], // Accept props passed via router
  data() {
    return {
      user: "Sandeep",
    };
  },
};
</script>
  

  