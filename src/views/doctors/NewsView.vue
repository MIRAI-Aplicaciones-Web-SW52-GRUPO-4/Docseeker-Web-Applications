<template>
  <div class="containerTitle">
    <MenuBarDoctor></MenuBarDoctor>
    <h1 class="title">News</h1>
  </div>
  <div class="inputContainer">
    <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
                <i class="pi pi-search"></i>
            </span>
      <pv-inputText placeholder="Search News" />
    </div>
  </div>
  <div class="cardsContainer">
    <pv-card class="card" v-for="newCard in news">
      <template #header>
        <router-link :to="{ name: 'newdoctor', params: {id: newCard.id}}">
          <img alt="image" :src="newCard.image">
        </router-link>
      </template>
      <template #title>
        {{newCard.title}}
      </template>
      <template #content>
        {{newCard.description}}
      </template>
      <template #footer>
        {{newCard.views}} views
      </template>
    </pv-card>
  </div>
</template>
<script setup>
import MenuBarDoctor from '../../components/MenuBarDoctor.vue';
import { useCounterStore } from "../../stores/counter";
const news = useCounterStore().news;
console.log(news)
</script>

<style scoped>
.containerTitle{
  display: flex;
}
.title{
  font-weight: bolder;
}
.cardsContainer{
  border-top: solid black 1px;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
.card{
  width: 300px;
  margin: 2rem;
}
img{
  width: 300px;
  height: 200px;
}
.inputContainer{
  width: 75vw;
  display: flex;
  justify-content: center;
}
.p-inputgroup{
  width: 20vw;
}
</style>