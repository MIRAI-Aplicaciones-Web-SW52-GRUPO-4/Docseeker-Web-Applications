<template>
  <main>
    <pv-card class="card_log_in">
      <template #title>
        Log In
      </template>

      <template #content >
        <h3>User</h3>
        <div class="inputContainer">
          <label for="dni">DNI Number / CE</label><br>
          <pv-inputText id="dni" type="number" placeholder="DNI/CE" class="inputBox"/>
        </div>
        <br>
        <h3>Password</h3>
        <div class="inputContainer">
          <label for="password1">Password</label><br>
          <pv-inputText id="password1" type="password" placeholder="Password" class="inputBox"/>
        </div>
        <div class="lastPart">
          <br>
          <router-link to="/dashBoardDoctor"><pv-button class="buttonLogIn" label="Log In" /></router-link><br>
          <router-link to="/changePassword" class="link">I forgot my password</router-link><br>
          <router-link to="/register" class="link">You do not have an account? \ Sign up</router-link>
        </div>
      </template>
    </pv-card>
  </main>
</template>

<script>

export default {
  name: "log-in-card.component"
}
</script>


<style scoped>

h3{
  text-align: center;
}

.card_log_in{
  width: 500px;
  margin-top: 50px;
  margin-right: 50px;
  float: right;
}
.inputContainer{
  width: 100%;
  margin-left: 10px;
  margin-right: 20px;
}

.buttonLogIn{
  text-align: center;
  background-color: #0093AB;
}
.inputBox{
  width:95%;
  border-color: #0093AB;
}

.lastPart{
  text-align: center;
  align-content: center;
  align-items: center;
  margin:25px;
}

.link{
  color: #2cb0b0;
}

</style>