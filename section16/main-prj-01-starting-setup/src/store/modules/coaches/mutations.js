export default {
  registerCoach(state, payload) {
    state.coaches.push(payload);
  },
  setCoaches(state, paylaod) {
    state.coaches = paylaod;
  },
};
