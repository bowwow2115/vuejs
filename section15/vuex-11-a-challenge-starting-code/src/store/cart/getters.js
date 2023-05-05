export default {
  cartTotal(state) {
    return state.cart.total.toFixed(2);
  },
  cart(state) {
    return state.cart;
  },
};
