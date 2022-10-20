<template>
    <div class="containerTitle">
        <MenuBar></MenuBar>
        <h1 class="title">Medical Information</h1>
    </div>
    <div class="historyContainer">
        <div class="userInfo">
            <img class="userImage" src="../../assets/images/User profile photo.jpg" alt="user image">
            <h1 class="name">Nombre del usuario</h1>
        </div>
        <div v-if="(typeof this.medicalInformation === 'object' && !Array.isArray(this.medicalInformation) && this.medicalInformation !== null)">
            <div class="generalInformation">
                <h2>General Information</h2>
                <div class="informations">
                    <div class="information">
                        <img class="informationImage" src="../../assets/images/height.png" alt="height image">
                        <h3>Height: {{medicalInformation.height}} m</h3>
                    </div>
                    <div class="information">
                        <img class="informationImage" src="../../assets/images/weight.png" alt="weight image">
                        <h3>Weight: {{medicalInformation.weight}} Kg</h3>
                    </div>
                    <div class="information">
                        <img class="informationImage" src="../../assets/images/body.png" alt="body mass">
                        <h3>Body mass: {{medicalInformation.bodyMass}} IMC</h3>
                    </div>
                </div>
            </div>
            <div class="allergies">
                <h2>Allergies</h2>
                <ul>
                    <li v-for="allergie in medicalInformation.allergies"><h3>{{allergie.allergie}}</h3></li>
                </ul>
            </div>
            <div class="errorAllergie" v-show="!medicalInformation.allergies.length">
                <i class="pi pi-check"></i>
                <p>You don't have any allergie</p>
            </div>
            <div class="pathological">
                <h2>Pathological History</h2>
                <ul>
                    <li v-for="pathological in medicalInformation.pathologicals"><h3>{{pathological.pathological}}</h3></li>
                </ul>
            </div>
            <div class="errorAllergie" v-show="!medicalInformation.pathologicals.length">
                <i class="pi pi-check"></i>
                <p>You don't have any pathological</p>
            </div>
        </div>
        <div class="buttonContainer" v-else>
            <router-link to="/editMedicalInformation" class="buttonContainer"><pv-button class="btn" label="Upload Medical information"></pv-button></router-link>
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
                userId: 4, /* ESTO DEBE SER LA ID DEL USUARIO QUE ESTÉ LOGEADO */
                medicalInformation: []
            }
        },
        created() {
            for (let x in useCounterStore().medicalInformation){
                if (useCounterStore().medicalInformation[x].idPatient == this.userId){
                    this.medicalInformation = useCounterStore().medicalInformation[x];
                    break;
                }
            }
            console.log((typeof this.medicalInformation === 'object' && !Array.isArray(this.medicalInformation) && this.medicalInformation !== null))
        }
    }
</script>
<style scoped>
  .errorAllergie{
    margin: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    font-size: 200%;
  }
  .errorAllergie i{
    font-size: 200%;
    color: green;
  }
  .buttonContainer{
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .btn{
    background-color: #0093AB;
    width: 40%;
    height: 100px;
  }
    .containerTitle{
        display: flex;
    }
    .title{
        font-weight: bolder;
    }
    .userImage{
        width: 150px;
        border-radius: 50%;
        border: 3px solid #0093AB;
    }
    .userInfo{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        width: 56%;
        margin: 2rem auto;
        padding: 1rem;
        border: 1px solid black;
        border-radius: 10px;
    }
    .generalInformation{
        margin: 2rem auto;
        width: 50vw;
        border-radius: 0 0 20px 20px;
        border: solid 1px black;
    }
    .generalInformation h2{
        padding: .5rem;
        font-weight: bolder;
        background-color: #0093AB;
        color: white;
    }
    .informations{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 1rem;
    }
    .information{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
    .information h3{
        font-weight: bolder;
    }
    .informationImage{
        width: 100px;
    }
    .allergies, .pathological{
        width: 56%;
        margin: 2rem auto;
    }
    .allergies h2, .pathological h2{
        font-weight: bolder;
        border-bottom: 1px solid black;
    }
    ul{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    .allergies li{
        color: #DCB041;
    }
    .allergies h3, .pathological h3{
        font-weight: bolder;
    }
    .pathological li{
        color: #FD5D5D;
    }

</style>