<template>

  <main class="welcomeContainer">
    <div class="colum w-full center-item" >
      <h1 style="text-align:center">How Would you like to log in </h1>
      <br>
      <div class="pictures">

        <div class="picture">
          <router-link to="/logIn" >
            <pv-card-content class="welcomeImgCard ">
              <img src="../assets/images/doctorTakeCareOfAPatient.png"
                   alt="doctor take care of a patient" class="images-Welcome">
              <h1 style="text-align:center">Patient </h1>
            </pv-card-content>
          </router-link>
        </div>

        <div class="picture">
          <router-link to="/logInDoctor">
            <pv-card-content class="welcomeImgCard">
              <img src="../assets/images/doctor.png" alt="doctor" class="images-Welcome">
              <h1 style="text-align:center">Doctor</h1>
            </pv-card-content>
          </router-link>
        </div>

      </div>
    </div>


  </main>

  <footer class="footer1" style="text-align:left">DocSeeker 2022| All right reserved</footer>
  <footer class="footer2" style="text-align:right">Terms and condition</footer>

</template>

<script>
export default {
  name: "Welcome.vue",
}
</script>

<style scoped>

.welcomeContainer {
  /*border: 5px solid lightseagreen;*/
  /*display: flex;*/
  /*justify-content: space-evenly;*/
  /*align-items: center;*/
  padding: 7% 0;
  align-content: center;
}

.images-Welcome{
  width: 30vw;
}

.welcomeImgCard {
  border-radius: 5%;
}

.pictures{
  display:flex;
  flex-direction: row;
  justify-content: center;
}

.picture{
  padding-left: 5vw;
  /*float:left;*/
  padding-right: 5vw;
  /*border: 1px solid black;*/
}

.footer1{
  padding-left: 5rem;
  float:left;
  padding-right: 5rem;
}

.footer2{
  padding-left: 5rem;
  float:right;
  padding-right: 5rem;
}

.colum{
  display:flex;
  flex-direction: column;
}

.w-full{
  width: 100%;
}

.center-item{
  justify-content: center;
}

@media (max-width: 1000px) {
  .pictures{
    /*border: 1px solid red;*/
    display: block;
  }
  .picture{
    text-align: center;
  }
}

</style>