<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="text-center">Browse By Category</h2>
        </v-col>
      </v-row>
      <v-row justify="space-between" align="center">
        <v-col cols="auto">
          <v-btn icon>
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn icon>
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="center" no-wrap>
        <v-col v-for="category in categories" :key="category.title" cols="2" class="text-center">
          <v-card class="pa-4" outlined>
            <v-icon large>{{ category.icon }}</v-icon>
            <div class="mt-2">{{ category.title }}</div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        categories: [
          { title: 'Phones', icon: 'mdi-cellphone' },
          { title: 'Smart Watches', icon: 'mdi-watch' },
          { title: 'Cameras', icon: 'mdi-camera' },
          { title: 'Headphones', icon: 'mdi-headphones' },
          { title: 'Computers', icon: 'mdi-desktop-classic' },
          { title: 'Gaming', icon: 'mdi-gamepad-variant' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .v-card {
    cursor: pointer;
  }
  </style>