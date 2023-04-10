export default {
  setAuth(state, payload) {
    state.isLoggedin = payload.isAuth;
  },
};
