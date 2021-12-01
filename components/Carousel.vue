<template>
  <nav>
    <ul id="product-list">
      <li v-for="product in shuffledProducts" :key="product.id" class="product">
        <a href="">
          <img :src="product.image" :alt="product.name" />
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
          </div>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { shuffleArray } from "./utility";

export default {
  mounted() {
    this.shuffledProducts = shuffleArray(this.products);
  },
  props: {
    products: Array,
  },
  data() {
    return {
      shuffledProducts: [],
    };
  },
};
</script>
