<template>
  <Navbar />
  <v-container class="mt-15" fluid>
    <v-row>
      <v-col cols="12" md="6">
        <v-img :src="product.thumbnail" height="400px" class="rounded-xl" />
      </v-col>
      <v-col cols="12" md="6">
        <ProductInfo :product="product" @add-to-cart="addToCart" />
      </v-col>
    </v-row>

    <v-divider class="my-6"></v-divider>

    <ProductReviews :reviews="product.reviews" />

    <ReviewForm :productId="product.id" @submit="submitReview" />
  </v-container>
  <Footer />
</template>

<script setup>
import { useRoute } from "vue-router";
import ProductInfo from "@/components/Product/ProductInfo.vue";
import ProductReviews from "@/components/Product/ProductReviews.vue";
import ReviewForm from "@/components/Product/ReviewForm.vue";

const productStore = useProductStore();
const product = computed(() => productStore.selectedProduct);
// Simulated product fetching
const route = useRoute();

const addToCart = () => {
  alert("Added to cart!");
};

const submitReview = (review) => {
  product.value.reviews.push(review);
};
</script>
