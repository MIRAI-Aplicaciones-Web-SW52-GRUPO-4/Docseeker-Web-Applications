<template >
  <div>
    <div class="containerTitle">
      <MenuBar></MenuBar>
      <h1 class="title">Welcome User</h1>
    </div>
    <h2 class="newsTitle">¡Recent News!</h2>
    <pv-carousel :value="news" :numVisible="2" :numScroll="1" :circular="true" :autoplayInterval="3000" style="max-width: 100vw;">
      <template #item="slotProps">
        <h1>{{slotProps.data.title}}</h1>
        <p>{{slotProps.data.description}}</p>
        <img :src="slotProps.data.image"/>
      </template>
    </pv-carousel>
    <h2 class="buttonsTitle">¿What do you need?</h2>
    <CardsButton></CardsButton>
  </div>
</template>
<script setup>
import CardsButton from '../../components/CardsButton.vue';
import MenuBar from '../../components/MenuBar.vue';

const news = [
  {
    title: "noticia 1",
    description: "no ce manito no importa",
    image: "https://picsum.photos/id/230/600/300"
  },
  {
    title: "noticia 2",
    description: "facilito",
    image: "https://picsum.photos/id/231/600/300"
  },
  {
    title: "noticia 3",
    description: "jhdksfjhkdfs",
    image: "https://picsum.photos/id/232/600/300"
  },
  {
    title: "noticia 4",
    description: "w235342",
    image: "https://picsum.photos/id/233/600/300"
  },
  {
    title: "noticia 5",
    description: "no23466o",
    image: "https://picsum.photos/id/234/600/300"
  },
  {
    title: "ya termino, devuelta al start",
    description: "3456fghfghf",
    image: "https://picsum.photos/id/235/600/300"
  }
]
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