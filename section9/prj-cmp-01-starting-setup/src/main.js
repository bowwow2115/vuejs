import App from './App.vue';
import { createApp } from 'vue';

import Basecard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';

const app = createApp(App);
app.component('base-card', Basecard);
app.component('base-button', BaseButton);
app.mount('#app');
