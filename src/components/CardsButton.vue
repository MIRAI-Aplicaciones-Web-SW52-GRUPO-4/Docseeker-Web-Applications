<template>
  <div class="cards">
    <div class="card">
      <img class="appointment_option" src="../assets/images/calendar.png">
      <div class="spacer"></div>
      <div class="option_name">
        <a>Make an<br>Appointment</a>
      </div>
    </div>
    <div class="card">
      <img class="appointment_option" src="../assets/images/doctor.png">
      <div class="spacer"></div>
      <div class="option_name">
        <a>Doctors</a>
      </div>
    </div>
    <div class="card">
      <img class="appointment_option" src="../assets/images/medic.png">
      <div class="spacer"></div>
      <div class="option_name">
        <a>Medical<br>History</a>
      </div>
    </div>
    <div class="card">
      <img class="appointment_option" src="../assets/images/prescription.png">
      <div class="spacer"></div>
      <div class="option_name">
        <a>Prescription</a>
      </div>
    </div>
    <div class="card">
      <img class="appointment_option" src="../assets/images/consultancy.png">
      <div class="spacer"></div>
      <div class="option_name">
        <a>Consultancy</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardsButton"
}
</script>

<style scoped>

.cards {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  align-self: center;

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
}
.card:hover {
  background-color: #FF2831;
  cursor: pointer;

}

.card img {
  width: 70px;

}

.card .option_name a {
  font-family: Inter;
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

</style>