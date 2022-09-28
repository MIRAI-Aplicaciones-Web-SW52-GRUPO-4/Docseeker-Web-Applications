<script setup>
import { RouterLink, RouterView } from 'vue-router'
import RegisterView from './views/RegisterView.vue'
import ChangePassword from "./components/ChangePassword.vue";
import SearchDoctorView from "./views/SearchDoctorView.vue"
</script>

<template>
  <h2>Toolbar</h2>
  <SearchDoctorView/>
</template>

<style scoped>

</style>
