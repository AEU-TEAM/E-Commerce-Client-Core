<template>
  <v-container>
    <!-- Title + Arrows Row -->
    <div class="d-flex justify-space-between align-center mb-4">
      <h2 class="text-h6 font-weight-bold">Browse By Category</h2>
      <div class="d-flex">
        <v-btn icon variant="text" @click="scrollLeft">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn icon variant="text" @click="scrollRight">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </div>
  </v-container>

  <!-- Scrollable Category Cards -->
  <v-container fluid>
    <div 
      ref="scrollContainer" 
      class="d-flex justify-center overflow-x-auto hide-scrollbar"
    >
      <v-card
        v-for="(category, index) in categories"
        :key="index"
        class="d-flex flex-column align-center justify-center mx-2 flex-shrink-0"
        height="120"
        width="140"
        color="#f2f2f2"
        rounded="lg"
        flat
      >
        <v-icon size="32" class="mb-2">{{ category.icon }}</v-icon>
        <span class="text-body-2 font-weight-medium">{{ category.title }}</span>
      </v-card>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const scrollContainer = ref(null)

const categories = [
  { title: 'Phones', icon: 'mdi-cellphone' },
  { title: 'Smart Watches', icon: 'mdi-watch-variant' },
  { title: 'Cameras', icon: 'mdi-camera-outline' },
  { title: 'Headphones', icon: 'mdi-headphones' },
  { title: 'Computers', icon: 'mdi-monitor' },
  { title: 'Gaming', icon: 'mdi-gamepad-variant' },
]

const scrollLeft = () => {
  scrollContainer.value.scrollBy({ left: -200, behavior: 'smooth' })
}
const scrollRight = () => {
  scrollContainer.value.scrollBy({ left: 200, behavior: 'smooth' })
}
</script>


<style scoped>
.hide-scrollbar {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}
.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}
.text-h6 {
  font-size: 24px;
}
</style>

