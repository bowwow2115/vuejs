export default {
  increment(context) {
    setTimeout(() => {
      console.log(context);
      context.commit('increment');
    }, 2000);
  },
  incrementWithArg(context, payload) {
    context.commit('incrementWithArg', payload);
  },
};
