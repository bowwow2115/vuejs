import { createStore } from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import counter from './counter/index.js';

const store = createStore({
  modules: {
    counter: counter,
  },
  state() {
    return {
      isLoggedin: false,
    };
  },
  actions: actions,
  mutations: mutations,
  getters: getters,
});

export default store;
