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
import {DoctorsApiService} from "../../learning/services/doctors-api.service";
import {PatientsApiService} from "../../learning/services/patients-api.service";
import {DatesApiService} from "../../learning/services/dates-api.service";

export default {
  data(){
    return{
      doctors: [],
      doctorService: null,
      doctor: {},
      dates: [],
      datesService: null,
      date: {},
      patients: [],
      patientsService: null,
      patient: {},


      datesOfDoctor: [],
      patientsOfDoctor: [],
      hoursOfDoctor: []
    }
  },
  created() {
    /* OBTENER DOCTOR LOGEADO */
    this.doctorService = new DoctorsApiService();
    this.doctorService.getAll().then((response) => {
      this.doctors = response.data;
      for (let x in this.doctors){
        if (this.doctors[x].id.toString() == sessionStorage.getItem("UserId")){
          this.doctor = this.doctors[x];
          break;
        }
      }
    });

    /* OBTENER LISTA DE PACIENTES QUE REALIZARON ALGUNA VEZ UNA CITA CON EL DOCTOR LOGEADO */
    this.datesService = new DatesApiService();
    this.datesService.getAll().then((response) => {
      this.dates = response.data;
      for (let x in this.dates){
        if (this.dates[x].doctorId.toString() == sessionStorage.getItem("UserId")){
          this.datesOfDoctor.push(this.dates[x])
        }
      }
    });

    /* OBTENIENDO LA HORA DE LA CITA */
    for (let x in this.datesOfDoctor){
      for (let y in this.doctor.hoursAvailable){
        if ((this.datesOfDoctor[x].hourId == this.doctor.hoursAvailable[y].id))
          /* ESTO DEBE CAMBIARSE CON UN EDIT EN EL BACKEND*/
          Object.defineProperty(this.datesOfDoctor[x], 'hour', {
            value: this.doctor.hoursAvailable[y].hours,
            writable: false
          });
      }
    }

    /* CREANDO ARREGLO CON TODA LA INFO QUE SE NECESITA DE CADA CITA */
    this.patientsService = new PatientsApiService();
    this.patientsService.getAll().then((response) => {
      this.patients = response.data;
      for (let x in this.patients){
        for (let y in this.datesOfDoctor){
          if (this.patients[x].id == this.datesOfDoctor[y].idPatient){
            this.patientsOfDoctor.push({
              name: this.patients[x].firstName,
              photo: this.patients[x].photo,
              date: this.datesOfDoctor[y].cDate,
              hour: this.datesOfDoctor[y].hour,
            })
          }
        }
      }
    });

  }
}
</script>
<style scoped>
.backButton{
  display:flex;
  align-items: center;
}
</style>