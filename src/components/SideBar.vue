<template>
  <div :class="['sidebar-container',{active : isActive}]" >
    <div class="sidebar-components">
        <span :class="{ active: activeSpan === 1 }" @click="setActive(1)">
        <i class="bi bi-columns-gap"></i>
        <p>Dashboard</p>
      </span>
      <span :class="{ active: activeSpan === 2 }" @click="setActive(2)">
        <i class="bi bi-layers"></i>
        <p>Organisations</p>
      </span>
      <span :class="{ active: activeSpan === 3 }" @click="setActive(3)">
        <i class="bi bi-people"></i>
        <p>All Users</p>
      </span>
      <span :class="{ active: activeSpan === 4 }" @click="setActive(4)">
        <i class="bi bi-grid"></i>
        <p>Apps</p>
      </span>
      <span :class="{ active: activeSpan === 5 }" @click="setActive(5)">
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
        default:false
    }
  },
  data() {
    return {
      activeSpan: null,
    };
  },
  methods: {
    setActive(spanNumber) {
      this.activeSpan = spanNumber;
    }
  }
};
</script>

<style>
</style>