<template>
  <div class="carousel-wrapper">
    <button class="button">👈</button>
    <nav>
      <ul class="product-list">
        <li
          v-for="product in shuffledProducts"
          :key="product.id"
          class="product"
        >
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
    <button class="button">👉</button>
  </div>
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

<style>
.carousel-wrapper {
  display: flex;
  gap: 10px;
  align-items: center;
}
.button {
  font-size: 48px;
  padding: 10px;
  line-height: 1;
  border-radius: 50%;
  cursor: pointer;
}

.product-list {
  list-style-type: none;
  width: calc(4 * 240px);
  height: 240px;
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.product {
  width: calc(100% / 4);
  height: 100%;
  border: 1px solid black;
  position: relative;
  display: flex;
  flex-shrink: 0;
  scroll-snap-align: start;
}

@media (max-width: 1280px) {
  #product-list {
    width: calc(3 * 240px);
  }
  .product {
    width: calc(100% / 3);
  }
}

@media (max-width: 920px) {
  #product-list {
    width: calc(2 * 240px);
  }
  .product {
    width: calc(100% / 2);
  }
}

.product a {
  display: block;
  width: 100%;
  height: 100%;
}

.product img {
  position: absolute;
  width: 100%;
  height: 100%;
}

.product .product-info {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  flex-direction: column;
  color: white;
  padding: 10px;
  font-family: sans-serif;
  background: linear-gradient(
    0deg,
    hsla(0, 0%, 0%, 1) 0%,
    hsla(0, 0%, 0%, 0) 100%
  );
}
</style>
