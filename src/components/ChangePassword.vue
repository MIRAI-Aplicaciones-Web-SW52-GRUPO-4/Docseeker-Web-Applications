<template>
  <h1>Change Of Password</h1>

  <div id="changePasswordForm">
    <div id="enterEmail">
      <h3>Enter your email: </h3>
      <div class="p-inputgroup" id="enterEmailInputContainer">
        <span id="inputTextIcon" class="p-inputgroup-addon inputTextBorder">
          <i class="pi pi-user"></i>
        </span>
        <pv-inputText id="email" class="inputTextBorder" placeholder="Email"></pv-inputText>
      </div>
    </div>

    <div id="enterPassword">
      <h3>Enter your password: </h3>
      <div class="p-inputgroup" id="enterPasswordInputContainer">
        <pv-inputText id="password" class="inputTextBorder" placeholder="Password"></pv-inputText>
      </div>
    </div>

    <div id="repeatPassword">
      <h3>Repeat your password: </h3>
      <div class="p-inputgroup" id="repeatPasswordInputContainer">
        <pv-inputText id="password" class="inputTextBorder" placeholder="Password"></pv-inputText>
      </div>
    </div>

    <div id="submitBtnContainer">
      <pv-button label="Submit" id="submitBtn" class="p-button-lg"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangePassword.vue"
}
</script>

<style scoped>

</style>