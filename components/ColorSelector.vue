<!-- SpecsGrid.vue -->
<template>
  <v-row dense>
    <v-col cols="6" sm="4" v-for="spec in specs" :key="spec.label">
      <v-card class="pa-2" outlined>
        <v-icon class="mr-1">{{ spec.icon }}</v-icon>
        <strong>{{ spec.label }}</strong
        >: {{ spec.value }}
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
const specs = [
  { label: "Screen Size", value: '6.7"', icon: "mdi-cellphone" },
  { label: "CPU", value: "Apple A16 Bionic", icon: "mdi-chip" },
  { label: "Cores", value: "6", icon: "mdi-memory" },
  { label: "Main Camera", value: "48+12+12 MP", icon: "mdi-camera" },
  { label: "Front Camera", value: "12 MP", icon: "mdi-camera-front" },
  { label: "Battery", value: "4323 mAh", icon: "mdi-battery-charging" },
];
</script>
