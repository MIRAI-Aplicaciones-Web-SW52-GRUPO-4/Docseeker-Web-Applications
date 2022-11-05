<template>
  <div class="backButton">
    <MenuBarDoctor></MenuBarDoctor>
    <router-link to="/myProfileDoctor"><i class="pi pi-angle-left" style="font-size: 200%"></i></router-link>
    <h1>Reviews</h1>
  </div>

  <div class="card doctorCard">
    <div class="profilePhotoContainer">
      <img :src="doctor.photo">
    </div>

    <div class="info">
      <h1 class="doctorName name">Dr. {{doctor.name}}</h1>
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

    <div class="customerReviewCard" v-for="review in customerReviews">
      <div class="card">
        <div class="profilePhotoContainer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/2048px-Emblem-person-blue.svg.png">
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
      <p>You don't have any reviews yet</p>
    </div>
  </section>

</template>

<script setup>

  import MenuBarDoctor from "../../components/MenuBarDoctor.vue";

</script>

<script>
   import { useCounterStore } from "../../stores/counter";
   import {DoctorsApiService} from "../../learning/services/doctors-api.service";
   import {ReviewsApiService} from "../../learning/services/reviews-api.service";

export default {
  data(){
    return{
      doctors: [],
      doctorService: null,
      doctor: {},
      customerReviews:[],
      reviews: [],
      review: {},
      reviewsService: null

    }
  },
  created() {
    this.doctorService = new DoctorsApiService();
    this.doctorService.getAll().then((response) => {
      this.doctors = response.data;
      for (let x in this.doctors){
        if (this.doctors[x].id.toString() == sessionStorage.getItem("UserId")){
          this.doctor = this.doctors[x];
          break;
        }
      }
    });
    this.reviewsService = new ReviewsApiService();
    this.reviewsService.getAll().then((response) => {
      this.reviews = response.data;
      for (let x in this.reviews){
        if (this.reviews[x].idDoctor.toString() == sessionStorage.getItem("UserId")){
          this.customerReviews.push(this.reviews[x]);
          break;
        }
      }
    });
  }
}
</script>

<style scoped>
  .backButton{
    display:flex;
    align-items: center;
  }

  .card {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 1% 0;
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
  @media (max-width: 750px) {
    .card{
      flex-direction: column;
      margin: 2rem;
      gap: 1rem;
      padding: 2rem;
      border-bottom: 1px solid black;
    }
    .profilePhotoContainer{
      width: 40%;

    }
  }
</style>