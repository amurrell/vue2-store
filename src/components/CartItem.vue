<template>
    <div class="row cart-item-row">
        <div class="col-md-6">
            <Product :product="product" />
        </div>
        <div class="col-md-4">
            <div class="row">
                <div class="col-md-5">
                    <button @click="updateCartItem('add')" class="btn btn-primary btn-block">+</button>
                </div>
                <div class="col-md-2 text-center">{{ productQuantity }}</div>
                <div class="col-md-5">
                    <button @click="updateCartItem('subtract')" class="btn btn-warning btn-block">-</button>
                </div>
            </div>
            <div class="row cart-remove-button">
                <div class="col-md-12">
                    <button @click="removeCartItem" class="btn btn-danger btn-block">Remove Item</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Product from "./Product.vue"

import { mapState } from "vuex"

export default {
    name: "CartItem",
    props: ['product'],
    components: {
        Product
    },
    computed: {
        ...mapState({
            cart: state => state.cart.cart
        }),
        productQuantity() {
            let [quantity] = this.cart.filter(item => item.id == this.product?.id).map(item => item.quantity);
            return quantity;
        }
    },
    methods: {
        updateCartItem(quantityAction) {
            // figure out quantity
            if (quantityAction == 'add') {
                this.product.quantity++;
            } else if (quantityAction == 'subtract') {
                this.product.quantity--;

                // if new quantity is 0, remove item
                if (this.product.quantity == 0) {
                    this.$store.dispatch('cart/removeCartItem', this.product);
                    return;
                }
            }

            // update the item (the quantity)
            this.$store.dispatch('cart/updateCartItem', this.product);
        },
        removeCartItem() {
            this.$store.dispatch('cart/removeCartItem', this.product);
        }
    }
}
</script>
<style scoped>
.cart-item-row {
    border-bottom: 1px solid #ccc;
    margin-top: 20px;
}

.cart-remove-button {
    margin-top: 10px;
}
</style>
