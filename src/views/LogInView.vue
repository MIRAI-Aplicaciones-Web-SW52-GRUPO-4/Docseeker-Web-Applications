<script setup>
import LogInCard from '../components/LogInCard.vue'

</script>
<template>
  <div class="container">
    <pv-card-content class="welcomeImgCard ">
      <img src="../assets/images/doctorTakeCareOfAPatient.png"
           alt="doctor take care of a patient" class="images-Welcome">
      <h1>Patient</h1>
    </pv-card-content>
    <LogInCard/>
  </div>
</template>


<style scoped>
.container{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.welcomeImgCard{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
.images-Welcome{
  width: 700px;
}
</style>