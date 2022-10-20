<template>
  <div>
    <div class="containerTitle">
      <MenuBar></MenuBar>
      <h1>Welcome User</h1>
    </div>
    <h2 class="newsTitle">¡News!</h2>
    <CarouselProyected></CarouselProyected>
    <h2 class="buttonsTitle">¿What do you need?</h2>
    <CardsButton></CardsButton>
  </div>
</template>
<script setup>
import CardsButton from '../../components/CardsButton.vue';
import MenuBar from '../../components/MenuBar.vue';
import CarouselProyected from "../components/CarouselProyected.vue"
</script>
<style scoped>
h1{
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