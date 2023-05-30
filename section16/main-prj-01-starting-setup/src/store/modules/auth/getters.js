export default {
  userId(state) {
    return state.userId;
  },
  isAuthenticated(state) {
    return !!state.token;
  },
  token(state) {
    return state.token;
  },
  didAutoLogout(state) {
    return state.didAutoLogout;
  },
};
