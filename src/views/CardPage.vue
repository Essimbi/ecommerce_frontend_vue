<script setup>
import { cartItems } from '@/fake-data';
import { computed } from 'vue';
import ProductsList from '@/components/ProductsList.vue';

const totalPrice = computed(() => {
  return cartItems.reduce(
    (sum, item) => sum + Number(item.price),
    0,
  )
})

</script>

<template>
    <div id="page-wrap">
      <h1>Shoping cart</h1>
      <ProductsList :products="cartItems" />
      <h3 id="total-price">$ {{ totalPrice }}</h3>
      <button id="checkout-button">Proceed to checkout</button>
    </div>
</template>

<style scoped>
  h1 {
    border-bottom: 1px solid black;
    margin: 0;
    margin-top: 16px;
    padding: 16px;
  }

  #total-price {
    padding: 16px;
    text-align: right;
  }

  #checkout-button {
    width: 100%;
  }
</style>