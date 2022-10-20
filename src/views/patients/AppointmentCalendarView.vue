<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import router from '../../router';

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridWeek',
        editable: true,
        weekends: true,
        dateClick: (arg) =>{
          console.log(arg.dateStr)
          router.push({name: 'appointmentHour', params: {id: this.$route.params.id, date: arg.dateStr}})


          console.log(arg)
        }
      }
    }
  }
}
</script>

<script setup>
import MenuBar from "../../components/MenuBar.vue"
</script>

<template>
  <div class="backButton">
    <MenuBar></MenuBar>
    <router-link :to="{name: 'doctor', params: {id: $route.params.id}}"><i class="pi pi-angle-left" style="font-size: 200%"></i></router-link>
    <h1>Available Dates</h1>
  </div>
  <FullCalendar :options="calendarOptions" />
</template>
<style scoped>
.backButton{
  display:flex;
  align-items: center;
}
</style>