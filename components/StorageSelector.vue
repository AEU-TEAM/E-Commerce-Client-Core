<template>
  <v-btn-toggle v-model="selectedStorage" class="mb-4" rounded>
    <v-btn v-for="option in storageOptions" :key="option">{{ option }}</v-btn>
  </v-btn-toggle>
</template>

<script setup>
import { ref } from 'vue'

const selectedStorage = ref('128GB')
const storageOptions = ['128GB', '256GB', '512GB', '1TB']
</script>

---
// components/SpecsGrid.vue
---
<template>
  <v-row dense>
    <v-col cols="6" sm="4" v-for="spec in specs" :key="spec.label">
      <v-card class="pa-2 text-center" outlined>
        <v-icon class="mb-1">{{ spec.icon }}</v-icon>
        <div class="font-weight-medium">{{ spec.label }}</div>
        <div class="text-caption">{{ spec.value }}</div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
const specs = [
  { label: 'Screen Size', value: '6.7"', icon: 'mdi-cellphone' },
  { label: 'CPU', value: 'Apple A16 Bionic', icon: 'mdi-chip' },
  { label: 'Cores', value: '6', icon: 'mdi-memory' },
  { label: 'Main Camera', value: '48+12+12 MP', icon: 'mdi-camera' },
  { label: 'Front Camera', value: '12 MP', icon: 'mdi-camera-front' },
  { label: 'Battery', value: '4323 mAh', icon: 'mdi-battery-charging' }
]
</script>