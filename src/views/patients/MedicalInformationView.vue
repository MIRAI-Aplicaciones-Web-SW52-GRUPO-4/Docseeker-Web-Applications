<template>
  <div class="containerTitle">
    <MenuBar></MenuBar>
    <h1 class="title">Medical Information</h1>
  </div>
  <div class="historyContainer">
    <div class="userInfo">
      <img class="userImage" :src="this.patient.photo" alt="user image">
      <h1 class="name">{{this.patient.name}}</h1>
    </div>
    <div v-if="( this.medicalHistory != null)">
      <div class="generalInformation">
        <h2>General Information</h2>
        <div class="informations">
          <div class="information">
            <img class="informationImage" src="../../assets/images/height.png" alt="height image">
            <h3>Height: {{medicalHistory.height}} m</h3>
          </div>
          <div class="information">
            <img class="informationImage" src="../../assets/images/weight.png" alt="weight image">
            <h3>Weight: {{medicalHistory.weight}} Kg</h3>
          </div>
          <div class="information">
            <img class="informationImage" src="../../assets/images/body.png" alt="body mass">
            <h3>Body mass: {{medicalHistory.bodyMass}} IMC</h3>
          </div>
        </div>
      </div>
      <div class="allergies">
        <h2>Allergies</h2>
        <ul>
          <li v-for="allergy in medicalHistory.allergies"><h3>{{allergy.allergie}}</h3></li>
        </ul>
      </div>
      <div class="errorAllergie" v-show="!medicalHistory.allergies.length">
        <i class="pi pi-check"></i>
        <p>You don't have any allergy</p>
      </div>
      <div class="pathological">
        <h2>Pathological History</h2>
        <ul>
          <li v-for="pathological in medicalHistory.pathologicals"><h3>{{pathological.pathological}}</h3></li>
        </ul>
      </div>
      <div class="errorAllergie" v-show="!medicalHistory.pathologicals.length">
        <i class="pi pi-check"></i>
        <p>You don't have any pathological</p>
      </div>
    </div>
    <div class="buttonContainer" v-else>
      <router-link to="/editMedicalInformation" class="buttonContainer"><pv-button class="btn" label="Upload Medical information"></pv-button></router-link>
    </div>
  </div>
</template>
<script setup>
import MenuBar from "../../components/MenuBar.vue"
</script>
<script>
import {PatientsApiService} from "../../learning/services/patients-api.service";
import {MedicalApiService} from "../../learning/services/medical-api.service";

export default {
  data(){
    return {
      patient: {},
      patientsService: null,
      medicalHistories: [],
      medicalHistory: {},
      medicalHistoriesService: null
    }
  },
  created(){
    this.patientsService = new PatientsApiService();
    this.patientsService.getAll().then((response) => {
      this.patients = response.data;
      for (let x in this.patients){
        if(this.patients[x].id.toString() == sessionStorage.getItem("UserId")){
          this.patient = this.patients[x];
          break;
        }
      }
    });

    this.medicalHistoriesService = new MedicalApiService();
    this.medicalHistoriesService.getAll().then((response) => {
      this.medicalHistories = response.data;
      for(let x in this.medicalHistories) {
        if(this.medicalHistories[x].idPatient.toString() == sessionStorage.getItem("UserId")){
          this.medicalHistory = this.medicalHistories[x];
          break;
        } else{
          this.medicalHistory = null;
        }
      }
    });
  }
}

</script>
<style scoped>
.errorAllergie{
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-size: 200%;
}
.errorAllergie i{
  font-size: 200%;
  color: green;
}
.buttonContainer{
  display: flex;
  justify-content: center;
  width: 100%;
}
.btn{
  background-color: #0093AB;
  width: 40%;
  height: 100px;
}
.containerTitle{
  display: flex;
}
.title{
  font-weight: bolder;
}
.userImage{
  width: 150px;
  border-radius: 50%;
  border: 3px solid #0093AB;
}
.userInfo{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 56%;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 10px;
}
.generalInformation{
  margin: 2rem auto;
  width: 50vw;
  border-radius: 0 0 20px 20px;
  border: solid 1px black;
}
.generalInformation h2{
  padding: .5rem;
  font-weight: bolder;
  background-color: #0093AB;
  color: white;
}
.informations{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
}
.information{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.information h3{
  font-weight: bolder;
}
.informationImage{
  width: 100px;
}
.allergies, .pathological{
  width: 56%;
  margin: 2rem auto;
}
.allergies h2, .pathological h2{
  font-weight: bolder;
  border-bottom: 1px solid black;
}
ul{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.allergies li{
  color: #DCB041;
}
.allergies h3, .pathological h3{
  font-weight: bolder;
}
.pathological li{
  color: #FD5D5D;
}

</style>