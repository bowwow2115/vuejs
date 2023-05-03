export default {
  addProductToCart(context, product) {
    context.commit('addProductToCart', { product: product });
  },
  removeProductFromCart(context, id) {
    context.commit('removeProductFromCart', { productId: id });
  },
};
