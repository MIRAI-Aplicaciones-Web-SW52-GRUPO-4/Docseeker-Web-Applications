<template>
  <div class="cards">
    <router-link to="/addPrescription">
      <div class="card">
        <img class="appointment_option" src="../assets/images/appointments.png">
        <div class="spacer"></div>
        <div class="option_name">
          <a>Add<br>prescription</a>
        </div>
      </div>
    </router-link>
    <!--
    <router-link to="/income">
      <div class="card">
        <img class="appointment_option" src="../assets/images/salary.png">
        <div class="spacer"></div>
        <div class="option_name">
          <a>Income</a>
        </div>
      </div>
    </router-link>
    -->
    <router-link to="/appointments">
      <div class="card">
        <img class="appointment_option" src="../assets/images/schedule.png">
        <div class="spacer"></div>
        <div class="option_name">
          <a>My<br>appointments</a>
        </div>
      </div>
    </router-link>
    <router-link to="/medicalHistory">
      <div class="card">
        <img class="appointment_option" src="../assets/images/medical-history.png">
        <div class="spacer"></div>
        <div class="option_name">
          <a>Medical<br>History</a>
        </div>
      </div>
    </router-link>

  </div>
</template>



<style scoped>

.cards {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  align-self: center;
  justify-content: space-evenly;

}

.card{
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  text-align: center;
  background-color: #0093AB;
  width: 100px;
  border-radius: 10px;
  border: 2px solid #222222;
  user-select: none;
  padding: 10px;
  height: 140px;
  margin: 0 auto;
  transition: 0.4s;

}
.card:hover {
  background-color: #FD5D5D;
  cursor: pointer;
}

.card img {
  width: 70px;
}

.card .option_name a {
  color: white;
  display: table-cell;
  vertical-align: middle;

}

.spacer{
  height: 10px;
}
.option_name {
  display: table;
  height: 30px;
}

@media (max-width: 750px) {
  .cards{
    flex-wrap: wrap;
    gap: 2rem;
  }
}
</style>