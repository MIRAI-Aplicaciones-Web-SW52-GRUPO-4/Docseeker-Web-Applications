<template>
    <div class="backButton">
        <MenuBarDoctor></MenuBarDoctor>
        <router-link to="/dashboardDoctor"><i class="pi pi-angle-left" style="font-size: 200%"></i></router-link>
        <h1>Your Patients</h1>
    </div>
    <h3>Here, you can see all your patients to make them a new prescription</h3>
    <PatientPrescription v-for="patient in patientsOfDoctor" :patient="patient" ></PatientPrescription>

</template>
<script setup>
    import MenuBarDoctor from "../../components/MenuBarDoctor.vue"
    import PatientPrescription from "../../components/PatientPrescription.vue"
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
          patientsId: [],
          patientsOfDoctor: []

        }
    },
    created() {
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
          if ((this.dates[x].doctorId.toString() == sessionStorage.getItem("UserId")) && (this.patientsId.indexOf(this.dates[x].idPatient) === -1)){
            this.patientsId.push(this.dates[x].idPatient)
          }
        }
      });

      this.patientsService = new PatientsApiService();
      this.patientsService.getAll().then((response) => {
        this.patients = response.data;
        for (let x in this.patients){
          for (let y in this.patientsId){
            if (this.patients[x].id == this.patientsId[y]){
              this.patientsOfDoctor.push(this.patients[x])
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