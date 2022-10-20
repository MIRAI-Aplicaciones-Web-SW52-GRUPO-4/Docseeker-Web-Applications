<template>
  <main>
    <h2>New User Registration</h2>
    <h3>Personal Information</h3>
    <div class="personalInformation">
      <div class="inputContainers">
        <div class="inputContainer">
          <label for="dni">DNI Number / CE</label>
          <pv-inputText id="dni" type="number"/>
        </div>
        <div class="inputContainer">
          <label for="name">Full Name</label>
          <pv-inputText id="name" type="text" />
        </div>
      </div>
      <div class="inputContainers">
        <div class="inputContainer">
          <label for="paternal-name">Paternal Name</label>
          <pv-inputText id="paternal-name" type="text" />
        </div>
        <div class="inputContainer">
          <label for="maternal-name">Maternal Name</label>
          <pv-inputText id="maternal-name" type="text" />
        </div>
      </div>
      <div class="inputContainers">
        <div class="inputContainer">
          <label for="genre">Genre</label>
          <pv-dropdown v-model="selectedGenre" :options="genres" optionLabel="name" id="genre" placeholder="Select a Genre" />
        </div>
        <div class="inputContainer">
          <label for="calendar">Birthday</label>
          <pv-calendar v-model="value" dateFormat="dd.mm.yy" id="calendar" placeholder="Day/Month/Year"/>
        </div>
      </div>
    </div>

    <div class="contact">
      <h3>Contact</h3>
      <div class="inputContainer fullSize">
        <label for="email">Email</label>
        <pv-inputText id="email" type="email"/>
      </div>
      <div class="inputContainers">
        <div class="inputContainer">
          <label for="cellphone1">Cellphone 1</label>
          <pv-inputText id="cellphone1" type="number" />
        </div>
        <div class="inputContainer">
          <label for="cellphone2">Cellphone 2</label>
          <pv-inputText id="cellphone2" type="number" />
        </div>
      </div>
    </div>

    <div class="password">
      <h3>Password</h3>
      <div class="inputContainers">
        <div class="inputContainer">
          <label for="password1">Password</label>
          <pv-inputText id="password1" type="password" placeholder="Password"/>
        </div>
        <div class="inputContainer">
          <label for="password2">Repeat Password</label>
          <pv-inputText id="password2" type="password" placeholder="Repeat Password"/>
        </div>
      </div>
    </div>
    <div class="buttonContainer">
      <router-link to="/logIn"> <pv-button label="Register" class="p-button-lg"></pv-button> </router-link>
    </div>


  </main>
</template>
<script>

export default {

  data() {
    return {
      selectedGenre: null,
      genres: [
        {name: 'Male', code: 'M'},
        {name: 'Female', code: 'F'}
      ],
      value: null
    }
  }

}
</script>

<style scoped>

h3{
  text-align: center;
  color: gray;
}
.inputContainer{
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 1rem;
}
.inputContainers{
  display: flex;
  justify-content: space-between;
}
.p-inputtext{
  border-color: #2980B9;
}
.p-dropdown	{
  border-color: #2980B9;
}
.p-button{
  background-color: #0093AB;
}
.buttonContainer{
  display: flex;
  justify-content: center;
  align-items: center;
}
.fullSize{
  width: 100%;
}

</style>