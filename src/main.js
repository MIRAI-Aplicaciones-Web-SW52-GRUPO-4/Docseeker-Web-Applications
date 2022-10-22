import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'

import App from './App.vue'
import PrimeVue from "primevue/config"

/* Components PrimeVue */
import Button from "primevue/button";
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import Sidebar from'primevue/sidebar';
import InputSwitch from 'primevue/inputswitch';
import Card from "primevue/card";
import Carousel from 'primevue/carousel';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
import Row from 'primevue/row';                     //optional for row
import InputNumber from 'primevue/inputnumber';
import router from './router';
import Message from 'primevue/message';
import Dialog from 'primevue/dialog';

import './assets/main.css'
import "primevue/resources/themes/md-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import './components/MenuBar.vue';

const app = createApp(App)

app.use(createPinia())

app.use(PrimeVue, { ripple: true });
app.component("pv-button", Button);
app.component("pv-inputText", InputText);
app.component("pv-textArea", Textarea);
app.component("pv-dropdown", Dropdown);
app.component("pv-calendar", Calendar);
app.component("pv-sidebar", Sidebar);
app.component("pv-switch", InputSwitch);
app.component("pv-card",Card);
app.component("pv-carousel",Carousel);
app.component("pv-dataTable",DataTable);
app.component("pv-column",Column);
app.component("pv-columnGroup",ColumnGroup);
app.component("pv-row",Row);
app.component("pv-inputNumber",InputNumber);
app.component("pv-message", Message);
app.component("pv-dialog", Dialog);

app.use(router)
app.use(MotionPlugin)
app.mount('#app')
