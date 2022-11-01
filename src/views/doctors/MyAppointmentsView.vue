<template>
  <div class="backButton">
    <MenuBarDoctor></MenuBarDoctor>
    <router-link to="/dashboardDoctor"><i class="pi pi-angle-left" style="font-size: 200%"></i></router-link>
    <h1>My appointments</h1>
  </div>
  <h3>Here, you can see all the appointments that have been booked</h3>
  <PatientAppointment v-for="patient in patientsOfDoctor" :name="patient.name" :date="patient.date" :hour="patient.hour" ></PatientAppointment>

</template>
<script setup>
import MenuBarDoctor from "../../components/MenuBarDoctor.vue"
import PatientAppointment from "../../components/PatientAppointment.vue"
</script>
<script>
import {useCounterStore} from "../../stores/counter"
export default {
  data(){
    return{
      userId: 0, /* ESTO DEBE SER LA ID DEL USUARIO QUE ESTÉ LOGEADO */
      doctor: {},
      dates: useCounterStore().dates,
      patients: useCounterStore().patients,
      datesOfDoctor: [],
      patientsOfDoctor: [],
      hoursOfDoctor: []
    }
  },
  created() {
    /* OBTENER DOCTOR LOGEADO */
    for (let x in useCounterStore().doctors){
      if (useCounterStore().doctors[x].id == this.userId){
        this.doctor = useCounterStore().doctors[x];
        break;
      }
    }
    /* OBTENER LISTA DE PACIENTES QUE REALIZARON ALGUNA VEZ UNA CITA CON EL DOCTOR LOGEADO */
    for (let x in this.dates){
      if ((this.dates[x].doctorId == this.userId)){
        this.datesOfDoctor.push(this.dates[x])
      }
    }

    /* OBTENIENDO LA HORA DE LA CITA */
    for (let x in this.datesOfDoctor){
      for (let y in this.doctor.hoursAvailable){
        if ((this.datesOfDoctor[x].hourId == this.doctor.hoursAvailable[y].id))
          Object.defineProperty(this.datesOfDoctor[x], 'hour', {
            value: this.doctor.hoursAvailable[y].hours,
            writable: false
          });
      }
    }
    /* CREANDO ARREGLO CON TODA LA INFO QUE SE NECESITA DE CADA CITA */
    for (let x in this.patients){
      for (let y in this.datesOfDoctor){
        if (this.patients[x].id == this.datesOfDoctor[y].idPatient){
          this.patientsOfDoctor.push({
            name: this.patients[x].name,
            photo: this.patients[x].photo,
            date: this.datesOfDoctor[y].date,
            hour: this.datesOfDoctor[y].hour,
          })
        }
      }
    }
  }
}
</script>
<style scoped>
.backButton{
  display:flex;
  align-items: center;
}
</style>