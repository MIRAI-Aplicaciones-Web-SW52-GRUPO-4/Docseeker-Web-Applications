<template >
    <div class="backButton">
        <MenuBarDoctor></MenuBarDoctor>
        <router-link :to="{name: 'medicalHistoryPatient', params:{id: this.$route.params.id}}"><i class="pi pi-angle-left" style="font-size: 200%"></i></router-link>
        <h1>Add historical record for {{patient.name}}</h1>
    </div>
    <h3>Check the historical data of {{patient.name}}.</h3>
    <div class="inputs">
        <div class="input">
            <label for="calendarr">Date</label>
            <pv-calendar v-model="date" dateFormat="dd.mm.yy" id="calendarr" placeholder="Day/Month/Year" />
        </div>
        <div class="input textArea">
            <label for="calendarr">What was the appointment about</label>
            <pv-textArea v-model="text" class="textArea"/>
        </div>
        <pv-button class="btn" label="Save" @click="newMedicalHistory"></pv-button>
    </div>
</template>
<script setup>
    import MenuBarDoctor from "../../components/MenuBarDoctor.vue"
    import { ref } from "vue"
    let date = ref("")
    let text = ref("")
</script>
<script>
 import { useCounterStore } from "../../stores/counter";

    export default {
        data(){
            return{
                patient: {},
                medicalHistory: null
            }
        },
        created() {
            for (let x in useCounterStore().patients){
                if (useCounterStore().patients[x].id == this.$route.params.id){
                    this.patient = useCounterStore().patients[x];
                    break;
                }
            }
            for (let x in useCounterStore().medicalHistory){
                if (useCounterStore().medicalHistory[x].idPatient == this.$route.params.id){
                    this.medicalHistory = useCounterStore().medicalHistory[x].historial;
                    break;
                }   
        }
        },
        methods:{
            newMedicalHistory(){
                console.log(this.medicalHistory, "inicio")
                this.medicalHistory.push(
                    {
                    id: this.medicalHistory.length,
                    date: this.date.getDate() + "/" + (this.date.getMonth()+1) + "/" + this.date.getFullYear(),
                    content: this.text
                    }
                )
                this.$router.push({name: 'medicalHistoryPatient', params:{id: this.$route.params.id}})
                console.log(this.medicalHistory)
                }
        }
    }
</script>
<style scoped>
     .backButton{
      display:flex;
      align-items: center;
    }
    .inputs{
        width: 70%;
        margin: 1rem auto;
        padding: 2rem;
        background-color: #CBDDE0;
        border: 1px solid #3CC1D7;
        border-radius: 15px;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .input{
        display: flex;
        flex-direction: column;
    }
    .input label{
        font-weight: bolder;
    }
    .textArea{
        height: 70%;
    }
    .btn{
        background-color: #2980B9;
    }
</style>