<template>
  <Navbar/>
  <v-container class="mt-15" fluid>
    <v-row dense>
      <!-- Filters Sidebar -->
      <v-col cols="12" md="3">
        <v-card outlined class="pa-4 sticky-top" style="top: 20px">
          <h5 class="mb-4">Filters</h5>

          <!-- Category Filter -->
          <v-subheader class="mb-2">Category</v-subheader>
          <v-checkbox
            v-for="cat in categories"
            :key="cat"
            :label="cat"
            :value="cat"
            v-model="filters.category"
            dense
            hide-details />

          <v-divider class="my-4"></v-divider>

          <!-- Price Range -->
          <v-subheader class="mb-2">Price Range ($)</v-subheader>
          <v-range-slider
            v-model="filters.price"
            :min="minPrice"
            :max="maxPrice"
            step="5"
            ticks="always"
            hide-details></v-range-slider>
          <div class="d-flex justify-space-between text-caption">
            <span>${{ filters.price[0] }}</span>
            <span>${{ filters.price[1] }}</span>
          </div>

          <v-btn class="mt-4" color="secondary" text @click="resetFilters">
            Reset Filters
          </v-btn>
        </v-card>
      </v-col>

      <!-- Product Grid -->
      <v-col cols="12" md="9">
        <v-row dense>
          <v-col
            v-for="product in filteredProducts"
            :key="product.id"
            cols="12"
            sm="6"
            md="4">
            <v-card outlined elevation="2" class="hoverable">
              <v-img :src="product.image" height="200px" />
              <v-card-title class="text-h6">{{ product.name }}</v-card-title>
              <v-card-subtitle class="text-subtitle-1 text--primary"
                >${{ product.price.toFixed(2) }}</v-card-subtitle
              >
              <v-card-text class="mb-3">
                <v-rating
                  v-model="product.rating"
                  readonly
                  color="amber"
                  dense
                  size="18"></v-rating>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" block @click="addToCart(product)">
                  Add to Cart
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col
            v-if="filteredProducts.length === 0"
            cols="12"
            class="text-center">
            <v-icon color="grey" size="48">mdi-magnify-close</v-icon>
            <p class="text-subtitle-1 mt-2">No products match your filters.</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  <Footer/>
</template>

<script setup>
import { ref, computed } from "vue";

// Sample categories
const categories = ["Electronics", "Fashion", "Home"];

// Sample product list
const products = ref([
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    category: "Electronics",
    image: "/images/productList1.png",
    rating: 4,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 129.99,
    category: "Electronics",
    image: "/images/productList2.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Men's Sneakers",
    price: 89.99,
    category: "Fashion",
    image: "/images/productList3.png",
    rating: 3,
  },
  {
    id: 4,
    name: "Sunglasses",
    price: 39.99,
    category: "Fashion",
    image: "/images/productList5.png",
    rating: 4,
  },
  {
    id: 5,
    name: "Coffee Maker",
    price: 69.99,
    category: "Home",
    image: "/images/productList6.png",
    rating: 4,
  },
  {
    id: 6,
    name: "Desk Lamp",
    price: 45.0,
    category: "Home",
    image: "/images/productList7.png",
    rating: 3,
  },
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    category: "Electronics",
    image: "/images/productList1.png",
    rating: 4,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 129.99,
    category: "Electronics",
    image: "/images/productList2.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Men's Sneakers",
    price: 89.99,
    category: "Fashion",
    image: "/images/productList3.png",
    rating: 3,
  },
  {
    id: 4,
    name: "Sunglasses",
    price: 39.99,
    category: "Fashion",
    image: "/images/productList5.png",
    rating: 4,
  },
  {
    id: 5,
    name: "Coffee Maker",
    price: 69.99,
    category: "Home",
    image: "/images/productList6.png",
    rating: 4,
  },
  {
    id: 6,
    name: "Desk Lamp",
    price: 45.0,
    category: "Home",
    image: "/images/productList7.png",
    rating: 3,
  },
]);

// Price range extremes
const minPrice = Math.floor(Math.min(...products.value.map((p) => p.price)));
const maxPrice = Math.ceil(Math.max(...products.value.map((p) => p.price)));

// Filters reactive state
const filters = ref({
  category: [],
  price: [minPrice, maxPrice],
});

// Computed filtered product list
const filteredProducts = computed(() => {
  return products.value.filter((p) => {
    // Filter by category if selected
    if (
      filters.value.category.length &&
      !filters.value.category.includes(p.category)
    )
      return false;

    // Filter by price range
    if (p.price < filters.value.price[0] || p.price > filters.value.price[1])
      return false;

    return true;
  });
});

function addToCart(product) {
  alert(`Added "${product.name}" to cart!`);
}

function resetFilters() {
  filters.value.category = [];
  filters.value.price = [minPrice, maxPrice];
}
</script>

<style scoped>
.sticky-top {
  position: sticky;
  top: 20px;
}

.hoverable {
  cursor: pointer;
  transition: box-shadow 0.3s ease;
}

.hoverable:hover {
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}
</style>
