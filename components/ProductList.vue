<template>
  <v-card>
    <v-container>
      <v-tabs v-model="tab" align-tabs="start" color="deep-purple-accent-4">
        <v-tab v-for="tab in tabOptions" :value="tab.id">{{ tab.name }}</v-tab>
      </v-tabs>
    </v-container>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item
        v-for="tab in tabOptions"
        :key="tab.id"
        :value="tab.id">
        <v-container>
          <v-row>
            <v-col
              v-for="product in userProductStore.getProductsShop"
              :key="product.id"
              cols="5"
              xxl="2"
              xl="2"
              lg="4"
              md="5"
              sm="6">
              <ProductCard
                :image="product.thumbnail"
                :title="product.name"
                :price="product.price"
                :isFavorite="product.isFavorite"
                :isInCart="
                  userProductStore.getCartList.some(
                    (it) => it.id === product.id
                  )
                "
                @buy="handleBuy"
                @addToCart="userProductStore.addToCart(product)"
                @addToWishlist="userProductStore.toggleFavorite(product.id)" />
              />
            </v-col>
          </v-row>
        </v-container>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card>
</template>
<script setup>
import { useProductStore } from "@/stores/productStore.ts";
import { ref } from "vue";

const tab = ref(null);
const userProductStore = useProductStore();
const tabOptions = [
  { id: 1, name: "New Arrival" },
  { id: 2, name: "BestSeller" },
  { id: 3, name: "Featured Products" },
];
</script>

<style scoped>
.v-card {
  position: relative;
}
</style>
