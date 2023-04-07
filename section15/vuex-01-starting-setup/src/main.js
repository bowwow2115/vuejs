import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
      isLoggedin: false,
    };
  },
  actions: {
    increment(context) {
      setTimeout(() => {
        console.log(context);
        context.commit('increment');
      }, 2000);
    },
    incrementWithArg(context, payload) {
      context.commit('incrementWithArg', payload);
    },
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    incrementWithArg(state, payload) {
      state.counter = state.counter + payload.value;
    },
    setAuth(state, payload) {
      state.isLoggedin = payload.isAuth;
    },
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedin;
    },
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedConuter(state, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
