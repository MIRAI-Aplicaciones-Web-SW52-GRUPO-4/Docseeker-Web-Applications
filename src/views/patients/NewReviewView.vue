<template>
  <div class="backButton">
    <MenuBar></MenuBar>
    <router-link :to="{name: 'doctorReviews', params: {id: $route.params.id}}"><i class="pi pi-angle-left" style="font-size: 200%"></i></router-link>
    <h1>New Review</h1>
  </div>
<div class="newReviewContainer">
  <h1>{{doctor.area}}</h1>
  <hr class="separatorLine">
  <h2>Dr. {{doctor.name}}</h2>

  <div class="row">
    <h1>Stars</h1>
    <hr class="separatorLine">

    <div class="averageScore">
      <pv-inputNumber v-model="stars" mode="decimal" showButtons buttonLayout="vertical"
                      decrementButtonClass="p-button-danger" incrementButtonClass="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" :min="0" :max="5"/>
      <i class="pi pi-star-fill starIcon" style="font-size: 2rem; color: orange;" ></i>
    </div>
  </div>

  <div class="row">
    <h1>Description</h1>
    <hr class="separatorLine">
    <pv-textArea class="review-textbox" v-model="text"></pv-textArea>
  </div>

  <div class="button-row">
    <router-link :to="{name: 'doctorReviews', params: {id: $route.params.id}}"> <pv-button @click="newReview">Publish</pv-button> </router-link>
  </div>
</div>

</template>

<script setup>
import MenuBar from "../../components/MenuBar.vue";
import { ref } from "vue"
let stars = ref(0)
let text = ref("")
</script>

<script>
import {DoctorsApiService} from "../../learning/services/doctors-api.service";
import {ReviewsApiService} from "../../learning/services/reviews-api.service";
import {PatientsApiService} from "../../learning/services/patients-api.service";
import router from "../../router";

export default {
  data() {
    return {
      doctors: [],
      doctor: {},
      doctorService: null,
      review: {},
      reviews: [],
      reviewsService: null,
      patients: [],
      patient: {},
      patientsService: null,


      text: "",
      stars: 0
    }
  },
  created() {
    this.doctorsService = new DoctorsApiService();
    this.doctorsService.getAll().then((response) => {
      this.doctors = response.data;

      this.doctors.forEach((doc) =>
          this.getDisplayableTutorial(doc)
      );
      for (let x in this.doctors){
        if (this.doctors[x].id == this.$route.params.id){
          this.doctor = this.doctors[x];
          break;
        }
      }
    });

    this.patientsService = new PatientsApiService();
    this.patientsService.getAll().then((response) => {
      this.patients = response.data;
      for (let x in this.patients){
        console.log(sessionStorage.getItem("UserId"));
        console.log(this.patients[x].id)
        if(this.patients[x].id.toString() == sessionStorage.getItem("UserId")){
          this.patient = this.patients[x];
          break;
        }
      }
    });

    this.reviewsService = new ReviewsApiService();
    this.reviewsService.getAll().then((response) => {
      this.reviews = response.data;
    });
  },
  methods: {
    newReview(){
      this.review = {
        id: this.reviews.length,
        profilePhotoUrl: this.patient.photo,
        customerName: this.patient.name,
        customerReview: this.text,
        customerScore: this.stars,
        idUser: this.patient.id,
        idDoctor: this.doctor.id
      }

      this.reviewsService.create(JSON.stringify(this.review));

      //router.push('/doctorReviews');
    },
    getDisplayableTutorial(doc) {
      return doc;
    }
  }
}


/*import { useCounterStore } from "../../stores/counter";

export default {
  data(){
    return{
      doctor: useCounterStore().doctors,
      reviews: useCounterStore().reviews
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
    newReview(){
      console.log(this.reviews)
      this.reviews.push(
          {
            id: this.reviews.length,
            profilePhotoUrl: "../../src/assets/images/Alessandro Ramirez image.jpg",
            customerName: "Monica Sanchez",
            customerReview: this.text,
            customerScore: this.stars,
            idUser: 1,
            idDoctor: this.$route.params.id
          }
      )
      this.$router.push({name: 'doctorReviews', params: {id: this.doctor.id }})
      console.log(this.reviews)
    }
  }
}*/
</script>

<style scoped>
.backButton{
  display:flex;
  align-items: center;
}

.separatorLine {
  border: 1px solid #717171;
  background-color: #717171;
}

.row {
  /*border: 3px solid #2cb0b0;*/
  margin-top: 2%;
}

.averageScore {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem;
}
.score {
  /*border: 3px solid #2cb0b0;*/
  margin-left: 2%;
}

.review-textbox {
  width: 100%;
  margin: 1% 0;
}

.button-row {
  display: flex;
  justify-content: center;
  margin: 2% 0;
}

@media (max-width: 750px){
  .newReviewContainer{
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .averageScore{
    align-items: center;
    justify-content: center;
  }
}
</style>