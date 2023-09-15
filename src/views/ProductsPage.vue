<script setup>
import { products } from '@/fake-data';
import ProductsGrid from '@/components/ProductsGrid.vue';
</script>

<template>
    <div id="page-wrap">
      <ProductsGrid :products="products" />
    </div>
</template>
