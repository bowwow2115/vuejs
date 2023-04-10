import { createApp } from 'vue';
import { createStore } from 'vuex';

import router from './router.js';
import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';

const app = createApp(App);

app.use(router);

const store = createStore({
  state() {
    return {
      isLoggedIn: false,
      products: [
        {
          id: 'p1',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
          title: 'Book Collection',
          description:
            'A collection of must-read books. All-time classics included!',
          price: 99.99,
        },
        {
          id: 'p2',
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Tent_at_High_Shelf_Camp_cropped.jpg/640px-Tent_at_High_Shelf_Camp_cropped.jpg',
          title: 'Mountain Tent',
          description: 'A tent for the ambitious outdoor tourist.',
          price: 129.99,
        },
        {
          id: 'p3',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
          title: 'Food Box',
          description:
            'May be partially expired when it arrives but at least it is cheap!',
          price: 6.99,
        },
      ],
      cart: { items: [], total: 0, qty: 0 },
    };
  },
  actions: {
    addProductToCart(context, id) {
      context.commit('addProductToCart', { productId: id });
    },
    removeProductFromCart(context, id) {
      console.log('여기1');
      context.commit('removeProductFromCart', { productId: id });
    },
  },
  mutations: {
    addProductToCart(state, payload) {
      const productInCartIndex = this.state.cart.items.findIndex(
        (product) => product.productId === payload.productId
      );
      const selectedItem = state.products.find(
        (product) => product.id === payload.productId
      );

      if (productInCartIndex >= 0) {
        this.state.cart.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: selectedItem.id,
          title: selectedItem.title,
          image: selectedItem.image,
          price: selectedItem.price,
          qty: 1,
        };
        this.state.cart.items.push(newItem);
      }
      this.state.cart.qty++;
      this.state.cart.total += selectedItem.price;
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
  },
  getters: {
    cartTotal(state) {
      return state.cart.total.toFixed(2);
    },
    // itemTotal(state) {
    //   return (this.price * this.qty).toFixed(2);
    // }
  },
});

app.use(store);

app.component('base-badge', BaseBadge);

app.mount('#app');
