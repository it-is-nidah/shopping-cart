<template>
  <div class="product-list">
    <h1>Product List</h1>
    <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif" />
    <ul v-else>
      <li 
      v-for="product in products" 
      :key="product">{{product.title}} - {{product.price}}
      <button @click="addProductToCart(product)">Add to Cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  data() {
    return {
      loading: false
    };
  },
  computed: {
    products() {
      return this.$store.getters.availableProducts;
    }
  },

  methods: {
    addProductToCart(product) {
      this.$store.dispatch('addProductToCart',product)
    }
  },

  created() {
    this.loading = true;
    this.$store.dispatch("fetchProducts").then(() => (this.loading = false));
  }
};
</script>

<style>
</style>  