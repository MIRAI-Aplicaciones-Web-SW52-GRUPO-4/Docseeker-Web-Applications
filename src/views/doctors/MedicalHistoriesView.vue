<template>
    <div class="backButton">
        <MenuBarDoctor></MenuBarDoctor>
        <router-link to="/dashboardDoctor"><i class="pi pi-angle-left" style="font-size: 200%"></i></router-link>
        <h1>Medical History of Patients</h1>
    </div>
    <h3>Here, you can see all the medical history of your patients</h3>
    <PatientButton v-for="patient in patientsOfDoctor" :patient="patient" ></PatientButton>

</template>
<script setup>
    import MenuBarDoctor from "../../components/MenuBarDoctor.vue"
    import PatientButton from "../../components/PatientButton.vue"
</script>
<script>
 import {useCounterStore} from "../../stores/counter"
    export default {
    data(){
        return{
            userId: 0, /* ESTO DEBE SER LA ID DEL USUARIO QUE ESTÉ LOGEADO */
            dates: useCounterStore().dates,
            patients: useCounterStore().patients,
            patientsId: [],
            patientsOfDoctor: []
        }
    },
    created() {

    /* OBTENER LISTA DE PACIENTES QUE REALIZARON ALGUNA VEZ UNA CITA CON EL DOCTOR LOGEADO */

        for (let x in this.dates){
            if ((this.dates[x].doctorId == this.userId) && (this.patientsId.indexOf(this.dates[x].idPatient) === -1)){
                this.patientsId.push(this.dates[x].idPatient)
            }
        }
        for (let x in this.patients){
            for (let y in this.patientsId){
                if (this.patients[x].id == this.patientsId[y]){
                    this.patientsOfDoctor.push(this.patients[x])
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