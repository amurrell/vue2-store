<template>
    <div class="col mb-4">
        <div class="card">
            <img :src="product.url" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">
                    ${{ product.price }}
                    <br />
                    <small>
                        {{ product.shortdesc }}
                    </small>
                </p>
                <button class="btn btn-primary btn-block" @click="addToCart()" :disabled="itemAlreadyInCart">{{
                itemAlreadyInCart ? "Added" : "Add to Cart" }}</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "Product",
    props: ['product'],
    computed: {
        ...mapState({
            cart: state => state.cart.cart
        }),
        itemAlreadyInCart() {
            let inCart = false;

            this.cart.forEach(item => {
                if (item.id == this.product.id) {
                    inCart = true;
                }
            });

            return inCart;
        }
    },
    methods: {
        addToCart() {
            if (!this.itemAlreadyInCart) {
                this.$store.dispatch("cart/addCartItem", this.product);
            } else {
                alert("item already added to cart");
            }

        }
    }
}
</script>
