<template>
  <div>
    <h1 class="text-h4 font-weight-bold">{{ product.name }}</h1>
    <v-rating :model-value="product.rating" color="amber" dense readonly />
    <p class="text-h5 text-primary mt-2">${{ product.price }}</p>
    <p class="mt-4">{{ product.description }}</p>
    <v-btn color="primary" class="mt-4" @click="$emit('add-to-cart')">Add to Cart</v-btn>
  </div>
</template>

<script setup>
defineProps({ product: Object })
</script>
