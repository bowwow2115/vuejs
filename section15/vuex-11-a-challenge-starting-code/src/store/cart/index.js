import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';

export default {
  state() {
    return {
      cart: { items: [], total: 0, qty: 0 },
    };
  },
  actions: actions,
  getters: getters,
  mutations: mutations,
};
