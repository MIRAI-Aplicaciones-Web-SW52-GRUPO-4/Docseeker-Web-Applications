<template>
  <div class="containerTitle">
    <MenuBar></MenuBar>
    <h1 class="title">News</h1>
  </div>
  <div class="inputContainer">
    <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
                <i class="pi pi-search"></i>
            </span>
      <pv-inputText placeholder="Search News" v-model="input"/>
    </div>
  </div>
  <div class="cardsContainer">
    <pv-card class="card" v-for="newCard in filteredList()">
      <template #header>
        <router-link :to="{ name: 'new', params: {id: newCard.id}}">
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
  <div class="error" v-if="input&&!filteredList().length">
    <p><i class="pi pi-exclamation-circle
"></i> No results found!</p>
  </div>
</template>
<script setup>
import MenuBar from '../../components/MenuBar.vue';

</script>

<script>
import {NewsApiService} from "../../learning/services/news-api.service";

export default {
  name: "News",
  data() {
    return {
      news: [],
      newsService: null,
      new: {},
      input: ""
    };
  },
  created(){
    this.newsService = new NewsApiService();
    this.newsService.getAll().then((response) => {
      this.news = response.data;
      this.news.forEach((newss) =>
          this.getDisplayableTutorial(newss)
      );
    });
  },
  methods: {
    getDisplayableTutorial(newss) {
      return newss;
    },
    filteredList() {
      return this.news.filter((_new) =>
          _new.title.toLowerCase().includes(this.input.toLowerCase())
      );
    }
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


.error{
  display: flex;
  height: 80vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 3rem;
}
.error p i{
  font-size: 4rem;
  color: darkred;
}
</style>