import App from './App.vue';
import { createApp } from 'vue';

import Basecard from './components/UI/BaseCard.vue';

const app = createApp(App);
app.component('base-card', Basecard);
app.mount('#app');
