<template>
  <div class="backButton">
    <MenuBar></MenuBar>
    <router-link :to="{name: 'appointmentHour', params: {id: $route.params.id, date: $route.params.date}}"><i class="pi pi-angle-left" style="font-size: 200%"></i></router-link>
    <h1>Make the payment</h1>
  </div>
  <div>
    <h2 class="gray">Your payment details</h2>
    <div class="paymentContainer">
      <div class="cardInfo">
        <div class="inputInfo">
          <label for="name">Cardholder</label>
          <pv-inputText id="name" placeholder="Ex. Rodolfo Berra"></pv-inputText>
        </div>
        <div class="inputInfo">
          <label class="gray" for="number">Card number</label>
          <pv-inputText id="number" placeholder="XXXX XXXX XXXX XXXX"></pv-inputText>
        </div>
        <div class="securityInfo">
          <div class="inputInfo">
            <label class="gray" for="date">Expiration date</label>
            <pv-inputText id="date" placeholder="MM/YYYY"></pv-inputText>
          </div>
          <div class="inputInfo">
            <label class="gray" for="cvv">CVV</label>
            <pv-inputText id="cvv" placeholder="Ej. 123"></pv-inputText>
          </div>
        </div>
        <p class="gray">Total amount</p>
        <h3 class="price">S/ {{doctor.cost}} PEN</h3>
      </div>
      <div class="payment">
        <img src="../../assets/images/cardsLogo.png" alt="visa logo">
        <pv-button class="btn" label="Confirm" @click="newDate"></pv-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import MenuBar from "../../components/MenuBar.vue"
</script>
<script>
import { useCounterStore } from "../../stores/counter";

export default {
  data(){
    return{
      doctor: useCounterStore().doctors,
      dates: useCounterStore().dates
    }
  },
  created() {
    for (let x in this.doctor){
      if (this.doctor[x].id == this.$route.params.id){
        this.doctor = this.doctor[x];
        break;
      }
    }
  },
  methods: {
    newDate(){
      console.log(this.dates)
      this.dates.push(
          {
            id: this.dates.length,
            date: this.$route.params.date,
            hourId: Number(this.$route.params.hourId),
            doctorId: this.doctor.id
          }
      )
      this.$router.push({name: 'doctor', params: {id: this.doctor.id }})
      console.log(this.dates)

    }
  }
}
</script>
<style scoped>
.backButton{
  display:flex;
  align-items: center;
}
.gray{
  color: gray;
}
.price{
  font-weight: bolder;
}
.btn{
  background-color: #0093AB;
  color: white;
  width: 20%;
}
.paymentContainer{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-top: 1rem;
}
.cardInfo, .payment{
  width: 100%;
  display: flex;
  flex-direction: column;
}
.payment{
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
p{
  margin-top: 2rem;
}
.inputInfo{
  display: flex;
  flex-direction: column;
}
img{
  height: 400px;
}
@media (max-width: 750px) {
  .paymentContainer{
    flex-direction: column;
  }
  .payment{
    flex-direction: row;
  }
  img{
    height: 200px;
  }
}
</style>