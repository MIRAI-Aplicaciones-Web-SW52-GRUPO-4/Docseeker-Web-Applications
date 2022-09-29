<template>
  <div class="doctor">
    <img src="../assets/images/joseimage.jpg" alt="doctor image" class="doctorImg">
    <div class="info">
      <h3 class="doctorName">{{ name }}</h3>
      <div class="infoContainer">
        <div class="aboutContainer">
          <h3 class="doctorArea">{{ area }}</h3>
          <h3 class="doctorDescription">{{ description }}</h3>
        </div>
        <router-link to="" class="seeContainer">
          <p>See profile</p>
          <i class="pi pi-angle-right"></i>
        </router-link>
      </div>
    </div>
  </div>

</template>

<script>
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