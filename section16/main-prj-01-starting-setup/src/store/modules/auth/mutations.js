export default {
  setUser(state, payload) {
    console.log('2' + payload);
    state.token = payload.token;
    state.userId = payload.userId;
    state.tokenExpiration = payload.tokenExpiration;
  },
};
