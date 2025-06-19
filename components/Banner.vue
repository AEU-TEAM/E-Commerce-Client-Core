<template>
    <v-container fluid class="hero-banner" style="background-color: #1c171c">
      <v-row align="center" justify="space-between">
        <!-- Text Section -->
        <v-col cols="12" md="6" justify="center">
          <div class="text-section text-center">
            <h4 class="text-grey-lighten-1 font-weight-bold mb-4">Pro.Beyond.</h4>
            <h1 class="display-1 font-weight-light text-white mb-2">
              IPhone 14 <strong>Pro</strong>
            </h1>
            <p class="text-grey-lighten-1 text-body-1 mb-6">
              Created to change everything for the better. For everyone
            </p>
            <v-btn
              color="white"
              variant="outlined"
              class="text-black"
              width="191"
              heigh="56"
              rounded="lg"
              size="large"
              to="/shop"
            >
              Shop Now
            </v-btn>
          </div>
        </v-col>
  
        <!-- Image Section -->
        <v-col cols="12" md="6" class="text-center">
          <v-img
            src="/images/iphone-14-pro.png"
            max-width="500"
            cover
            class="mx-auto"
          />
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  // No script needed unless you want to add interactivity
  </script>
  
  <style scoped>
  .hero-banner {
    min-height: 500px;
  }
  
  .display-1 {
    font-size: 96px;
    line-height: 1.1;
  }
  .text-grey-lighten-1 {
    font-size:25px;
  }
  
  .text-section strong {
    font-weight: 900px;
  }
  
  @media (max-width: 960px) {
    .display-1 {
      font-size: 2.5rem;
    }
  }
  </style>
  