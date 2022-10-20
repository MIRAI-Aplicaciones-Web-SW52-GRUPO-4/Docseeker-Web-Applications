<template>
  <div class="containerTitle">
    <MenuBar></MenuBar>
    <h1 class="title">Prescriptions</h1>
  </div>
  <div>
    <pv-dataTable :value="prescriptions" responsiveLayout="scroll" :paginator="true" :rows="10" v-model:selection="selectedProduct" selectionMode="single" @rowSelect="onRowSelect">
      <pv-column v-for="col of columns" :field="col.field" :header="col.header" :sortable="true" :key="col.field"></pv-column>
    </pv-dataTable>
  </div>
</template>
<script setup>
import MenuBar from '../../components/MenuBar.vue';
import router from '../../router';
const selectedProduct = null;
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

/* const products = [
    {
        id: 0,
        dateIssue: "10/05/2018",
        dateExpiration: "09/06/2018",
        medicalSpeciality: "Dermatology",
        recipCode: "123456789",
        condition: "Valid",
        rest: ". Sleep a lot Rest your voice too.",
        drink: ". Liquids keep the throat hydrated and prevent dehydration. Avoid caffeine and alcohol, which can dehydrate you.",
        food: ". Hot beverages, such as broth, non-caffeinated tea, or warm water with honey, and cold snacks, such as popsicle sticks, can soothe a sore throat. You should never give honey to babies younger than 1 month old.",
        medicines: [
            {
                id: 0,
                medicine: "Paracetamol - 100g"
            },
            {
                id: 1,
                medicine: "Multibiotics - 4 Sachets"
            }
        ],
        numberDose: 3,
        meals: ["After Breakfast", "After Lunch", "After Dinner"],
        hours: ["8:00 AM", "3:00 PM", "8:00 PM"]
    },
    {
        id: 1,
        dateIssue: "14/02/2018",
        dateExpiration: "09/06/2018",
        medicalSpeciality: "Dermatology",
        recipCode: "123456789",
        condition: "Valid",
        rest: ". Sleep a loooooooooooooooot Rest your voice too.",
        drink: ". Liquids keasl, which can dehydrate you.",
        food: ". Muchas hamburguesa",
        medicines: [
            {
                id: 0,
                medicine: "Paracetamol - 100g"
            },
            {
                id: 1,
                medicine: "Multibiotics - 4 Sachets"
            }
            ,
            {
                id: 2,
                medicine: "Masds - 4 Sachets"
            }
        ],
        numberDose: 1,
        meals: ["After Breakfast", "After Lunch", "After Dinner"],
        hours: ["8:00 AM", "3:00 PM", "8:00 PM"]
    },
    {
        id: 2,
        dateIssue: "01/05/2008",
        dateExpiration: "09/06/2018",
        medicalSpeciality: "Dermatology",
        recipCode: "123456789",
        condition: "Valid",
        rest: ". Sleep a lot Rest your voice too.",
        drink: ". Lsade and alcohol, which can dehydrate you.",
        food: ". Hot beverages, such as broth, non-caffeinated tea, or warm water with honethroat. You should never give honey to babies younger than 1 month old.",
        medicines: [
            {
                id: 0,
                medicine: "Paracetamol - 100g"
            },
            {
                id: 1,
                medicine: "Multibiotics - 4 Sachets"
            }
        ],
        numberDose: 3,
        meals: ["After Breakfast", "After Lunch", "After Dinner"],
        hours: ["8:00 AM", "3:00 PM", "8:00 PM"]
    },
    {
        id: 3,
        dateIssue: "27/05/2020",
        dateExpiration: "09/06/2018",
        medicalSpeciality: "Dermatology",
        recipCode: "123456789",
        condition: "Valid",
        rest: ". Sleep a lot Rest your voice too.",
        drink: ". Liquids keep the throat hydrated and prevent dehydration. Avoid caffeine and alcohol, which can dehydrate you.",
        food: ". Hot beverages, such as broth, non-caffeinated tea, or warm water with honey, and cold snacks, such as popsicle sticks, can soothe a sore throat. You should never give honey to babies younger than 1 month old.",
        medicines: [
            {
                id: 0,
                medicine: "Paracetamol - 100g"
            },
            {
                id: 1,
                medicine: "Multibiotics - 4 Sachets"
            }
        ],
        numberDose: 3,
        meals: ["Before Breakfast", "After Lunch", "After Dinner"],
        hours: ["8:00 AM", "3:00 PM", "8:00 PM"]
    },
    {
        id: 4,
        dateIssue: "20/05/2318",
        dateExpiration: "09/06/2018",
        medicalSpeciality: "Dermatology",
        recipCode: "123456789",
        condition: "Valid",
        rest: ". Sleep a lot Rest your voice too.",
        drink: ". Liquids keep the throat hydrated and prevent dehydration. Avoid caffeine and alcohol, which can dehydrate you.",
        food: ". Hot beverages, such as broth, non-caffeinated tea, or warm water with honey, and cold snacks, such as popsicle sticks, can soothe a sore throat. You should never give honey to babies younger than 1 month old.",
        medicines: [
            {
                id: 0,
                medicine: "Paracetamol - 100g"
            },
            {
                id: 1,
                medicine: "Multibiotics - 4 Sachets"
            }
        ],
        numberDose: 3,
        meals: ["After Breakfast", "After Lunch", "After Dinner"],
        hours: ["8:00 AM", "3:00 PM", "8:00 PM"]
    },
    {
        id: 5,
        dateIssue: "13/05/1018",
        dateExpiration: "09/06/2018",
        medicalSpeciality: "Dermatology",
        recipCode: "123456789",
        condition: "Valid",
        rest: ". Sleep a lot Rest your voice too.",
        drink: ". Liquids keep the throat hydrated and prevent dehydration. Avoid caffeine and alcohol, which can dehydrate you.",
        food: ". Hot beverages, such as broth, non-caffeinated tea, or warm water with honey, and cold snacks, such as popsicle sticks, can soothe a sore throat. You should never give honey to babies younger than 1 month old.",
        medicines: [
            {
                id: 0,
                medicine: "Paracetamol - 100g"
            },
            {
                id: 1,
                medicine: "Multibiotics - 4 Sachets"
            }
        ],
        numberDose: 3,
        meals: ["After Breakfast", "After Lunch", "After Dinner"],
        hours: ["8:00 AM", "3:00 PM", "8:00 PM"]
    },
    {
        id: 6,
        dateIssue: "18/05/4018",
        dateExpiration: "09/06/2018",
        medicalSpeciality: "Dermatology",
        recipCode: "123456789",
        condition: "Valid",
        rest: ". Sleep a lot Rest your voice too.",
        drink: ". Liquids keep the throat hydrated and prevent dehydration. Avoid caffeine and alcohol, which can dehydrate you.",
        food: ". Hot beverages, such as broth, non-caffeinated tea, or warm water with honey, and cold snacks, such as popsicle sticks, can soothe a sore throat. You should never give honey to babies younger than 1 month old.",
        medicines: [
            {
                id: 0,
                medicine: "Paracetamol - 100g"
            },
            {
                id: 1,
                medicine: "Multibiotics - 4 Sachets"
            }
        ],
        numberDose: 3,
        meals: ["After Breakfast", "After Lunch", "After Dinner"],
        hours: ["8:00 AM", "3:00 PM", "8:00 PM"]
    },
    {
        id: 7,
        dateIssue: "11/05/2018",
        dateExpiration: "09/06/2018",
        medicalSpeciality: "Dermatology",
        recipCode: "123456789",
        condition: "Valid",
        rest: ". Sleep a lot Rest your voice too.",
        drink: ". Liquids keep the throat hydrated and prevent dehydration. Avoid caffeine and alcohol, which can dehydrate you.",
        food: ". Hot beverages, such as broth, non-caffeinated tea, or warm water with honey, and cold snacks, such as popsicle sticks, can soothe a sore throat. You should never give honey to babies younger than 1 month old.",
        medicines: [
            {
                id: 0,
                medicine: "Paracetamol - 100g"
            },
            {
                id: 1,
                medicine: "Multibiotics - 4 Sachets"
            }
        ],
        numberDose: 3,
        meals: ["After Breakfast", "After Lunch", "After Dinner"],
        hours: ["8:00 AM", "3:00 PM", "8:00 PM"]
    }
] */
</script>
<script>
import {useCounterStore} from "../../stores/counter"
const prescriptions = useCounterStore().prescriptions
</script>
<style scoped>
.containerTitle{
  display: flex;
}
.title{
  font-weight: bolder;
}
</style>