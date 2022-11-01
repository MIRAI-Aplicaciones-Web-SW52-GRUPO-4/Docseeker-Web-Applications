<template>
  <div class="containerTitle">
    <MenuBar></MenuBar>
    <h1 class="title">Prescriptions</h1>
  </div>
  <div>
    <pv-dataTable :value="this.myPrescription" responsiveLayout="scroll" :paginator="true" :rows="10" v-model:selection="selectedProduct" selectionMode="single" @rowSelect="onRowSelect">
      <pv-column v-for="col of columns" :field="col.field" :header="col.header" :sortable="true" :key="col.field"></pv-column>
    </pv-dataTable>
  </div>
</template>
<script setup>
import MenuBar from '../../components/MenuBar.vue';
import router from '../../router';
function onRowSelect(event) {
  console.log(event.data.id)
  router.push({name: 'prescription', params: {id: event.data.id}})
}
const columns = [
  {field: "dateIssue", header: "Date of issue"},
  {field: "dateExpiration", header: "Expiration date"},
  {field: "medicalSpeciality", header: "Medical speciality"},
  {field: "recipCode", header: "Recip code"},
  {field: "condition", header: "Condition"}
]

</script>
<script>

import {PrescriptionsApiService} from "../../learning/services/prescriptions-api.service";

export default {
  data(){
    return {

      selectedProduct: null,
      prescription: {},
      prescriptions: [],
      prescriptionsService: null,
      myPrescription: []
    }
  },
  created(){
    this.prescriptionsService = new PrescriptionsApiService();
    this.prescriptionsService.getAll().then((response) => {
      this.prescriptions = response.data;

      for (let x in this.prescriptions){
        if (this.prescriptions[x].idPatient.toString() == sessionStorage.getItem("UserId")){
          this.myPrescription.push(this.prescriptions[x]);
        }
      }
    });
  }, methods: {

  }
}

</script>
<style scoped>
.containerTitle{
  display: flex;
}
.title{
  font-weight: bolder;
}
</style>