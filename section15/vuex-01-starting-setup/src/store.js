import { createStore } from 'vuex';

const store = createStore({
  modules: {
    counter: counterModule,
  },
  state() {
    return {
      isLoggedin: false,
    };
  },
  actions: {
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedin = payload.isAuth;
    },
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedin;
    },
  },
});

export default store;
