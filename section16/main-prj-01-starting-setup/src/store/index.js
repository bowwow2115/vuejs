import { createStore } from 'vuex';

import coaches from './modules/coaches/index.js';

const store = createStore({
  modules: { coaches: coaches },
});

export default store;
