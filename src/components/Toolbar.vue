<template>
  <div class="toolBar">
    <router-link to="/"><img src="../assets/images/DocSeeker.png" alt="DocSeeker Logo" class="logo"></router-link>
  </div>
</template>

<script>
export default {
  name: "ToolBar"
}
</script>

<style scoped>
.toolBar{
  background-color: #0093AB;
  margin-top:0;
  margin-bottom:1rem;
  width: 100vw;
  padding: .5rem;
}
.logo{
  margin-left: 2rem;
}
</style>