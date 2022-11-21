<template>
  <div class="backButton">
    <MenuBarDoctor></MenuBarDoctor>
    <router-link to="/addPrescription"><i class="pi pi-angle-left" style="font-size: 200%"></i></router-link>
    <h1>New prescription for {{patient.firstName + " " + patient.lastName}}</h1>
  </div>
  <h3>Register a new prescription for {{patient.firstName}}.</h3>
  <div class="prescription">
    <div class="containerInfo">
      <img :src="patient.photo" alt="patient image" class="patientImg">
      <div class="info">
        <h3>Name: {{patient.firstName}}</h3>
        <h3>Genre: {{patient.genre}}</h3>
      </div>
    </div>
    <div class="inputs">
      <div class="input">
        <label for="calendarr">Date Issue</label>
        <pv-calendar v-model="dateIssue" dateFormat="dd.mm.yy" id="calendarr" placeholder="Day/Month/Year" />
      </div>
      <div class="input">
        <label for="calendarr">Date Expiration</label>
        <pv-calendar v-model="dateExpiration" dateFormat="dd.mm.yy" id="calendarr" placeholder="Day/Month/Year" />
      </div>
      <div class="input">
        <label for="calendarr">Recip Code</label>
        <pv-inputNumber v-model="recipCode"></pv-inputNumber>
      </div>
      <div class="input textArea">
        <label for="calendarr">Rest routine</label>
        <pv-textArea v-model="restRoutine" class="textArea"/>
      </div>
      <div class="input textArea">
        <label for="calendarr">Drink routine</label>
        <pv-textArea v-model="drinkRoutine" class="textArea"/>
      </div>
      <div class="input textArea">
        <label for="calendarr">Meals routine</label>
        <pv-textArea v-model="mealsRoutine" class="textArea"/>
      </div>
      <div class="input">
        <label>Medicines (Separate with a ',')</label>
        <pv-inputText class="inputField" v-model="medicines" />
      </div>
      <div class="input">
        <label for="calendarr">Number of Dose</label>
        <pv-inputNumber v-model="numberDose"></pv-inputNumber>
      </div>
      <div class="input">
        <label>Meals indicator (Separate with a ',')</label>
        <pv-inputText class="inputField" v-model="mealsIndicator" />
      </div>
      <div class="input">
        <label>Hours of Dose (Separate with a ',')</label>
        <pv-inputText class="inputField" v-model="hoursDose" />
      </div>
    </div>
    <pv-button class="btn" label="Save" @click="newPrescription"></pv-button>

  </div>
</template>
<script setup>
import MenuBarDoctor from "../../components/MenuBarDoctor.vue"
import { ref } from "vue"
let dateIssue = ref("")
let dateExpiration = ref("")
let recipCode = ref("")
let restRoutine = ref("")
let drinkRoutine = ref("")
let mealsRoutine = ref("")
let medicines = ref("")
let numberDose = ref("")
let mealsIndicator = ref("")
let hoursDose = ref("")
</script>
<script>
import { useCounterStore } from "../../stores/counter";

export default {
  data(){
    return{
      patient: {},
      doctor: {},
      newMedicines: String,
      newMeals: String,
      newHours: String,
      userId: 0 /* ESTE DEBE SER EL ID DEL USUARIO LOGEADO */
    }
  },
  created() {
    for (let x in useCounterStore().patients){
      if (useCounterStore().patients[x].id == this.$route.params.id){
        this.patient = useCounterStore().patients[x];
        break;
      }
    }
    for (let x in useCounterStore().doctors){
      if (useCounterStore().doctors[x].id == this.userId){
        this.doctor = useCounterStore().doctors[x];
        break;
      }
    }
  },
  methods: {
    separatingArrays(){
      this.medicines=this.medicines.split(",")
      this.mealsIndicator=this.mealsIndicator.split(",")
      this.hoursDose=this.hoursDose.split(",")
      let arraymedicines = []
      this.medicines.forEach((element, index) => {
        arraymedicines.push(
            {
              id: index,
              medicine: element
            }
        )
      });
      this.medicines = arraymedicines

      if(this.medicines.length==1 && this.medicines[0].medicine===""){
        this.medicines=[]
      }
      if(this.mealsIndicator.length==1 && this.mealsIndicator[0]===""){
        this.mealsIndicator=[]
      }
      if(this.hoursDose.length==1 && this.hoursDose[0]===""){
        this.hoursDose=[]
      }
    },
    newPrescription(){
      this.separatingArrays();
      this.newMedicines = "";
      for(let i = 0; i< this.medicines.length; i++){
        this.newMedicines+=this.medicines[i] + ",";
      }
      this.newMeals = "";
      for(let i = 0; i< this.mealsIndicator.length; i++){
        this.newMeals+=this.mealsIndicator[i] + ",";
      }
      this.newHours = "";
      for(let i = 0; i< this.hoursDose.length; i++){
        this.newHours+=this.hoursDose[i] + ",";
      }
      useCounterStore().prescriptions.push(
          {
            id: useCounterStore().prescriptions.length,
            idPatient: this.patient.id,
            dateIssue: this.dateIssue.getDate() + "/" + (this.dateIssue.getMonth()+1) + "/" + this.dateIssue.getFullYear(),
            dateExpiration: this.dateExpiration.getDate() + "/" + (this.dateExpiration.getMonth()+1) + "/" + this.dateExpiration.getFullYear(),
            medicalSpeciality: this.doctor.area,
            recipCode: this.recipCode,
            condition: "Valid",
            rest: ` ${this.restRoutine}`,
            drink: ` ${this.drinkRoutine}`,
            food: ` ${this.mealsRoutine}`,
            medicines: this.newMedicines,
            numberDose: this.numberDose,
            meals: this.newMeals,
            hours: this.newHours
          }
      )
      this.$router.push({name: 'addPrescription'})
      console.log(useCounterStore().prescriptions)
    }
  }
}
</script>
<style scoped>
.backButton{
  display:flex;
  align-items: center;
}
.prescription{
  display: flex;
  flex-direction: column;
  align-items: center;
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
.inputs{
  width: 70%;
  margin: 0 auto;
  padding: 2rem;
  background-color: #CBDDE0;
  border: 1px solid #3CC1D7;
  border-radius: 15px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  /* flex-direction: column;
  justify-content: center; */
}
.input{
  display: flex;
  flex-direction: column;
}
.input label{
  font-weight: bolder;
}

.btn{
  margin: 1rem;
  background-color: #2980B9;
  width: 50%;
}
@media (max-width: 750px){
  .containerInfo{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .inputs{
    display: flex;
    flex-direction: column;
  }
}
.patientImg{
  width:150px;
  height:150px;
  border-radius: 20px;
  border-color: #0093AB;
}
</style>