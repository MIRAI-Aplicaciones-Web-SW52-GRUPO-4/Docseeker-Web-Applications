<template>
    <div class="personalData">

        <div class="personalDataRow">
            <div class="field">
                <label>Height (m)</label>
                <pv-inputText class="inputField" type="number" v-model="height" />
            </div>

            <div class="field">
                <label>Weight (kg)</label>
                <pv-inputText class="inputField" type="number" v-model="weight" />
            </div>
        </div>

        <div class="personalDataRow">
            <div class="field">
                <label >Body mass (IMC)</label>
                <pv-inputText class="inputField" type="number" v-model="bodyMass" />
            </div>

            <div class="field">
                <label>Allergies (Separate with a ',')</label>
                <pv-inputText class="inputField" v-model="allergies" />
            </div>
        </div>

        <div class="personalDataRow">
            <div class="field">
                <label>Pathological History (Separate with a ',')</label>
                <pv-inputText class="inputField" v-model="pathologicals" />
            </div>
        </div>
    </div>
    <div class="buttonContainer">
        <router-link to="/medicalInformation" class="buttonContainer"><pv-button class="btn" label="Save" @click="newMedicalInformation"></pv-button></router-link>
    </div>
</template>
<script setup>
    import { ref } from "vue"
    let height = ref(0)
    let weight = ref(0)
    let bodyMass = ref(0)
    let allergies = ref("")
    let pathologicals = ref("")
</script>

<script>
  import { useCounterStore } from "../../stores/counter";

export default {
    data(){
          return{
              userId: 4, /* ESTO DEBE SER LA ID DEL USUARIO QUE ESTÉ LOGEADO */
              medicalInformation: useCounterStore().medicalInformation
          }
      },
      methods: {
        separatingArrays(){
            this.allergies=this.allergies.split(",")
            this.pathologicals=this.pathologicals.split(",")
            let arrayallergies = []
            let arraypathologicals = []
            this.allergies.forEach((element, index) => {
                arrayallergies.push(
                    {
                        id: index,
                        allergie: element
                    }
                )
            });
            this.pathologicals.forEach((element, index) => {
                arraypathologicals.push(
                    {
                        id: index,
                        pathological: element
                    }
                )
            });
            this.allergies = arrayallergies
            this.pathologicals = arraypathologicals

            if(this.pathologicals.length==1 && this.pathologicals[0].pathological===""){
                this.pathologicals=[]
            }
            if(this.allergies.length==1 && this.allergies[0].allergie===""){
                this.allergies=[]
            }
        },
        newMedicalInformation(){
            this.separatingArrays()
            this.medicalInformation.push(
                {
                  id: this.medicalInformation.length,
                  idPatient: this.userId,
                  height: Number(this.height),
                  weight: Number(this.weight),
                  bodyMass: Number(this.bodyMass),
                  allergies: this.allergies,
                  pathologicals: this.pathologicals
                }
            )
           /*  this.$router.push({name: 'doctorReviews', params: {id: this.doctor.id }}) */
            console.log(this.medicalInformation)
        }
    }
}
</script>
<style scoped>
    .personalData {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .personalDataRow {
    display: flex;
    flex-direction: row;
    gap: 2rem;

  }

  .inputField {
    border: 3px solid #2980B9;
    width: 100%;
  }

  .field {
    display: flex;
    flex-flow: column;
  }
  .buttonContainer{
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .btn{
    background-color: #0093AB;
    width: 200px;
    height: 100px;
    font-size: 25px;
  }
</style>