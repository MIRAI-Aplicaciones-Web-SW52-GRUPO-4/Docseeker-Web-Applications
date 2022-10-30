<template >
    <div>
        <div class="containerTitle">
            <MenuBarDoctor></MenuBarDoctor>
            <h1 class="title">Welcome User</h1>
        </div>
        <h2 class="newsTitle">¡Recent News!</h2>
        <pv-carousel :value="news" :numVisible="2" :numScroll="1" :circular="true" :autoplayInterval="3000" :responsiveOptions="responsiveOptions" style="max-width: 100vw;">
            <template #item="slotProps">
                <h3>{{ slotProps.data.title }}</h3>
                <div class="containerImg">
                  <img :src="slotProps.data.image"/>
                </div>
            </template>
        </pv-carousel>
        <h2 class="buttonsTitle">¿What do you need?</h2>
        <CardsButtonDoctor></CardsButtonDoctor>
    </div>
</template>
<script setup>
import CardsButtonDoctor from '../../components/CardsButtonDoctor.vue';
import MenuBarDoctor from '../../components/MenuBarDoctor.vue';
</script>

<script>
import {NewsApiService} from "../../learning/services/news-api.service";

export default{
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
    }
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
    .containerImg{
      width:100%;
      text-align: center;
      margin:1rem;
    }

</style>