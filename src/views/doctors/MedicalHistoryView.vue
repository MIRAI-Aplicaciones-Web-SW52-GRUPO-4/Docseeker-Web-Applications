<template>
    <div class="backButton">
        <MenuBarDoctor></MenuBarDoctor>
        <router-link to="/medicalHistory"><i class="pi pi-angle-left" style="font-size: 200%"></i></router-link>
        <h1>Medical History of {{patient.name}}</h1>
    </div>
    <h3>Check the historical data of {{patient.name}}.</h3>
    <div class="historial">
        <div class="containerInfo">
            <img :src="patient.photo" alt="patient image" class="patientImg">
            <div class="info">
                <h3>Name: {{patient.name}}</h3>
                <h3>Genre: {{patient.genre}}</h3>
            </div>
            <router-link :to="{name: 'createMedicalHistory', params:{id: this.$route.params.id}}"><i class="pi pi-plus"></i></router-link>
        </div>
        <div v-for="history in medicalHistory" class="history">
            <h3>{{history.date}}:</h3>
            <p>{{history.content}}</p>
        </div>
    </div>
</template>
<script setup>
    import MenuBarDoctor from "../../components/MenuBarDoctor.vue"
</script>
<script>
 import { useCounterStore } from "../../stores/counter";

export default {
    data(){
        return{
            patient: {},
            medicalHistory: null
        }
    },
    created() {
        for (let x in useCounterStore().patients){
            if (useCounterStore().patients[x].id == this.$route.params.id){
                this.patient = useCounterStore().patients[x];
                break;
            }
        }
        for (let x in useCounterStore().medicalHistory){
            if (useCounterStore().medicalHistory[x].idPatient == this.$route.params.id){
                this.medicalHistory = useCounterStore().medicalHistory[x].historial;
                break;
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
    .historial{
        width: 70%;
        margin: 1rem auto;
        padding: 2rem;
        background-color: #CBDDE0;
        border: 1px solid #3CC1D7;
        border-radius: 15px;
    }
    .containerInfo{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        margin-bottom: 1rem;
    }
    .info{
        display: flex;
        flex-direction: column;
    }
    .info h3{
        font-weight: bolder;
    }
    .history{
        padding: 1.5rem;
        border-radius: 15px;
        border: 1px solid #3CC1D7;
        background-color: white;
        margin: 1rem;
    }
    .history h3{
        font-weight: bolder;
    }
    @media (max-width: 750px){
      .containerInfo{
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
      }
    }
    .patientImg{
      width:150px;
      height:150px;
      border-radius: 20px;
      border-color: #0093AB;

    }
</style>