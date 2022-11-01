<template>
  <header>
    <div class="backButton">
      <MenuBar></MenuBar>
      <router-link to="/searchDoctor"><i class="pi pi-angle-left" style="font-size: 200%"></i></router-link>
      <h1>Professional Profile</h1>
    </div>
    <router-link :to="{name: 'appointmentCalendar', params: {id: $route.params.id}}"><pv-button class="buttonSchedule" label="Schedule an appointment"></pv-button></router-link>
  </header>
  <main class="container">
    <div class="doctorProfile">
      <img class="doctorImg" :src="doctor.photo" alt="profile image"/>
      <div class="doctorInfo">
        <div class="doctorPrincipal">
          <h1>{{doctor.name}}</h1>
          <h2>{{doctor.area}}</h2>
        </div>
        <div class="doctorStats">
          <div class="doctorStat">
            <i class="pi pi-user-plus"></i>
            <div class="statInfo">
              <h2>Patients</h2>
              <h2>{{doctor.patients}}</h2>
            </div>
          </div>
          <div class="doctorStat">
            <i class="pi pi-clock"></i>
            <div class="statInfo">
              <h2>Years of experience</h2>
              <h2>{{doctor.years}}</h2>
            </div>
          </div>
          <div class="doctorStat">
            <i class="pi pi-briefcase"></i>
            <div class="statInfo">
              <h2>Age</h2>
              <h2>{{doctor.age}}</h2>
            </div>
          </div>
          <div class="doctorStat">
            <i class="pi pi-dollar"></i>
            <div class="statInfo">
              <h2>Cost per consult</h2>
              <h2>{{doctor.cost}}</h2>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="doctorEducation">
      <h2 class="title">Education</h2>
      <h2 class="education" v-for="edu in doctor.education">{{edu.name}}</h2>
    </div>

    <router-link :to="{name: 'doctorReviews', params: {id: $route.params.id}}"><pv-button class="buttonSchedule p-button-lg" label="See Review"></pv-button></router-link>

  </main>
</template>
<script setup>
import MenuBar from "../../components/MenuBar.vue";
</script>

<script>
import {DoctorsApiService} from "../../learning/services/doctors-api.service";

export default  {
  name: "Doctor",
  data(){
    return {
      imgUrl: null,
      doctors: [],
      doctorsService: null,
      doctor: {}
    }
  },
  created(){
    this.doctorsService = new DoctorsApiService();
    this.doctorsService.getAll().then((response) => {
      this.doctors = response.data;

      this.doctors.forEach((doc) =>
          this.getDisplayableTutorial(doc)
      );
      for (let x in this.doctors){
        if (this.doctors[x].id == this.$route.params.id){
          this.doctor = this.doctors[x];
          break;
        }
      }
    });

  },
  methods: {
    getDisplayableTutorial(doc) {
      return doc;
    }
  }
}

</script>


<style scoped>
.backButton{
  display:flex;
  align-items: center;
}
.buttonSchedule{
  text-align: center;
  background-color: #0093AB;
}
header{
  display:flex;
  justify-content: space-between;
  gap: 4rem;
}
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.doctorProfile{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border-radius: 20px;
  padding: 1rem;
  border: solid 1px black;
  margin: 2rem auto;
  width: 50vw;
}
.doctorImg{
  border-radius: 15px;
  border-color: #0093AB;
  height: 300px;
  width: 300px;
}
.doctorInfo{
  display: flex;
  flex-direction: column;
}
.doctorPrincipal h2{
  color: gray;
}
.doctorStats{
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin-top: 2rem
}
.doctorStat{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
}
i{
  font-size: 50px;
}
.statInfo h2{
  font-weight: bolder;
}

.doctorEducation{
  margin: 2rem auto;
  width: 50vw;
  border-radius: 0 0 20px 20px;
  border: solid 1px black;
}
.doctorEducation .title{
  padding: .5rem;
  font-weight: bolder;
  background-color: #0093AB;
  color: white;
}
.doctorEducation .education{
  font-weight: bolder;
  margin-left: 20px
}
@media (max-width: 750px) {
  .doctorProfile{
    flex-direction: column;
  }
}
</style>