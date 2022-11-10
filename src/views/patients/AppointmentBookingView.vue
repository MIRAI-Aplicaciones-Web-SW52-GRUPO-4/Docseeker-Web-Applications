<template>
  <div class="backButton">
    <MenuBar></MenuBar>
    <router-link :to="{name: 'appointmentCalendar', params: {id: $route.params.id}}"><i class="pi pi-angle-left" style="font-size: 200%"></i></router-link>
    <h1>Book your appointment</h1>
  </div>
  <h2 class="title">These are all hours available for {{$route.params.date}}</h2>

  <HourAvailable @click="schedule(), hour = available.hours" v-model="hour" v-for="available in doctor.hoursAvailable" :date=$route.params.date :hour=available.hours
                 :name=doctor.name :area=doctor.area :cost=doctor.cost :doctorId=doctor.id :hourId=available.id
                 v-show="!available.booked"/>

</template>

<script setup>
import MenuBar from "../../components/MenuBar.vue"
import HourAvailable from "../../components/HourAvailable.vue"


</script>

<script>
import {DoctorsApiService} from "../../learning/services/doctors-api.service";
import {DatesApiService} from "../../learning/services/dates-api.service";
import {HoursApiService} from "../../learning/services/hours-api.service";

export default {
  data() {
    return {
      doctors: [],
      doctor: {},
      dates: [],
      date: {},
      hoursAvailable: [],
      hourAvailable: {},
      doctorsService: null,
      datesService: null,
      hoursService: null,

      hour: 0

    }
  },
  created() {
    this.doctorsService = new DoctorsApiService();
    this.doctorsService.getAll().then((response) => {
      this.doctors = response.data;

      for (let x in this.doctors){
        if (this.doctors[x].id == this.$route.params.id){
          this.doctor = this.doctors[x];
          break;
        }
      }
    });

    this.datesService = new DatesApiService();
    this.datesService.getAll().then((response) => {
      this.dates = response.data;
    });

  },
  methods: {
    schedule() {
      this.date = {
        id: this.dates.length,
        idPatient: sessionStorage.getItem("UserId"),
        doctorId: this.doctor.id,
        date: this.$route.params.date,
        hourId: this.hour
      }

      for (let x in this.doctor.hoursAvailable){
        if(this.doctor.hoursAvailable[x].id == this.hour) {
          this.doctor.hoursAvailable[x].booked = true;
        }
      }

      this.doctorsService.update(this.doctor.id, JSON.stringify(this.doctor));

      this.datesService.create(JSON.stringify(this.date));
    }
  }
}
</script>

<style scoped>
.backButton{
  display:flex;
  align-items: center;
}
.title{
  color: #7E7E7E;
  font-weight: bolder;
}
</style>