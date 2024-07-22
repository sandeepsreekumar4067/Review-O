<template>
  <NavBar
    :title="title"
    :subtitle="subtitle"
    :user="user"
    @toggle-sidebar="setSideBarActive"
  />
  <div class="new-profile-container">
    <SideBar :isActive="isSideBarActive" />
    <div :class="['new-profile-components', { active: isSideBarActive }]">
      <div class="new-profile-title">Organization Information</div>
      <div class="add-new-profile-pic-container">
        <i class="bi bi-camera"></i>
      </div>
      <div class="new-profile-input-container">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="User name" />
        <input type="number" placeholder="Phone number" />
        <select v-model="selectedTimezone">
          <option disabled value="">Select Timezone</option>
          <option
            v-for="timezone in timezones"
            :key="timezone.value"
            :value="timezone.value"
          >
            {{ timezone.value }}
          </option>
        </select>
        <select name="role" id="role">
          <option value="all scopes">All role</option>
          <option value="role 1">role 1</option>
          <option value="role 2">role 2</option>
        </select>
        <select name="scope" id="scope">
          <option value="all scopes">All Scope</option>
          <option value="scope 1">scope 1</option>
          <option value="scope 2">scope 2</option>
        </select>
      </div>
      <textarea name="about-me" id="about-me" placeholder="About me"></textarea>
      <div class="new-profile-submit-container">
        <input type="button" value="Cancel">
        <input type="button" value="Save" id="save">
      </div>
    </div>
  </div>
</template>

<script>
import "../style/newprofile.css";
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  name: "AddProfilePage",
  components: {
    NavBar,
    SideBar,
  },
  data() {
    return {
      title: "New Profile",
      subtitle: "Add Profile Details",
      user: "New User",
      isSideBarActive: false,
      selectedTimezone: "",
      timezones: [
        { value: "Pacific/Midway", label: "(UTC-11:00) Midway Island" },
        { value: "Pacific/Pago_Pago", label: "(UTC-11:00) Pago Pago" },
        { value: "Pacific/Honolulu", label: "(UTC-10:00) Hawaii" },
        { value: "America/Anchorage", label: "(UTC-09:00) Alaska" },
        {
          value: "America/Los_Angeles",
          label: "(UTC-08:00) Pacific Time (US & Canada)",
        },
        {
          value: "America/Denver",
          label: "(UTC-07:00) Mountain Time (US & Canada)",
        },
        {
          value: "America/Chicago",
          label: "(UTC-06:00) Central Time (US & Canada)",
        },
        {
          value: "America/New_York",
          label: "(UTC-05:00) Eastern Time (US & Canada)",
        },
        { value: "America/Caracas", label: "(UTC-04:30) Caracas" },
        {
          value: "America/Halifax",
          label: "(UTC-04:00) Atlantic Time (Canada)",
        },
        { value: "America/St_Johns", label: "(UTC-03:30) Newfoundland" },
        {
          value: "America/Argentina/Buenos_Aires",
          label: "(UTC-03:00) Buenos Aires",
        },
        { value: "America/Noronha", label: "(UTC-02:00) Mid-Atlantic" },
        { value: "Atlantic/Azores", label: "(UTC-01:00) Azores" },
        { value: "Europe/London", label: "(UTC+00:00) London" },
        {
          value: "Europe/Berlin",
          label: "(UTC+01:00) Berlin, Brussels, Madrid, Paris",
        },
        { value: "Africa/Johannesburg", label: "(UTC+02:00) Johannesburg" },
        { value: "Asia/Baghdad", label: "(UTC+03:00) Baghdad, Riyadh, Moscow" },
        { value: "Asia/Tehran", label: "(UTC+03:30) Tehran" },
        { value: "Asia/Dubai", label: "(UTC+04:00) Abu Dhabi, Muscat" },
        { value: "Asia/Kabul", label: "(UTC+04:30) Kabul" },
        { value: "Asia/Karachi", label: "(UTC+05:00) Islamabad, Karachi" },
        {
          value: "Asia/Kolkata",
          label: "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
        },
        { value: "Asia/Kathmandu", label: "(UTC+05:45) Kathmandu" },
        { value: "Asia/Dhaka", label: "(UTC+06:00) Astana, Dhaka" },
        { value: "Asia/Yangon", label: "(UTC+06:30) Yangon (Rangoon)" },
        { value: "Asia/Bangkok", label: "(UTC+07:00) Bangkok, Hanoi, Jakarta" },
        {
          value: "Asia/Shanghai",
          label: "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
        },
        { value: "Australia/Eucla", label: "(UTC+08:45) Eucla" },
        { value: "Asia/Tokyo", label: "(UTC+09:00) Osaka, Sapporo, Tokyo" },
        { value: "Australia/Adelaide", label: "(UTC+09:30) Adelaide" },
        {
          value: "Australia/Sydney",
          label: "(UTC+10:00) Canberra, Melbourne, Sydney",
        },
        { value: "Australia/Lord_Howe", label: "(UTC+10:30) Lord Howe Island" },
        {
          value: "Asia/Magadan",
          label: "(UTC+11:00) Magadan, Solomon Islands, New Caledonia",
        },
        { value: "Pacific/Norfolk", label: "(UTC+11:30) Norfolk Island" },
        {
          value: "Pacific/Auckland",
          label: "(UTC+12:00) Auckland, Wellington",
        },
        { value: "Pacific/Chatham", label: "(UTC+12:45) Chatham Islands" },
        { value: "Pacific/Tongatapu", label: "(UTC+13:00) Nukualofa" },
        { value: "Pacific/Kiritimati", label: "(UTC+14:00) Kiritimati" },
      ],
    };
  },
  methods: {
    setSideBarActive() {
      this.isSideBarActive = !this.isSideBarActive;
    },
  },
};
</script>

<style>
</style>