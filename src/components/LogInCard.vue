  <template>
  <main>
    <pv-card class="card_log_in">
      <template #title>
        Log In
      </template>

      <template #content >
        <h3>User</h3>
        <div class="inputContainer">
          <label for="dni">DNI Number / CE</label><br>
          <pv-inputText id="dni" type="string" placeholder="DNI/CE" class="inputBox"
                        v-model="dni"/>
        </div>
        <br>
        <h3>Password</h3>
        <div class="inputContainer">
          <label for="password1">Password</label><br>
          <pv-inputText id="password1" type="password" placeholder="Password" class="inputBox"
                        v-model="password"/>
        </div>
        <div class="lastPart">
          <br>
          <pv-dialog position="top" v-model:visible="tried"  >Incorrect email or password. Please try again.</pv-dialog><br>
          <pv-button @click="getInto()" class="buttonLogIn" label="Log In" /><br>
          <router-link to="/changePassword" class="link">I forgot my password</router-link><br>
          <router-link to="/register" class="link">You do not have an account? \ Sign up</router-link>
        </div>
      </template>
    </pv-card>
  </main>
</template>

<script>
import {PatientsApiService} from "../learning/services/patients-api.service";
import router from "../router";

export default {
  name: "log-in-card.component",
  data(){
    return{
      type: "",
      patients: [],
      patient: {},
      patientsService: null,
      doctors: [],
      doctor: {},
      doctorsService: null,
      incorrectData: true,
      tried: false,
      display: false,



      dni: "",
      password: ""
    }
  },
  created() {

  },
  methods: {
    getInto(){
      this.type="patient";

      if(this.type == "patient") {
        this.patientsService = new PatientsApiService();
        this.patientsService.getAll().then((response) => {
          this.patients = response.data;

          for (let x in this.patients){
            if(this.patients[x].dni == this.dni &&
                this.patients[x].password == this.password){
              this.patient = this.patients[x];
              this.incorrectData = false;
              break;
            }
          }
          if(this.incorrectData) {
            this.tried = true;
          }else {
            sessionStorage.setItem("UserId", this.patient.id.toString());
            router.push('/dashboard');
          }


        });
      }else {

      }

    }
  }
}
</script>


<style scoped>

h3{
  text-align: center;
}

.card_log_in{
  width: 500px;
  margin-top: 50px;
  margin-right: 50px;
  float: right;
}
.inputContainer{
  width: 100%;
  margin-left: 10px;
  margin-right: 20px;
}

.buttonLogIn{
  text-align: center;
  background-color: #0093AB;
}
.inputBox{
  width:95%;
  border-color: #0093AB;
}

.lastPart{
  text-align: center;
  align-content: center;
  align-items: center;
  margin:25px;
}

.link{
  color: #2cb0b0;
}

</style>