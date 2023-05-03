import { createStore } from 'vuex';
import cart from './cart/index.js';
import product from './product/products.js';

const store = createStore({
  modules: {
    cart: cart,
    product: product,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  actions: {},
  mutations: {},
  getters: {},
});

export default store;
