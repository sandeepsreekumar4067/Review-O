<template>
  <router-view/>
</template>

<script>
import "../src/style/app.css";

export default {
  name: "App",
  components: {
    
  },
  data() {
    return {
      isSideBarActive: true,
    };
  },
  methods:{
    setSideBarActive() {
      this.isSideBarActive = !this.isSideBarActive;
    },
  }
};

</script>

