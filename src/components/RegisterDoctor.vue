<template>
  <main>
    <h2>New User Registration</h2>
    <h3>Personal Information</h3>
    <div class="personalInformation">
      <div class="inputContainers">
        <div class="inputContainer">
          <label for="dni">DNI Number / CE</label>
          <pv-inputText id="dni" type="number" v-model="dni"/>
        </div>
        <div class="inputContainer">
          <label for="name">Name</label>
          <pv-inputText id="name" type="text" v-model="name"/>
        </div>
      </div>
      <div class="inputContainers">
        <div class="inputContainer">
          <label for="paternal-name">Paternal Name</label>
          <pv-inputText id="paternal-name" type="text" v-model="paternal"/>
        </div>
        <div class="inputContainer">
          <label for="maternal-name">Maternal Name</label>
          <pv-inputText id="maternal-name" type="text" v-model="maternal"/>
        </div>
      </div>
      <div class="inputContainers">
        <div class="inputContainer">
          <label for="genre">Genre</label>
          <pv-dropdown v-model="selectedGenre" :options="genres" optionLabel="name" id="genre" placeholder="Select a Genre" />
        </div>
        <div class="inputContainer">
          <label for="calendar">Birthday</label>
          <pv-calendar v-model="birthday" dateFormat="dd.mm.yy" id="calendar" placeholder="Day/Month/Year"/>
        </div>
      </div>
    </div>

    <div class="contact">
      <h3>Contact</h3>
      <div class="inputContainer fullSize">
        <label for="email">Email</label>
        <pv-inputText id="email" type="email" v-model="email"/>
      </div>
      <div class="inputContainers">
        <div class="inputContainer">
          <label for="cellphone1">Cellphone 1</label>
          <pv-inputText id="cellphone1" type="number" v-model="cell1"/>
        </div>
        <div class="inputContainer">
          <label for="cellphone2">Cellphone 2</label>
          <pv-inputText id="cellphone2" type="number" v-model="cell2"/>
        </div>
      </div>
    </div>

    <div class="password">
      <h3>Password</h3>
      <div class="inputContainers">
        <div class="inputContainer">
          <label for="password1">Password</label>
          <pv-inputText id="password1" type="password" v-model="password" placeholder="Password"/>
        </div>
        <div class="inputContainer">
          <label for="password2">Repeat Password</label>
          <pv-inputText id="password2" type="password" v-model="repassword" placeholder="Repeat Password"/>
        </div>
      </div>
    </div>

    <div class="profesionalInformation">
      <h3>Profesional Information</h3>
      <div class="inputContainers">
        <div class="inputContainer">
          <label for="area">Speciality Area</label>
          <pv-inputText id="area" type="text" v-model="area" placeholder="Profesional Area"/>
        </div>
        <div class="inputContainer">
          <label for="description">Description</label>
          <pv-textArea id="description" v-model="description" type="text"/>
        </div>
      </div>
      <div class="inputContainers">
        <div class="inputContainer">
          <label for="exp">Years of Experience</label>
          <pv-inputNumber id="exp" v-model="experience"/>
        </div>
        <div class="inputContainer">
          <label for="age">Age</label>
          <pv-inputNumber id="age" v-model="age"/>
        </div>
      </div>
      <div class="inputContainers">
        <div class="inputContainer">
          <label for="cost">Price per date</label>
          <pv-inputNumber id="cost" v-model="price"/>
        </div>
        <div class="inputContainer">
          <label for="education">Education History (Separate with a ',')</label>
          <pv-inputText id="education" v-model="education"/>
        </div>
      </div>
      <div class="inputContainers">
        <div class="inputContainer">
          <label for="hours">Hours of Service (Separate with a ',')</label>
          <pv-inputText id="hours" v-model="hours" placeholder="9:00 AM - 10:00 AM"/>
        </div>
      </div>
    </div>

    <div class="buttonContainer">
      <pv-button label="Register" class="p-button-lg" @click="newDoctor"></pv-button>
    </div>


  </main>
</template>

<script setup>
    import { ref } from "vue"
    let dni = ref("")
    let name = ref("")
    let paternal = ref("")
    let maternal = ref("")
    let birthday = ref("")
    let email = ref("")
    let cell1 = ref("")
    let cell2 = ref("")
    let password = ref("")
    let repassword = ref("")
    let area = ref("")
    let description = ref("")
    let experience = ref("")
    let age = ref("")
    let price = ref("")
    let education = ref("")
    let hours = ref("")
</script>

<script>
 import { useCounterStore } from "../stores/counter";

export default {

  data() {
    return {
      selectedGenre: null,
      genres: [
        {name: 'Male', code: 'M'},
        {name: 'Female', code: 'F'}
      ],
      birthday: null
    }
  },
  methods: {
        separatingArrays(){
            this.education=this.education.split(",")
            this.hours=this.hours.split(",")
            let arrayeducation = []
            let arrayhours = []
            this.education.forEach((element, index) => {
              arrayeducation.push(
                    {
                        id: index,
                        name: element
                    }
                )
            });
            this.hours.forEach((element, index) => {
              arrayhours.push(
                    {
                        id: index,
                        hours: element,
                        booked: false
                    }
                )
            });
            this.education = arrayeducation
            this.hours = arrayhours

            if(this.education.length==1 && this.education[0].name===""){
                this.education=[]
            }
            if(this.hours.length==1 && this.hours[0].hours===""){
                this.hours=[]
            }
        },
        newDoctor(){
            console.log(useCounterStore().doctors)
            this.separatingArrays()
            useCounterStore().doctors.push(
                {
                  id: useCounterStore().doctors.length,
                  name: this.name + " " + this.paternal + " " + this.maternal,
                  area: this.area,
                  description: this.description,
                  patients: 0,
                  years: this.experience,
                  age: this.age,
                  cost: this.price,
                  photo: "https://www.browardhealth.org/-/media/broward-health/placeholder/doctor-placeholder-male.jpg",
                  education: this.education,
                  hoursAvailable: this.hours
                }
            )
            this.$router.push({name: 'registerDoctor'})
            console.log(useCounterStore().doctors)
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