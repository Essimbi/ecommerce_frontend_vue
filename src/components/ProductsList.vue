<script setup>
import { defineProps } from 'vue';
import ProductsListItem from './ProductsListItem.vue';

const props = defineProps(['products'])

</script>

<template>
    <div v-if="props.products.length > 0 ">
        <ProductsListItem v-for="(product, index) in props.products" :key="index" :product="product" />
    </div>
    <p v-else> You haven't added anything in your cart yet !</p>
</template>

<style>

</style>