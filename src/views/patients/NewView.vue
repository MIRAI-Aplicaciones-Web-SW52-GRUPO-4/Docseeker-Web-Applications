<template>
  <div class="backButton">
    <MenuBar></MenuBar>
    <router-link to="/news"><i class="pi pi-angle-left" style="font-size: 200%"></i></router-link>
    <h1><strong>News</strong></h1>
  </div>
  <div class="newContainer">
    <h1 class="newTitle">{{this.new.title}}</h1>
    <img class="newImg" :src="this.new.image" alt="image new">
    <p class="newText">{{this.new.info}}</p>
  </div>
</template>
<script setup>
import MenuBar from "../../components/MenuBar.vue"
</script>
<script>
import {NewsApiService} from "../../learning/services/news-api.services";

export default {
  name: "New",
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

      for (let x in this.news){
        if (this.news[x].id == this.$route.params.id){
          this.new = this.news[x];
          break;
        }
      }

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
.backButton{
  display:flex;
  align-items: center;
}
.newContainer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  background-color: #F0F0F0;
  border-radius: 15px;
  border: 1px solid #0093AB;
  width: 70%;
  margin: 0 auto;
  gap: 2rem;
}
img{
  border-radius: 15px;
}
</style>