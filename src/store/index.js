import Vue from 'vue';
import Vuex from 'vuex';
import cart from './modules/cart';  // Import the cart module
import products from './modules/products' // Import the products module

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,  // Register the cart module
    products, // Register the products module
  }
});
