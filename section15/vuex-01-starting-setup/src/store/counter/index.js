import actions from './actions';
import getters from './getters';
import mutation from './mutation';

export default {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: mutation,
  actions: actions,
  getters: getters,
};
