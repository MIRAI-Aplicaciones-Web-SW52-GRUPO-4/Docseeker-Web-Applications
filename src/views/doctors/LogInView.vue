<script setup>
    import LogInCardDoctor from '../../components/LogInCardDoctor.vue'
  
  </script>
  <template>
    <div class="container">
        <pv-card-content class="welcomeImgCard ">
            <img src="../../assets/images/doctor.png"
            alt="doctor login" class="images-Welcome">
            <h1>Doctor</h1>
        </pv-card-content>
        <LogInCardDoctor/>
    </div>
  </template>
  
  
  <style scoped>
    .container{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .welcomeImgCard{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }
    .images-Welcome{
        width: 700px;
    }
  </style>