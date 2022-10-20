<script setup>
import { RouterLink, RouterView } from 'vue-router'
import RegisterView from './views/patients/RegisterView.vue'
import ChangePassword from "./components/ChangePassword.vue";
import Toolbar from "@/components/Toolbar.vue";

</script>

<template>
  <Toolbar/>
  <div class="container">
    <RouterView></RouterView>
  </div>

</template>

<style scoped>

</style>
