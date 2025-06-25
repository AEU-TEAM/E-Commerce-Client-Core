<template>
  <Navbar />
  <v-container class="mt-15 black white--text" fluid>
    <v-row>
      <!-- Sidebar Filters -->
      <v-col cols="12" md="2">
        <v-card
          outlined
          class="pa-3 sticky-top black white--text"
          style="top: 20px">
          <h5 class="mb-3 text-center">Filters</h5>

          <!-- Category Filter -->
          <v-subheader class="mb-1">Category</v-subheader>
          <v-checkbox
            v-for="cat in categories"
            :key="cat"
            :label="cat"
            :value="cat"
            v-model="filters.category"
            dense
            hide-details />

          <!-- Brand Filter -->
          <v-divider class="my-2" />
          <v-subheader class="mb-1">Brand</v-subheader>
          <v-select
            v-model="filters.brand"
            :items="brands"
            label="Brand"
            clearable
            dense
            hide-details />

          <!-- Shop Filter -->
          <v-divider class="my-2" />
          <v-subheader class="mb-1">Shop</v-subheader>
          <v-select
            v-model="filters.shop"
            :items="shops"
            label="Shop"
            clearable
            dense
            hide-details />

          <!-- Branch Filter -->
          <v-divider class="my-2" />
          <v-subheader class="mb-1">Location</v-subheader>
          <v-select
            v-model="filters.branch"
            :items="branches"
            label="Branch"
            clearable
            dense
            hide-details />

          <!-- Price Range -->
          <v-divider class="my-2" />
          <v-subheader class="mb-1">Price Range ($)</v-subheader>
          <v-range-slider
            v-model="filters.price"
            :min="minPrice"
            :max="maxPrice"
            step="5"
            hide-details />
          <div class="d-flex justify-space-between text-caption">
            <span>${{ filters.price[0] }}</span>
            <span>${{ filters.price[1] }}</span>
          </div>

          <v-btn class="mt-3 white black--text" text @click="resetFilters">
            Reset Filters
          </v-btn>
        </v-card>
      </v-col>

      <!-- Products Grid -->
      <v-col cols="12" md="10">
        <v-row dense>
          <v-col
            v-for="product in filteredProducts"
            :key="product.id"
            cols="12"
            sm="6"
            md="3"
            class="fade-in">
            <ProductCard
              :image="product.thumbnail"
              :title="product.name"
              :price="product.price"
              :isFavorite="product.isFavorite"
              @buy="buyNow(product)"
              @favorite="toggleFavorite"
              @viewDetail="viewDetail(product)"
              @addToCart="addToCart(product)"
              @addToWishlist="addToWishlist(product)" />
          </v-col>

          <!-- No results -->
          <v-col
            v-if="filteredProducts.length === 0"
            cols="12"
            class="text-center white--text">
            <v-icon color="grey" size="48">mdi-magnify-close</v-icon>
            <p class="text-subtitle-1 mt-2">No products match your filters.</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  <Footer />
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useProductStore } from "@/stores/productStore.ts";

const router = useRouter();
const categories = ["Electronics", "Fashion", "Home"];
const brands = ["Sony", "Apple", "Nike", "Adidas", "Philips"];
const shops = ["Shop A", "Shop B", "Shop C", "Shop D", "Shop E", "Shop F"];
const branches = ["Phnom Penh", "Siem Reap", "Battambang"];
const productStore = useProductStore();
const products = ref(productStore.productsShop || []);
const minPrice = Math.floor(Math.min(...products.value.map((p) => p.price)));
const maxPrice = Math.ceil(Math.max(...products.value.map((p) => p.price)));

const filters = ref({
  category: [],
  brand: null,
  shop: null,
  branch: null,
  price: [minPrice, maxPrice],
});

const filteredProducts = computed(() => {
  return products.value.filter((p) => {
    const f = filters.value;
    return (
      (!f.category.length || f.category.includes(p.category)) &&
      (!f.brand || p.brand === f.brand) &&
      (!f.shop || p.shop === f.shop) &&
      (!f.branch || p.branch === f.branch) &&
      p.price >= f.price[0] &&
      p.price <= f.price[1]
    );
  });
});

function addToCart(product) {
  alert(`Added "${product.name}" to cart!`);
}

function buyNow(product) {
  alert(`Buying "${product.name}" now!`);
}

function addToWishlist(product) {
  alert(`Added "${product.name}" to wishlist!`);
}

function viewDetail(product) {
  productStore.setProduct(product);
  console.log(productStore.selectedProduct)
  router.push(`/product/${product.id}`);
}

function resetFilters() {
  filters.value = {
    category: [],
    brand: null,
    shop: null,
    branch: null,
    price: [minPrice, maxPrice],
  };
}
</script>

<style scoped>
.sticky-top {
  position: sticky;
  top: 20px;
  z-index: 1;
}

.hoverable {
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.hoverable:hover {
  box-shadow: 0 6px 18px rgba(255, 255, 255, 0.15);
  transform: translateY(-3px);
}

.fade-in {
  animation: fadeIn 0.6s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.action-btn {
  color: black;
  border-color: black;
  margin-right: 6px;
  transition: all 0.3s ease;
}
.action-btn:hover {
  background-color: white;
  color: black;
}

.add-cart-btn {
  background-color: white;
  color: black;
  font-weight: 500;
  text-transform: none;
  padding: 6px 14px;
  transition: background-color 0.3s ease;
}
.add-cart-btn:hover {
  background-color: #e0e0e0;
}
</style>
