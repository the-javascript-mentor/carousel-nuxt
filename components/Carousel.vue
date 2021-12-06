<template>
  <div class="carousel-wrapper">
    <button class="button" @click="scrollLeft" :disabled="isCarouselMoving">
      👈
    </button>
    <nav>
      <ul class="product-list" ref="productList" @scroll="productListScroll">
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
    <button class="button" @click="scrollRight" :disabled="isCarouselMoving">
      👉
    </button>
  </div>
</template>

<script>
import {
  shuffleArray,
  productWidth,
  getNumberOfVisibleCarouselItems,
  moveLastItemInTheFirstPosition,
  moveFirstItemInTheLastPosition,
} from "./utility";

export default {
  mounted() {
    this.shuffledProducts = shuffleArray(this.products);
    this.$nextTick(() => {
      this.$refs.productList.scrollTo({
        left: productWidth,
      });
    });
    this.numberOfVisibleCarouselItems = getNumberOfVisibleCarouselItems();
    window.addEventListener("resize", this.windowResize);
    this.autoplayIntervalId = setInterval(() => {
      this.$refs.productList.scrollBy({
        left: productWidth,
        behavior: "smooth",
      });
    }, 5000);
  },
  props: {
    products: Array,
  },
  data() {
    return {
      shuffledProducts: [],
      isCarouselMoving: false,
      numberOfVisibleCarouselItems: 4,
      autoplayIntervalId: null,
    };
  },
  destroyed() {
    window.removeEventListener("resize", this.windowResize);
  },
  methods: {
    windowResize: function () {
      const newNumberOfVisibleCarouselItems = getNumberOfVisibleCarouselItems();
      const areWeSuddenlyShowingMoreItems =
        newNumberOfVisibleCarouselItems > this.numberOfVisibleCarouselItems;
      if (
        newNumberOfVisibleCarouselItems !== this.numberOfVisibleCarouselItems
      ) {
        this.numberOfVisibleCarouselItems = newNumberOfVisibleCarouselItems;
        if (areWeSuddenlyShowingMoreItems) {
          // If we're all the way to the right
          if (
            this.$refs.productList.scrollLeft ===
            productWidth *
              (this.shuffledProducts.length - this.numberOfVisibleCarouselItems)
          ) {
            // Scroll back by one product
            this.$nextTick(() => {
              this.$refs.productList.scrollTo({
                left:
                  productWidth *
                  (this.shuffledProducts.length -
                    this.numberOfVisibleCarouselItems -
                    1),
              });
            });
          }
        }
      }
    },
    scrollRight: function () {
      clearInterval(this.autoplayIntervalId);
      if (!this.isCarouselMoving) {
        this.isCarouselMoving = true;
        this.$refs.productList.scrollBy({
          left: productWidth,
          behavior: "smooth",
        });
      }
    },
    scrollLeft: function () {
      clearInterval(this.autoplayIntervalId);
      if (!this.isCarouselMoving) {
        this.isCarouselMoving = true;
        this.$refs.productList.scrollBy({
          left: -productWidth,
          behavior: "smooth",
        });
      }
    },
    productListScroll: function () {
      if (this.$refs.productList.scrollLeft % productWidth === 0) {
        this.isCarouselMoving = false;
        // If we scrolled all the way to the left,
        // move the last item in the first position
        if (this.$refs.productList.scrollLeft === 0) {
          this.shuffledProducts = moveLastItemInTheFirstPosition(
            this.shuffledProducts
          );
          // Scroll to the second last element
          this.$nextTick(() => {
            this.$refs.productList.scrollTo({
              left: productWidth,
            });
          });
        }
        // If we scrolled all the way to the right,
        // move the first item in the last position
        if (
          this.$refs.productList.scrollLeft ===
          productWidth *
            (this.shuffledProducts.length - this.numberOfVisibleCarouselItems)
        ) {
          this.shuffledProducts = moveFirstItemInTheLastPosition(
            this.shuffledProducts
          );
          // Scroll to the second last element
          this.$nextTick(() => {
            this.$refs.productList.scrollTo({
              left:
                productWidth *
                (this.shuffledProducts.length -
                  this.numberOfVisibleCarouselItems -
                  1),
            });
          });
        }
      }
    },
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
  .product-list {
    width: calc(3 * 240px);
  }
  .product {
    width: calc(100% / 3);
  }
}

@media (max-width: 920px) {
  .product-list {
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
