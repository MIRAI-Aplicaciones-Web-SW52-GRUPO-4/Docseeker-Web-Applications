<template>
  <main>
    <head>
      <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css">
    </head>

    <pv-button class="p-button-text" @click="isVisible = !isVisible">
      <i class="pi pi-bars" style="font-size: 2rem; color: black;"></i>
    </pv-button>
    <pv-sidebar class="sidebar" v-model:visible=isVisible position="left">

      <div class="container">
        <div class="links">
          <router-link to="" class="link"><i class="pi pi-home"></i> <h2>Home</h2> </router-link>
          <router-link to="" class="link"><i class="pi pi-user"></i> <h2>My Profile</h2> </router-link>
          <router-link to="" class="link"><i class="fa fa-newspaper-o"></i> <h2>News</h2> </router-link>
          <router-link to="" class="link"><i class="pi pi-file"></i> <h2>Prescription</h2> </router-link>
          <router-link to="" class="link"><i class="pi pi-cog"></i> <h2>Configuration</h2> </router-link>
        </div>
        <router-link class="link logout"> <i class="pi pi-sign-out"></i> <h3>Log out</h3> </router-link>
      </div>


    </pv-sidebar>

  </main>
</template>


<script>
export default {
  props: {
    isVisible:{
      type:Boolean,
      default: false
    }
  },
  computed: {
    backgroundStyles() {
      return {
        'gold-mid': this.value,
        'gray-lighter': !this.value
      };
    },
    indicatorStyles() {
      return { transform: this.value ? 'translateX(14px)' : 'translateX(0)' };
    }
  },
  methods: {
    toggle() {
      this.$emit('input', !this.value);
    }
  }

}



</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: space-between;

}

.links {
  flex-direction: column;
  display: flex;
}

.link{
  display: flex;
  align-items:center;
  gap:1rem;
  margin:10px;
  color: black;
  transition: 0.4s;
  padding:1rem;
  border-radius: 10px;
}
.link h2, .link h3{
  font-weight: bold;

}


@media (hover: hover) {
  .link:hover {
    background-color: #0093AB;
    opacity: 0.7;
    color: white;
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }
}
</style>