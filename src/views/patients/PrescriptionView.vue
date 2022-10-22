<template>
  <div class="backButton">
    <MenuBar></MenuBar>
    <router-link to="/prescriptions"><i class="pi pi-angle-left" style="font-size: 200%"></i></router-link>
    <h1>Professional Profile</h1>
  </div>
  <div class="prescriptionInfo">
    <div class="container recomendations">
      <div class="recomendationDetails">
        <h2 class="title">Recomendations</h2>
        <p><span class="important">Rest</span>{{prescription.rest}}</p>
        <p><span class="important">Drink liquids</span>{{prescription.drink}}</p>
        <p><span class="important">Try comfort foods and drinks</span>{{prescription.food}}</p>
      </div>
      <img class="pillImg" src="../../assets/images/pill.png" alt="pill image">
    </div>
    <div class="tips">
      <div class="container tip medicine">
        <h2 class="title">Medicine</h2>
        <p v-for="medicine in prescription.medicines">{{medicine.medicine}}</p>
      </div>
      <div class="container tip dose">
        <h2 >Dose</h2>
        <p><span class="numberDose">{{prescription.numberDose}}</span> Reminders</p>
        <div class="times">
          <div class="meal">
            <p v-for="meal in prescription.meals">{{meal}}</p>
          </div>
          <div class="hour">
            <p v-for="hour in prescription.hours">{{hour}}</p>
          </div>
        </div>
      </div>
      <div class="container tip">
        <h2 class="title">Where to get it?</h2>
        <div class="places">
          <img class="placeImg" src="../../assets/images/inkafarmaLogo.png" alt="local 1">
          <img class="placeImg" src="../../assets/images/farmaciaUniversalLogo.png" alt="local 2">
          <img class="placeImg" src="../../assets/images/mifarmaLogo.png" alt="local 3">
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import MenuBar from "../../components/MenuBar.vue"
</script>
<script>
import {PrescriptionsApiService} from "../../learning/services/prescriptions-api.service";

export default {
  data(){
    return {
      prescription: {},
      prescriptions: [],
      prescriptionsService: null,
    }
  },
  created(){
    this.prescriptionsService = new PrescriptionsApiService();
    this.prescriptionsService.getAll().then((response) => {
      this.prescriptions = response.data;

      for (let x in this.prescriptions){
        if (this.prescriptions[x].id == this.$route.params.id){
          this.prescription = this.prescriptions[x];
          break;
        }
      }
    });
  }
}


/*import {useCounterStore} from "../../stores/counter"
export default {
  data(){
    return{
      prescription: useCounterStore().prescriptions
    }
  },
  created() {
    for (let x in this.prescription){
      console.log(this.prescription[x].id)
      console.log(this.$route.params.id, "siu")
      if (this.prescription[x].id == this.$route.params.id){
        console.log("hshs")
        this.prescription = this.prescription[x];
        console.log(this.prescription, "ya esta")
        break;
      }
    }
  }
}*/
</script>

<style scoped>
.backButton{
  display:flex;
  align-items: center;
}
.prescriptionInfo{
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  /* grid-template-rows: 1.8fr 1.5fr; */

  gap: 1rem;
}
.recomendations{
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 90%;
}
.tips{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 2rem;
  width: 90%;
}
.tip{
  height: 300px;
}
.container {
  padding: 1.5rem;
  background-color: #383A42;
  border-radius: 15px;
}
h2{
  font-weight: bolder;
}
h2, p{
  color: white;
}
.times{
  display: flex;
  justify-content: space-between;
}
.times p{
  font-weight: bolder;
}
.title{
  margin-bottom: 1.5rem;
}
.important{
  color: #667A8A;
  font-weight: bolder;
}
.numberDose{
  font-size: 80px;
}
.places{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
.pillImg{
  height: 300px;
  margin: 0 auto;
}
.placeImg{
  width: 250px;
  height: 50px;
  border-radius: 15px;
}
</style>