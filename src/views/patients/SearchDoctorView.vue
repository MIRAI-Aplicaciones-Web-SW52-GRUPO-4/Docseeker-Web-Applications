<template>
  <header>
    <div class="backButton">
      <MenuBar></MenuBar>
      <h1 class="title">Doctors</h1>
    </div>
    <div class="p-inputgroup">
        <span class="p-inputgroup-addon">
            <i class="pi pi-search"></i>
        </span>
      <pv-inputText placeholder="Search Doctor" />
    </div>
  </header>
  <DoctorButton v-for="doctor in doctors" :name="doctor.name" :area="doctor.area" :description="doctor.description" :doctor="doctor" ></DoctorButton>
</template>

<script setup>
import DoctorButton from "../../components/DoctorButton.vue";
import MenuBar from "../../components/MenuBar.vue";
import { useCounterStore } from "../../stores/counter";
const doctors = useCounterStore().doctors;
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
.title{
  font-weight: bolder;
}
</style>