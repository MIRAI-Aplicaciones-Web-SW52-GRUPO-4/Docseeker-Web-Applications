<template>
  <main>
    <head>
      <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css">
    </head>

    <pv-sidebar class="principal_sidebar" v-model:visible="visibleLeft" position="left">

      <div class="sections">
        <a> <i class="fa fa-home"></i> Home</a>
        <a> <i class="fa fa-user"></i> My Profile</a>
        <a> <i class="fa fa-newspaper-o"></i> News</a>
        <a> <i class="fa fa-file"></i> Prescription</a>
        <a> <i class="fa fa-gear"></i> Configuration</a>
        <a class="space"></a>


        <a class="mode"> <i class="fa fa-moon-o"></i>   Night Mode
          <div class="switch">
          <span
              class="toggle-wrapper"
              role="checkbox"
              :aria-checked="value.toString()"
              tabindex="0"
              @click="toggle"
              @keydown.space.prevent="toggle"
          >
      <span
          class="toggle-background"
          :class="backgroundStyles"
      />
      <span
          class="toggle-indicator"
          :style="indicatorStyles"
      />
    </span>
          </div></a>





        <a class="logout"> <i class="fa fa-sign-out"></i> Log out </a>



      </div>
    </pv-sidebar>

  </main>
</template>


<script>
export default {
  data(){
    return{
      visibleLeft: true

    }
  },
  props: {
    value:{
      type: Boolean,
      required: true
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

.principal_sidebar {
  flex-direction: column;
  display: flex;
  width: 200px;
  background-color: #F0F0F0;

}
.space{
  margin-bottom: 30vw;
}

.principal_sidebar a {
  --color-text: black;
}

.sections {
  flex-direction: column;
  display: flex;
}

.sections a{
  margin-left: 10px;
  margin-top: 10px;
}
.sections {
  width: 92%;
}

.logout {
  margin-bottom:20px;
}

.gold-mid{
  background-color: #666666;
}

.gray-lighter{
  background-color: #c2c2c2;
}

.toggle-wrapper {
  display: inline-block;
  position: relative;
  cursor: pointer;
  width: 32px;
  height: 18px;
  border-radius: 9999px;
  margin-left:30px;
}

.toggle-wrapper:focus {
  outline: 0;
}

.toggle-background {
  display: inline-block;
  border-radius: 9999px;
  height: 100%;
  width: 100%;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color .4s ease;
}

.toggle-indicator {
  position: absolute;
  height: 14px;
  width: 14px;
  left: 2px;
  bottom: 2px;
  background-color: #ffffff;
  border-radius: 9999px;
  box-shadow:  0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform .4s ease;
}

.mode {
  display: flex;
  flex-direction: row;
}

.mode .switch {
  margin-top: 4px;
}

a,
.black {
  text-decoration: none;
  color: black;
  transition: 0.4s;
  font-weight: bold;
}

@media (hover: hover) {
  a:hover {
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