<template >
  <div>
    <div class="containerTitle">
      <menu-bar></menu-bar>
      <h1 class="title">Welcome User</h1>
    </div>
    <h2 class="newsTitle">¡Recent News!</h2>
    <pv-carousel :value="news" :numVisible="2" :numScroll="1" :circular="true" :autoplayInterval="3000" :responsiveOptions="responsiveOptions" style="max-width: 100vw;">
      <template #item="slotProps" class="card">
          <h3>{{ slotProps.data.title }}</h3>
        <div class="containerImg">
          <img :src="slotProps.data.image"/>
        </div>
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
      responsiveOptions: [
        {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
        },
        {
          breakpoint: '750px',
          numVisible: 1,
          numScroll: 1
        },
        {
          breakpoint: '480px',
          numVisible: 1,
          numScroll: 1
        }
      ]
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
img{
  width:300px;
}
_new{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content:center;

}
_new h3{
  font-weight: bolder;
  text-align: center;
  width: 80%;

}
.containerImg{
  width:100%;
  text-align: center;
  margin:1rem;
}

</style>