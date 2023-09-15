<script setup>
import { defineProps } from 'vue';

const props = defineProps(['product'])
</script>

<template>
    <div class="product-container">
        <img :src="props.product.imageUrl" :alt="props.product.name" class="product-image">
        <div class="details-wrap">
            <h3>{{ props.product.name }}</h3>
            <p>${{ props.product.price }}</p>
        </div>
        <button class="remove-button">Remove from cart</button>
    </div>
</template>

<style scoped>
.product-container {
    align-content: 'center';
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 16px;
    width: 100%;
}

.product-image {
    flex: 1;
    height: 100px;
    max-width: 100px;
}

.details-wrap {
    padding: 0 16px;
    flex: 3;
}

.remove-button {
    flex: 1;
    margin: auto;
}
</style>