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

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
