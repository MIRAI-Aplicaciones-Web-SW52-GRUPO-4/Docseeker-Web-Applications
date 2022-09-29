<template>
  <div class="app">
    <carousel
      @next = "next"
      @prev = "prev"
    >
      <carousel-slide v-for="(slide,index) in slides"
                      :key="slide"
                      :index="index"
                      :visibleSlide="visibleSlide"
                      :direction="direction">

        <img :src="slide" :alt="slide"/>
        <div class="news"> {{ news[index] }} </div>
      </carousel-slide>
    </carousel>
  </div>
</template>

<script>
import Carousel from './Carousel.vue';
import CarouselSlide from './CarouselSlide.vue';
export default {
  name: "CarouselProyected",
  data(){
    return {
      slides: [
        'https://picsum.photos/id/230/600/300',
        'https://picsum.photos/id/231/600/300',
        'https://picsum.photos/id/232/600/300',
        'https://picsum.photos/id/233/600/300',
        'https://picsum.photos/id/234/600/300',
        'https://picsum.photos/id/235/600/300',
        'https://picsum.photos/id/236/600/300',
      ],
      news: [
        "news 1",
        "news 2",
        "news 3",
        "news 4",
        "news 5",
        "news 6",
        "news 7",
      ],
      visibleSlide: 0,
      direction: 'left',
    }
  },
  computed: {
    slidesLen() {
      return this.slides.length;
    }
  },
  methods: {
    next() {
      if(this.visibleSlide >= this.slidesLen - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide++;
      }
      this.direction="left";
    },
    prev() {
      if(this.visibleSlide <= 0) {
        this.visibleSlide = this.slidesLen - 1;
      } else {
        this.visibleSlide--;
      }
      this.direction="right";
    }
  },
  components : {
    Carousel,
    CarouselSlide,
  }
}
</script>

<style>
.app {
  display:flex;
  justify-content: center;
}
carousel {
  position:relative;
  overflow: hidden;
  width:800px;
  height:500px;
  z-index:10;
}

carousel-slider {
  position: relative;
  display: inline-block;
  top:0;
  left:0;
  bottom:0;
  right:0;

}

.news {
  position: absolute;
  top:80%;
  left:10%;
  font-size: 22px;
  color: darkred;
}

.carousel-slider img {
  width:100%;
  height:100%;
}
</style>