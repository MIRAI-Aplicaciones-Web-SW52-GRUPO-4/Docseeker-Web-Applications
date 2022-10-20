<template>
  <div class="backButton">
    <MenuBar></MenuBar>
    <router-link :to="{name: 'appointmentCalendar', params: {id: $route.params.id}}"><i class="pi pi-angle-left" style="font-size: 200%"></i></router-link>
    <h1>Book your appointment</h1>
  </div>
  <h2 class="title">These are all hours available for {{$route.params.date}}</h2>

  <HourAvailable v-for="available in doctor.hoursAvailable" :date=$route.params.date :hour=available.hours :name=doctor.name :area=doctor.area :cost=doctor.cost :doctorId=doctor.id :hourId=available.id
                 v-show="!this.invalidDate.includes(available.id)"/>

</template>

<script setup>
import MenuBar from "../../components/MenuBar.vue"
import HourAvailable from "../../components/HourAvailable.vue"


</script>

<script>
import { useCounterStore } from "../../stores/counter";

export default {
  data(){
    return{
      doctor: [...useCounterStore().doctors],
      dates: useCounterStore().dates,
      invalidDate: []
    }
  },
  created() {
    for (let x in this.doctor){
      if (this.doctor[x].id == this.$route.params.id){
        this.doctor = this.doctor[x];
        break;
      }
    }
  },
  mounted(){

    this.doctor.hoursAvailable.forEach(available => {
      this.dates.forEach(date => {
        if ((date.date == this.$route.params.date) && (date.hourId == available.id) && (date.doctorId == this.$route.params.id)){
          this.invalidDate.push(this.doctor.hoursAvailable.indexOf(available));
        }
      })
    });

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