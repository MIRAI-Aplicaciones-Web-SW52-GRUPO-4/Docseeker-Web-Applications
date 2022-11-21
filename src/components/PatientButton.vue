<template>
  <router-link :to="{name: 'medicalHistoryPatient', params: {id: patient.id}}">
    <div class="patient">
      <img :src= "img" alt="patient image" class="patientImg">
      <div class="info">
        <h3 class="patientName">For {{ patient.firstName }}</h3>
      </div>
    </div>
  </router-link>
</template>

<script setup>
const img = `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/2048px-Emblem-person-blue.svg.png`
const props = defineProps({
  patient:{
    type: Object
  }
})


</script>

<!--  <script>
 export default {
   name: "DoctorButton",
   props:{
     name: {
       type: String,
       default: "Doctor's name"
     },
     area: {
       type: String,
       default: "Area"
     },
     description: {
       type: String,
       default: "Description"
     }
   }
 }
 </script> -->

<style scoped>
.patient{
  border:solid 1px black;
  border-color: #0093AB;
  border-radius: 20px;
  display:flex;
  flex-direction: row;
  gap:3rem;
  padding:2rem;
  margin: 2rem;
}
.patientImg{
  width:150px;
  height:150px;
  border-radius: 20px;
  border-color: #0093AB;

}
.info{
  display:flex;
  flex-direction:column;
  justify-content:center;
}
.infoContainer{
  display:flex;
  flex-direction: row;
  gap:4rem
}
.seeContainer{
  display:flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #0093AB;
  border-bottom: 1px solid #0093AB;
}
.patientName{
  font-size:150%;
  font-weight:bolder;
}
.h3{
  color:blue;
}
@media (max-width: 750px){
  .patient{
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
}
</style>