<!--<template>
  <h1>Change Of Password</h1>

  <div id="changePasswordForm">
    <div id="enterEmail">
      <h3>Enter your email: </h3>
      <div class="p-inputgroup" id="enterEmailInputContainer">
        <span id="inputTextIcon" class="p-inputgroup-addon inputTextBorder">
          <i class="pi pi-user"></i>
        </span>
        <pv-inputText id="email" class="inputTextBorder" placeholder="Email" v-model="email"></pv-inputText>
      </div>
    </div>

    <div id="enterPassword">
      <h3>Enter your password: </h3>
      <div class="p-inputgroup" id="enterPasswordInputContainer">
        <pv-inputText id="password" type="password" class="inputTextBorder" placeholder="Password" v-model="password"></pv-inputText>
      </div>
    </div>

    <div id="repeatPassword">
      <h3>Repeat your password: </h3>
      <div class="p-inputgroup" id="repeatPasswordInputContainer">
        <pv-inputText type="password" id="password" class="inputTextBorder" placeholder="Password"></pv-inputText>
      </div>
    </div>

    <div id="submitBtnContainer">
      <router-link to="logIn"><pv-button label="Submit" id="submitBtn" class="p-button-lg" @click="createUser()"/></router-link>
    </div>
  </div>
</template>

<script>
import {UsersApiService} from "../learning/services/users-api.services";

export default {
  name: "ChangePassword.vue",

  data() {
    return {
      UsersApi: new UsersApiService(),
      usersArraySize: 0,
      email: null,
      password: null
    }
  },
  methods: {
    getDataFromInputFields() {
      this.usersArraySize += 1;

      let newUser = {
        id: this.usersArraySize,
        DNI: "23710424",
        name: "Andre",
        paternalName: "Alzamora",
        maternalName: "Benavides",
        genre: "Male",
        birthday: "14/13/23",
        email: this.email,
        cellphone1: "995223112",
        cellphone2: "912364712",
        password: this.password
      }
      return JSON.stringify(newUser);
    },
    createUser() {
      let newUser = this.getDataFromInputFields();
      this.UsersApi.create(newUser);
    }
  }
}
</script>

<style scoped>

#changePasswordForm {
  /*border: 5px solid crimson;*/
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}

#enterEmail {
  /*border: 5px solid #2980B9;*/
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 2% 0;
}

#enterEmailInputContainer {
  /*border: 5px solid #ffed3d;*/
  width: 50%;
}

#enterPassword {
  /*border: 5px solid #2980B9;*/
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 2% 0;
}

#enterPasswordInputContainer {
  /*border: 5px solid #ffed3d;*/
  width: 50%;
}

#repeatPassword {
  /*border: 5px solid #2980B9;*/
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 2% 0;
}

#repeatPasswordInputContainer {
  /*border: 5px solid #ffed3d;*/
  width: 50%;
}

#submitBtnContainer {
  /*border: 5px solid #ffed3d;*/
  display: flex;
  justify-content: center;
}

#submitBtn {
  background-color: #0093AB;
}

.inputTextBorder {
  border: 3px solid #2980B9;
}

#inputTextIcon {
  border-right: none;
}
</style> -->