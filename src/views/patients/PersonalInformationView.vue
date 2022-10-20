<template>
  <div class="backButton">
    <MenuBar></MenuBar>
    <router-link to="/myProfile"><i class="pi pi-angle-left" style="font-size: 200%"></i></router-link>
    <h1>Personal Information</h1>
  </div>

  <main class="personalInfoContainer">
    <div class="leftCol">
      <div class="imgContainer">
        <img :src="profilePhotoURL" alt="">
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
            <label for="mobilePhone">N° mobile phone</label>
            <pv-inputText class="inputField" type="username" placeholder="Ej. 976 123 345"/>
          </div>

          <div class="field">
            <label for="email">Email</label>
            <pv-inputText class="inputField" type="email" placeholder="Ej. aes@gmail.com"/>
          </div>
        </div>

        <div class="personalDataRow">
          <div class="field">
            <label for="dob">Date Of Birth</label>
            <pv-inputText class="inputField" type="username" placeholder="DD/MM/YYYY"/>
          </div>
        </div>

      </div>

  <!--     <div class="medicalSituation">
        <div class="field">
          <label>Medical Situation</label>
          <pv-textArea class="inputField textArea" type="text" v-model="value1" />
        </div>
      </div> -->

    </div>
  </main>
</template>

<script setup>

  import MenuBar from "../../components/MenuBar.vue";

  const profilePhotoURL = "src/assets/images/User profile photo.jpg";

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

</style>