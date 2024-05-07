import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Themes
import './themes/main.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import icons from './fortawesome';

library.add({...icons});

const app = createApp(App);
app.component('FaIcon', FontAwesomeIcon);

app.use(router);

app.mount('#app');
