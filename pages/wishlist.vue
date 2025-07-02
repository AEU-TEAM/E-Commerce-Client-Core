<template>
  <v-app id="inspire">
    <Navbar />
    <v-container fluid class="mt-15">
      <h2 class="text-h5 font-weight-bold mb-4">My Wishlist</h2>

      <v-row>
        <v-col v-for="item in userProductStore.getWishlist" :key="item.id" cols="12" md="4" lg="2">
          <v-card class="rounded-xl elevation-2">
            <v-img
              :src="item.thumbnail"
              height="300px"
              cover
              class="rounded-t-xl" />
            <v-card-text>
              <div class="font-weight-medium text-md mb-1">
                {{ item.name }}
              </div>
              <div class="text-grey text-sm mb-2">
                {{ item.variant.name }}
              </div>
              <div class="d-flex justify-space-between align-center">
                <span class="text-primary text-lg font-weight-bold">
                  ${{ item.price }}
                </span>
                <v-btn icon @click="userProductStore.toggleFavorite(item.id)">
                  <v-icon color="warning">mdi-heart</v-icon>
                </v-btn>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block @click="userProductStore.addToCart(item)">
                Add to Cart
                <v-icon end>mdi-cart</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-alert
        v-if="userProductStore.getWishlist.length === 0"
        type="info"
        border="start"
        elevation="2"
        class="mt-10">
        Your wishlist is empty. Start adding some favorite products!
      </v-alert>
    </v-container>
    <Footer />
  </v-app>
</template>

<script setup>
import { useProductStore } from "@/stores/productStore.ts";

const userProductStore = useProductStore();
// const wishlist = userProductStore.getWishlist;
onMounted(() => {
  // Initialize or fetch any necessary data here
  userProductStore.loadWishlist();
});
</script>