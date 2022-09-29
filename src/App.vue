<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Toolbar from './components/Toolbar.vue';

</script>

<template>
  <Toolbar/>
  <div class="container">
    <RouterView></RouterView>
  </div>

</template>

<style scoped>

</style>
