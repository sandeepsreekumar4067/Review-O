<template>
  <NavBar title="titlsekeje" subtitle="random subtitle" user="sandeep sreekumar"/>
   <!-- <router-view/> -->
</template>

<script>
import "../src/style/app.css"
import NavBar from "./components/NavBar.vue";
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

