<template>
    <v-container fluid class="py-12">
      <v-row>
        <v-col
          v-for="(product, index) in products"
          :key="index"
          cols="12"
          md="3"
          class="d-flex flex-column align-center text-center pa-6"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              :elevation="isHovering ? 8 : 2"
              class="transition-all duration-300 d-flex flex-column align-center justify-between"
              :color="product.dark ? '#1e1e1e' : '#f8f8f8'"
              flat
              height="100%"
            >
              <v-img
                :src="product.image"
                alt="Product Image"
                width="100%"
                height="200"
                contain
                class="my-6"
              />
              <div class="pa-4">
                <h2 class="text-h6 font-weight-bold mb-2" :class="product.dark ? 'white--text' : ''">
                  {{ product.title }}
                </h2>
                <p class="text-body-2 mb-6" :class="product.dark ? 'white--text' : ''">
                  {{ product.description }}
                </p>
  
                <v-btn
                  :color="product.dark ? 'white' : 'black'"
                  :text="!product.dark"
                  variant="outlined"
                  class="mt-2"
                >
                  Shop Now
                </v-btn>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  const products = [
    {
      title: "Popular Products",
      description: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      image: "/images/huawei-watch.png",
      dark: false,
    },
    {
      title: "Ipad Pro",
      description: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      image: "/images/ipad-pro.png",
      dark: false,
    },
    {
      title: "Samsung Galaxy",
      description: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      image: "/images/galaxy-fold.png",
      dark: false,
    },
    {
      title: "Macbook Pro",
      description: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      image: "/images/macbook-pro.png",
      dark: true,
    },

  ];
  </script>
  
  <style scoped>
  .transition-all {
    transition: all 0.3s ease;
  }
  .duration-300 {
    transition-duration: 300ms;
  }
  </style>
  