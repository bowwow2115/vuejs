export default {
  registerCoach(state, payload) {
    state.coaches.push(payload);
  },
  setCoaches(state, paylaod) {
    state.coaches = paylaod;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
};
