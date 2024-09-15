const state = {
  cart: []
};

const mutations = {
  ADD_CART_ITEM(state, item) {
    item.quantity = 1;
    state.cart.push(item);
  },
  UPDATE_CART_ITEM(state, updatedItem) {
    state.cart = state.cart.map((cartItem) => {
      if (cartItem.id == updatedItem.id) {
        return updatedItem;
      }

      return cartItem;
    });
  },
  REMOVE_CART_ITEM(state, item) {
    state.cart = state.cart.filter((cartItem) => {
      return cartItem.id != item.id;
    });
  }
};

const actions = {
  addCartItem({ commit }, item) {
    commit('ADD_CART_ITEM', item);
  },
  updateCartItem({ commit }, item) {
    commit('UPDATE_CART_ITEM', item);
  },
  removeCartItem({ commit }, item) {
    commit('REMOVE_CART_ITEM', item);
  }
};

const getters = {
  cartItems: state => state.cart
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
