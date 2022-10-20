<template>
  <div class="backButton">
    <MenuBar></MenuBar>
    <router-link :to="{name: 'doctor', params: {id: $route.params.id}}"><i class="pi pi-angle-left" style="font-size: 200%"></i></router-link>
    <h1>Reviews</h1>
  </div>

  <div class="card doctorCard">
    <div class="profilePhotoContainer">
      <img :src="imgUrl" alt="doctor user image">
    </div>

    <div class="info">
      <h1 class="doctorName name">{{doctor.name}}</h1>
      <h2 class="speciality">{{doctor.area}}</h2>
    </div>

    <div class="averageScore">
      <i class="pi pi-star-fill starIcon" style="font-size: 4rem; color: orange;" ></i>
      <span style="font-size: 2.5rem">4/5</span>
    </div>
  </div>

  <section class="customerReviews">
    <h2>Customer Reviews</h2>

    <hr class="separatorLine">

    <div class="customerReviewCard" v-for="review in customerReviews" >
      <div class="card">
        <div class="profilePhotoContainer">
          <img :src="review.profilePhotoUrl">
        </div>

        <div class="info">
          <h1 class="customerName name">{{ review.customerName }}</h1>
          <p class="speciality">{{ review.customerReview }}</p>
        </div>

        <div class="averageScore">
          <i class="pi pi-star-fill starIcon" style="font-size: 4rem; color: orange;" ></i>
          <span style="font-size: 2.5rem">{{review.customerScore}}/5</span>
        </div>
      </div>
    </div>


    <div class="errorReview" v-show="!customerReviews.length">
      <i class="pi pi-exclamation-circle"></i>
      <p>This doctor does not have reviews yet</p>
    </div>
    <div class="buttonContainer">
      <router-link :to="{name: 'newReview', params: {id: $route.params.id}}">
        <pv-button class="btn" label="Publish Review"></pv-button>
      </router-link>
    </div>
  </section>

</template>

<script setup>

import MenuBar from "../../components/MenuBar.vue";


</script>

<script>
import { useCounterStore } from "../../stores/counter";

export default {
  data(){
    return{
      imgUrl: null,
      doctor: useCounterStore().doctors,
      reviews: useCounterStore().reviews,
      customerReviews: []
    }
  },
  created() {
    for (let x in this.doctor){
      if (this.doctor[x].id == this.$route.params.id){
        this.doctor = this.doctor[x];
        break;
      }
    }
    this.imgUrl = `../../src/assets/images/${this.doctor.name} image.jpg`
  },
  mounted() {
    this.reviews.forEach(review => {
      if (review.idDoctor == this.$route.params.id){
        this.customerReviews.push(review)
      }
    })
  }
}
</script>

<style scoped>
.backButton{
  display:flex;
  align-items: center;
}

.card {
  /*border: 3px solid red;*/
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 1% 0;
}
.buttonContainer{
  display: flex;
  justify-content: center;
  width: 100%;
}
.btn{
  background-color: #0093AB;
}
.errorReview{
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-size: 200%;
}
.errorReview i{
  font-size: 400%;
}
.doctorCard {
  border: 3px solid #717171;
  padding: .5% 0;
  border-radius: 15px;
}

.profilePhotoContainer {
  width: 20%;
  display: flex;
  border: 3px solid #2980B9;
  object-fit: cover;
  border-radius: 10px;
  overflow: hidden;
}

.profilePhotoContainer img {
  width: 100%;

}

.info {
  width: 40%;
}

.name {
  font-weight: bold;
}

.averageScore {
  /*border: 3px solid rebeccapurple;*/
  display: flex;
  align-items: center;
}

.averageScore .starIcon {
  margin-right: 20px;
}

.separatorLine {
  border: 1px solid #717171;
  background-color: #717171;
}
</style>