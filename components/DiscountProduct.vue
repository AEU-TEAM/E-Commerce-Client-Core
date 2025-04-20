<template>
    <v-container fluid class="py-12">
      <h2 class="text-h5 font-weight-bold mb-8">Discounts up to -50%</h2>
  
      <v-row dense>
        <v-col
          v-for="(item, index) in discountedProducts"
          :key="index"
          cols="12"
          sm="6"
          md="3"
          class="d-flex flex-column align-center"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              class="pa-4 d-flex flex-column align-center justify-between transition-smooth"
              :elevation="isHovering ? 8 : 2"
              :class="{'hover-lift': isHovering}"
              height="100%"
              color="#f8f8f8"
              flat
              rounded="xl"
            >
              <!-- Top Right Heart and Sale Badge -->
              <div class="w-100 d-flex justify-space-between">
                <v-chip
                  color="red"
                  size="small"
                  label
                  class="text-white font-weight-bold"
                >
                  -{{ item.discount }}%
                </v-chip>
  
                <v-btn
                  icon
                  variant="text"
                  :color="item.isFavorited ? 'red' : 'grey-darken-1'"
                  size="small"
                  class="favorite-btn"
                  @click.stop="toggleFavorite(index)"
                >
                  <v-icon>
                    {{ item.isFavorited ? 'mdi-heart' : 'mdi-heart-outline' }}
                  </v-icon>
                </v-btn>
              </div>
  
              <!-- Product Image -->
              <v-img
                :src="item.image"
                alt="Product Image"
                height="140"
                width="150"
                contain
                class="my-4"
              />
  
              <!-- Product Info -->
              <div class="text-center">
                <p class="text-body-1 font-weight-medium mb-2">{{ item.title }}</p>
                <p class="text-h6 font-weight-bold mb-4">${{ item.price }}</p>
  
                <v-btn
                  color="black"
                  class="white--text text-capitalize px-8"
                  rounded
                  size="large"
                >
                  Buy Now
                </v-btn>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </template>

  <script setup>
  import { ref } from 'vue'
  
  const discountedProducts = ref([
    {
      title: 'Apple iPhone 14 Pro 512GB Gold (MQ233)',
      price: 1437,
      discount: 20,
      image: '/images/iphone-14-pro-gold.png',
      isFavorited: false,
    },
    {
      title: 'AirPods Max Silver Starlight Aluminium',
      price: 549,
      discount: 15,
      image: '/images/airpods-max-silver.png',
      isFavorited: false,
    },
    {
      title: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium',
      price: 399,
      discount: 10,
      image: '/images/apple-watch-series9.png',
      isFavorited: false,
    },
    {
      title: 'Apple iPhone 14 Pro 1TB Gold (MQ2V3)',
      price: 1499,
      discount: 25,
      image: '/images/iphone-14-pro-silver.png',
      isFavorited: false,
    },
  ])
  
  const toggleFavorite = (index) => {
    discountedProducts.value[index].isFavorited = !discountedProducts.value[index].isFavorited
  }
  </script>
  
  <style scoped>
  .favorite-btn {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  
  .hover-lift {
    transform: translateY(-8px) scale(1.02);
    transition: all 0.3s ease;
  }
  
  .white--text {
    color: white !important;
  }
  
  .transition-smooth {
    transition: all 0.3s ease;
  }
  </style>
  