<template>
  <v-card
    class="product-card pa-4 d-flex flex-column align-center justify-space-between"
    elevation="1"
    rounded="xl"
    style="position: relative"
  >
    <!-- Favorite Icon -->
    <v-btn
      icon
      variant="text"
      size="small"
      class="favorite-btn"
      @click="$emit('favorite')"
    >
      <v-icon size="20">{{ isFavorite ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
    </v-btn>

    <!-- Product Image -->
    <v-img
      :src="image"
      aspect-ratio="1"
      width="100%"
      class="mb-4"
      cover
    />

    <!-- Product Info -->
    <div class="text-center">
      <div class="text-body-1 font-weight-medium mb-1">
        {{ title }}
      </div>
      <div class="text-h6 font-weight-bold mb-4">${{ price }}</div>
    </div>

    <!-- Buy Button -->
    <v-btn
      color="black"
      class="text-white"
      rounded="lg"
      block
      @click="$emit('buy')"
    >
      {{ buttonLabel }}
    </v-btn>
  </v-card>
</template>

<script setup>
defineProps({
  image: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: [Number, String], required: true },
  buttonLabel: { type: String, default: 'Buy Now' },
  isFavorite: { type: Boolean, default: false }
})

defineEmits(['buy', 'favorite'])
</script>

<style scoped>
.product-card {
  background-color: #f9f9f9;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.product-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}
.favorite-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
}
</style>
