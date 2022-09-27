import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import PrimeVue from "primevue/config"

/* Components PrimeVue */
import Button from "primevue/button";
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';

//import router from './router'

import './assets/main.css'
import "primevue/resources/themes/md-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const app = createApp(App)

app.use(createPinia())

app.use(PrimeVue, { ripple: true });
app.component("pv-button", Button);
app.component("pv-inputText", InputText);
app.component("pv-dropdown", Dropdown);
app.component("pv-calendar", Calendar);

//app.use(router)

app.mount('#app')
