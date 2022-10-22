<template>
  <div class="doctor">
    <img :src="doctor.photo" alt="doctor image" class="doctorImg">
    <div class="info">
      <h3 class="doctorName">{{ doctor.name }}</h3>
      <div class="infoContainer">
        <div class="aboutContainer">
          <h3 class="doctorArea">{{ doctor.area }}</h3>
          <h3 class="doctorDescription">{{ doctor.description }}</h3>
        </div>
        <!-- <router-link :to="{ name: 'doctor', params: {doctor: JSON.stringify(doctor)}}" class="seeContainer"> -->
        <router-link :to="{ name: 'doctor', params: {id: doctor.id}}" class="seeContainer">
          <p>See profile</p>
          <i class="pi pi-angle-right"></i>
        </router-link>
      </div>
    </div>
  </div>

</template>

<script setup>
const img = `../src/assets/images/${props.name} image.jpg`
const props = defineProps({
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
  },
  photo: {
    type: String,
    default: "Photo"
  },
  doctor: Object
})


</script>
<script>
export default {
  name: "DoctorButton",
  data() {

  }

}
</script>

<style scoped>
.doctor{
  border:solid 1px black;
  border-color: #0093AB;
  border-radius: 20px;
  display:flex;
  flex-direction: row;
  gap:3rem;
  padding:2rem;
  margin: 2rem;
}
.doctorImg{
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
.doctorName{
  font-size:150%;
  font-weight:bolder;
}
.h3{
  color:blue;
}
</style>