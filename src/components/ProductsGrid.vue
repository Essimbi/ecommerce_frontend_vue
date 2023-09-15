<script setup>
import { defineProps } from 'vue';
import ProductsGridItem from './ProductsGridItem.vue';

const props = defineProps(['products'])

</script>

<template>
    <div class="grid-wrap">
        <ProductsGridItem v-for="(product, index) in props.products" :key="index" :product="product" />
    </div>
</template>

<style scoped>
  .grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
  }
</style>