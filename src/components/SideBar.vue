<template>
  <div :class="['sidebar-container',{active : isActive}]" >
    <div class="sidebar-components">
        <span :class="{ active: activeSpan === 1 }" @click="setActive('/dash-board')">
        <i class="bi bi-columns-gap"></i>
        <p>Dashboard</p>
      </span>
      <span :class="{ active: activeSpan === 2 }" @click="setActive('/organisation')">
        <i class="bi bi-layers"></i>
        <p>Organisations</p>
      </span>
      <span :class="{ active: activeSpan === 3 }" @click="setActive('/all-users')">
        <i class="bi bi-people"></i>
        <p>All Users</p>
      </span>
      <span :class="{ active: activeSpan === 4 }" @click="setActive('/apps')">
        <i class="bi bi-grid"></i>
        <p>Apps</p>
      </span>
      <span :class="{ active: activeSpan === 5 }" @click="setActive('/settings')">
        <i class="bi bi-gear"></i>
        Settings
      </span>
    </div>
  </div>
</template>

<script>
import "../style/sidebar.css";
export default {
  name: "SideBar",
  props:{
    isActive:{
        type:Boolean,
        default:true
    },
    activeSpan:{
      type:Number
    }
  },
  data() {
    return {
    };
  },
  methods: {
    setActive(route) {
      this.$router.replace(route)
    }
  },

};
</script>

<style>
</style>