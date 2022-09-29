<template>
  <header>
    <div class="backButton">
      <MenuBar></MenuBar>
      <router-link to="/dashboard"><i class="pi pi-angle-left" style="font-size: 200%"></i></router-link>
      <h1>Doctors</h1>
    </div>
    <div class="p-inputgroup">
      <span class="p-inputgroup-addon">
          <i class="pi pi-search"></i>
      </span>
      <pv-inputText placeholder="Search Doctor" />
    </div>
  </header>
  <DoctorButton name="Kendall" area="Dentista" description="Profesional"/>
  <DoctorButton name="Celis"></DoctorButton>
  <DoctorButton></DoctorButton>
  <DoctorButton></DoctorButton>
</template>

<script setup>
import DoctorButton from "../components/DoctorButton.vue";
import MenuBar from "../components/MenuBar.vue";
</script>

<script>
  props: ["name", "area", "description"]

</script>
<style scoped>
  .backButton{
    display:flex;
    justify-content: center;
    align-items: center;
  }
  .p-inputgroup{
    width:300px
  }
  header{
    display:flex;
    justify-content: space-between;
    gap: 4rem;
  }
</style>