<template >
  <div>
    <div class="containerTitle">
      <menu-bar></menu-bar>
      <h1 class="title">Welcome User</h1>
    </div>
    <h2 class="newsTitle">¡Recent News!</h2>
    <pv-carousel :value="news" :numVisible="2" :numScroll="1" :circular="true" :autoplayInterval="3000" style="max-width: 100vw;">
      <template #item="slotProps">
        <h1>{{ slotProps.data.title }}</h1>
        <p>{{ slotProps.data.description }}</p>
        <img :src="slotProps.data.image"/>
      </template>
    </pv-carousel>
    <h2 class="buttonsTitle">¿What do you need?</h2>
    <CardsButton></CardsButton>
  </div>
</template>

<script setup>
import CardsButton from "../../components/CardsButton.vue";
import MenuBar from "../../components/MenuBar.vue";
</script>

<script>

import {NewsApiService} from "../../learning/services/news-api.service";


export default {
  name: "Home",
  data() {
    return {
      news: [],
      newsService: null,
      new: {},
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
    }
  }
}


</script>

<style scoped>
.title{
  font-weight: bolder;
}
.newsTitle{
  text-align: center;
  color: gray;
  margin: 1rem;
}
.containerTitle{
  display: flex;
}
.buttonsTitle{
  font-weight: bolder;
  margin: 2rem;
}
</style>