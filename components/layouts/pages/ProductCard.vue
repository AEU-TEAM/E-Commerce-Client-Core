<template>
    <v-container>
      <v-card class="mx-auto" max-width="400">
        <v-img
          src=data:image/jpeg;base64,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
          height="200px"
          contain
        ></v-img>
        <v-card-title class="text-h6">
          Apple iPhone 14 Pro Max 128GB Deep Purple
        </v-card-title>
        <v-card-subtitle class="text-h5">
          $900
        </v-card-subtitle>
        <v-card-actions>
          <v-btn color="primary" @click="buyNow">
            Buy Now
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="toggleFavorite">
            <v-icon>{{ isFavorite ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isFavorite: false,
      }
    },
    methods: {
      buyNow() {
        // Implement buy now action
        alert("Item added to cart!");
      },
      toggleFavorite() {
        this.isFavorite = !this.isFavorite;
      }
    }
  }
  </script>
  
  <style scoped>
  .v-card {
    padding: 16px;
  }
  </style>
  