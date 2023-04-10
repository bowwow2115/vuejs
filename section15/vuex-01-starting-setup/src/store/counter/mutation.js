export default {
  increment(state) {
    state.counter++;
  },
  incrementWithArg(state, payload) {
    console.log(state);
    state.counter = state.counter + payload.value;
  },
};
