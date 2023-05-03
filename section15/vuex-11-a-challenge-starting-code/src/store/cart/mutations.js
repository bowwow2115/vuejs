export default {
  addProductToCart(state, payload) {
    const productInCartIndex = state.cart.items.findIndex(
      (product) => product.productId === payload.product.id
    );
    console.log('productInCartIndex: ' + productInCartIndex);
    console.log(payload);

    // const selectedItem = state.products.find(
    //   (product) => product.id === payload.productId
    // );

    if (productInCartIndex >= 0) {
      state.cart.items[productInCartIndex].qty++;
    } else {
      const newItem = {
        productId: payload.product.id,
        title: payload.product.title,
        image: payload.product.image,
        price: payload.product.price,
        qty: 1,
      };
      state.cart.items.push(newItem);
    }
    state.cart.qty++;
    state.cart.total += payload.product.price;
  },
  removeProductFromCart(state, payload) {
    const productInCartIndex = state.cart.items.findIndex(
      (cartItem) => cartItem.productId === payload.productId
    );
    console.log('productInCartIndex: ' + productInCartIndex);
    const prodData = state.cart.items[productInCartIndex];
    console.log('prodData: ' + prodData);
    state.cart.items.splice(productInCartIndex, 1);
    state.cart.qty -= prodData.qty;
    state.cart.total -= prodData.price * prodData.qty;
  },
};
