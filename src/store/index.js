import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: [],
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
  },
  actions: {
  },
  modules: {
  },
  getters: {
    cartSaleItem(state) {
      return state.cart.filter((item) => item.head.onSale);
    },
  },
});
