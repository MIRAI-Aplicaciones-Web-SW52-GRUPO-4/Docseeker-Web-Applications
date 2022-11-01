<template>
  <div class="backButton">
    <MenuBarDoctor></MenuBarDoctor>
    <h1 class="title">My Profile</h1>
  </div>
  <main class="userProfileContainer">
    <section class="userInformation">
      <div class="profilePhotoContainer">
        <img class="profilePhoto" :src="doctor.photo">
      </div>

      <div class="userData">
        <h1 class="title">{{doctor.name}}</h1>

        <div class="dataField">
          <h3 class="gray">{{doctor.area}}</h3>
          <div class="dataField">
            <i class="pi pi-users" style="font-size: 2rem"></i>
            <h3 class="gray">Patients: {{doctor.patients}}</h3>
          </div>
        </div>

        <div class="dataField">
          <div class="dataFieldV">
            <h3>Age</h3>
            <h3 class="gray">{{doctor.age}}</h3>
          </div>
          <div class="dataFieldV">
            <h3>Years exp.</h3>
            <h3 class="gray">+{{doctor.years}}</h3>
          </div>
          <div class="dataFieldV">
            <h3>S/ Price</h3>
            <h3 class="gray">S/{{doctor.cost}}</h3>
          </div>
          <router-link to="/personalInformationDoctor"><pv-button class="btn" label="Edit"></pv-button></router-link>
        </div>


      </div>
    </section>

    <section class="userCareer">
      <div class="infoBlock">
        <h2 class="gray">Description</h2>
        <div class="infoBlock-description">
          <p>{{doctor.description}}</p>
        </div>
      </div>
      <div class="infoBlock">
        <h2 class="gray"><i class="pi pi-star"></i>  Score: 4.7</h2>
        <div class="btnContainer">
          <router-link to="/yourReviews"><pv-button label="See" class="btn"></pv-button></router-link>
        </div>
      </div>
    </section>
  </main>

</template>

<script setup>
import MenuBarDoctor from "../../components/MenuBarDoctor.vue";

</script>

<script>
import { useCounterStore } from "../../stores/counter";

export default {
  data(){
    return{
      userId: 0, /* ID DEL USUARIO LOGEADO */
      doctor: {}
    }
  },
  created() {
    for (let x in useCounterStore().doctors){
      if (useCounterStore().doctors[x].id == this.userId){
        this.doctor = useCounterStore().doctors[x];
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

.userProfileContainer {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.userInformation {
  border: 3px solid #505050;
  display: grid;
  justify-content: center;
  grid-template-columns: .5fr .8fr;
  padding: 1% 0;
  margin: 0 0 1% 0;
  border-radius: 1rem;
  width: 60%;
}

.profilePhotoContainer {
  display: flex;
  justify-content: center;
  width: 100%;
}

.profilePhoto {
  width: 250px;
  height: 250px;
  min-width: 100px;
  min-height: 100px;
  border: 3px solid #2980B9;
  border-radius: 50%;
  overflow: hidden;
}

.userData {
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  margin: 2rem 4rem 2rem 2rem;
}

.dataField {
  display: flex;
  justify-content: space-between;
}

.dataField h3 {
  margin-left: 1rem;
}

.title{
  font-weight: bolder;
}
.btn{
  background-color: #0093AB;
  width: 100px;
}
.gray{
  color: gray;
}
h3{
  font-weight: bolder;
}
.userCareer{
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 60%;
}
.infoBlock{
  width: 50%;
  height: 300px;
  border: 3px solid #505050;
  border-radius: 15px;
  padding: 2rem;
}
.btnContainer{
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1180px) {
  .userInformation {
    display: flex;
    flex-flow: column;
  }

  .userInformation h1 {
    text-align: center;
  }

  .dataField {
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .userCareer {
    flex-flow: column;
    align-items: center;
  }

  .infoBlock {
    width: 100%;
  }

  .infoBlock-description {
    width: 100%;
  }

  .infoBlock-description p {
    font-size: 13px;
  }

  .btnContainer .btn {
    width: 100%;
  }
}
</style>