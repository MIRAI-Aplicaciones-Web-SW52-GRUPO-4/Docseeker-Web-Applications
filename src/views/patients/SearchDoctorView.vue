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
      <pv-inputText placeholder="Search Doctor" v-model="input"/>
    </div>
  </header>
  <DoctorButton v-for="doctor in filteredList()" :name="doctor.firstName" :area="doctor.area" :description="doctor.description"
                :doctor="doctor" photo="https://findicons.com/files/icons/1773/free/256/person.png" ></DoctorButton>
  <div class="error" v-if="input&&!filteredList().length">
    <p><i class="pi pi-exclamation-circle
"></i> No results found!</p>
  </div>
  </template>
<script setup>

import DoctorButton from "../../components/DoctorButton.vue";
import MenuBar from "../../components/MenuBar.vue";
</script>

<script>
import {DoctorsApiService} from "../../learning/services/doctors-api.service";

export default {
  data(){
    return {
      imgUrl: null,
      doctors: [],
      doctorsService: null,
      doctor: {},
      input: ""
    }
  },
  created() {
    this.doctorsService = new DoctorsApiService();
    this.doctorsService.getAll().then((response) => {
      this.doctors = response.data;
      this.doctors.forEach((doc) =>
          this.getDisplayableTutorial(doc)
      );
    });
  },
  methods: {
    getDisplayableTutorial(doc) {
      return doc;
    },
    filteredList() {
      return this.doctors.filter((doctor) =>
          doctor.firstName.toLowerCase().includes(this.input.toLowerCase()) ||
          doctor.lastName.toLowerCase().includes(this.input.toLowerCase())
      );
    }
  }
}

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
.error{
  display: flex;
  height: 80vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 3rem;
}
.error p i{
  font-size: 4rem;
  color: darkred;
}
</style>