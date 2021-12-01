<template>
  <Carousel :products="products" />
</template>

<script>
import products from "./products";

export default {
  data() {
    return {
      products,
    };
  },
};
</script>
