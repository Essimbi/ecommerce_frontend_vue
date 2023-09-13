<script setup>
import { products } from '@/fake-data';
import { useRoute } from 'vue-router'

import NotFoundPage from '@/views/NotFoundPage.vue'

const route = useRoute()

const product = products.find((p) => p.id === route.params?.id)

</script>

<template>
    <div id="page-wrap" v-if="product">
      <div id="image-wrap">
        <img :src="product.imageUrl" :alt="product.imageUrl">
      </div>
      <div id="product-details">
        <h1>{{ product.name }}</h1>
        <h3 id="price">${{ product.price }}</h3>
        <p>Avrage rating: {{ product.averageRating }}</p>
        <button id="add-to-cart">Add to cart</button>
        <h4>Description</h4>
        <p>{{ product.description }}</p>
      </div>
    </div>

    <NotFoundPage v-else />

</template>

<style scoped>
  #page-wrap {
    margin-top: 16px;
    padding: 16px;
    max-width: 600px;
  }

  #img-wrap {
    text-align: center;
  }

  img {
    width: 400px;
  }

  #product-details {
    padding: 16px;
    position: relative;
  }

  #add-to-cart {
    width: 100%;
  }

  #price {
    position: absolute;
    top: 24px;
    right: 16px;
  }
</style>