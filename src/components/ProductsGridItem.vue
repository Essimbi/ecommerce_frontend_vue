<script setup>
import { defineProps } from 'vue';

const props = defineProps(['product'])

</script>

<template>
    <div class="product-item">
        <img :src="props.product.imageUrl" :alt="props.product.name">
        <h3 class="product-name"> {{ props.product.name }} </h3>
        <p class="product-price">$ {{ props.product.price }}</p>
        <router-link :to="'products/' + props.product.id">
            <button>View Details</button>
        </router-link>
    </div>
</template>

<style scoped>
.product-item {
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 2px 5px #888;
    display: flex;
    flex-direction: column;
    margin-bottom: 2%;
    padding: 20px;
    position: relative;
    width: 32%;
}

.product-name {
    margin-bottom: 0;
}

img {
    height: 200px;
    width: 200px;
}

a {
    width: 100%;
}

button {
    width: 100%;
}
</style>