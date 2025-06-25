<template>
  <v-img :src="selectedImage" class="rounded-lg" height="400px" />
  <v-row class="mt-2" dense>
    <v-col v-for="(img, i) in images" :key="i" cols="3">
      <v-img :src="img" @click="selectedImage = img" class="rounded cursor-pointer" height="80" />
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue'

const images = [
  '/img/front.png',
  '/img/back.png',
  '/img/side1.png',
  '/img/side2.png'
]

const selectedImage = ref(images[0])
</script>