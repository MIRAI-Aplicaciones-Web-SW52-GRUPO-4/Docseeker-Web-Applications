<script setup>
import { RouterLink, RouterView } from 'vue-router'
import RegisterView from './views/RegisterView.vue'
import ChangePassword from "./components/ChangePassword.vue";
import Toolbar from "@/components/Toolbar.vue";
import Welcome from "@/components/Welcome.vue";

import SearchDoctorView from "./views/SearchDoctorView.vue"
</script>

<template>
  <div class="container">
    <SearchDoctorView/>
  </div>
</template>

<style scoped>

</style>
