<template>
  <div className="patient">
    <img :src="image" alt="patient image" class="patientImg">
    <div className="info">
      <h3 className="patientName">For {{ name }}</h3>
      <h3>{{ da te }}</h3>
      <h3>{{ ho ur }}</h3>
    </div>
  </div>
</template>

<script setup>
const img = `../src/assets/images/${props.name} image.jpg`
const props = defineProps({
  name: {
    type: String,
    default: "Patient name"
  },
  image: {
    type: String,
    default: "Patient image"
  },
  date: {
    type: String,
    default: "Date appointment"
  },
  hour: {
    type: String,
    default: "Hour appointment"
  },
})


</script>

<style scoped>
.patient {
  border: solid 1px black;
  border-color: #0093AB;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  padding: 2rem;
  margin: 2rem;
}

.patientImg {
  width: 150px;
  height: 150px;
  border-radius: 20px;
  border-color: #0093AB;

}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.infoContainer {
  display: flex;
  flex-direction: row;
  gap: 4rem
}

.seeContainer {
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #0093AB;
  border-bottom: 1px solid #0093AB;
}

.patientName {
  font-size: 150%;
  font-weight: bolder;
}

.h3 {
  color: blue;
}
</style>