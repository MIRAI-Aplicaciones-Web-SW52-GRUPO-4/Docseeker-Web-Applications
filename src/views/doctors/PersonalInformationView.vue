<template>
  <div class="backButton">
    <MenuBarDoctor></MenuBarDoctor>
    <router-link to="/myProfileDoctor"><i class="pi pi-angle-left" style="font-size: 200%"></i></router-link>
    <h1>Personal Information</h1>
  </div>

  <main class="personalInfoContainer">
    <div class="leftCol">
      <div class="imgContainer">
        <img :src="doctor.photo" alt="">
      </div>

      <pv-button class="saveButton p-button-lg">Save</pv-button>

    </div>

    <div class="rightCol">

      <div class="personalData">

        <div class="personalDataRow">
          <div class="field">
            <label for="names">Names</label>
            <pv-inputText class="inputField" type="username" placeholder="Ex. Miguel Aquiles"/>
          </div>

          <div class="field">
            <label for="lastNames">Last Names</label>
            <pv-inputText class="inputField" type="username" placeholder="Ex. Brinco Quispe"/>
          </div>
        </div>

        <div class="personalDataRow">
          <div class="field">
            <label for="mobilePhone">Area</label>
            <pv-inputText class="inputField" type="username" placeholder="Ej. Chiropodist"/>
          </div>

          <div class="field">
            <label for="email">Price</label>
            <pv-inputText class="inputField" type="email" placeholder="Ej. S/50.00"/>
          </div>
        </div>

        <div class="personalDataRow">
          <div class="field">
            <label for="dob">Date Of Birth</label>
            <pv-inputText class="inputField" type="username" placeholder="DD/MM/YYYY"/>
          </div>
          <div class="field">
            <label for="dob">Years experience</label>
            <pv-inputText class="inputField" type="username" placeholder="Ej. +7"/>
          </div>
        </div>

      </div>

      <div class="medicalSituation">
        <div class="field">
          <label>Description</label>
          <pv-textArea class="inputField textArea" type="text" v-model="value1" />
        </div>
      </div>

    </div>
  </main>
</template>

<script setup>

  import MenuBarDoctor from "../../components/MenuBarDoctor.vue";

</script>

<script>
    import { useCounterStore } from "../../stores/counter";
    import {DoctorsApiService} from "../../learning/services/doctors-api.service";

export default {
  data(){
    return{
      doctors: [],
      doctorService: null,
      doctor: {}
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
  }
}
</script>
<style scoped>
  .backButton{
    display:flex;
    align-items: center;
  }

  .personalInfoContainer {
    display: flex;
    justify-content: center;
    padding: 1% 0;
  }

  .leftCol {
    width: 40%;
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .imgContainer {
    width: 400px;
    border: 3px solid #2980B9;
    margin: 2% 0;
    border-radius: 5%;
    overflow: hidden;
  }

  .imgContainer img {
    width: 100%;
  }

  .saveButton {
    margin: 3% 0;
    background-color: #0093AB;
  }

  .rightCol {
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    width: 40%;
  }

  .personalData {
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .personalDataRow {
    display: flex;
    justify-content: space-between;
    width: 80%;
  }

  .inputField {
    border: 3px solid #2980B9;
    width: 100%;
  }

  .field {
    display: flex;
    flex-flow: column;
  }

  .medicalSituation {
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .medicalSituation .field {
    width: 80%;
  }

  @media (max-width: 750px) {
    .personalInfoContainer {
      display: flex;
      flex-flow: column-reverse;
      align-items: center;
      padding: 1% 0;
    }

    .personalDataRow {
      display: flex;
      flex-direction: column;
    }
  }

</style>