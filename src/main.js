import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import PrimeVue from "primevue/config"

/* Components PrimeVue */
import Button from "primevue/button";
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import Sidebar from'primevue/sidebar';
import InputSwitch from 'primevue/inputswitch';
import Carousel from 'primevue/carousel';
/* import router from './router' */

import './assets/main.css'
import "primevue/resources/themes/md-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import './components/MenuBar.vue';

const app = createApp(App)

app.use(createPinia())

app.use(PrimeVue, { ripple: true });
app.component("Button", Button);
app.component("InputText", InputText);
app.component("Dropdown", Dropdown);
app.component("Calendar", Calendar);
app.component( "pv-sidebar", Sidebar);
app.component("pv-switch", InputSwitch);
app.component("pv-carousel", Carousel);
/* app.use(router) */

app.mount('#app')
