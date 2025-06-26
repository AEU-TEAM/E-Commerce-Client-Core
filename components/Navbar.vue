<template>
  <v-app-bar flat class="custom-app-bar bg-black">
    <v-container fluid>
      <v-row align="center" no-gutters>
        <!-- Logo Video -->
        <v-col cols="auto">
          <div class="video-wrapper">
            <video
              src="/videos/Logo.mp4"
              autoplay
              muted
              loop
              playsinline></video>
          </div>
        </v-col>

        <!-- Search Field (Desktop) -->
        <v-col cols="5" class="d-none d-md-flex">
          <v-text-field
            v-model="searchQuery"
            placeholder="Search"
            prepend-inner-icon="mdi-magnify"
            single-line
            hide-details
            class="search-field" />
        </v-col>

        <v-spacer />

        <!-- Desktop Navigation Links -->
        <v-col cols="auto" class="d-none d-lg-flex nav-links">
          <v-btn text to="/">Home</v-btn>
          <v-btn text to="/about">About</v-btn>
          <v-btn text to="/contact">Contact Us</v-btn>
          <v-btn text to="/blog">Blog</v-btn>
        </v-col>

        <!-- Icon Buttons -->
        <v-col cols="auto" class="d-flex align-center">
          <v-btn icon to="/wishlist" class="icon-button">
            <v-badge :content="productStore.getTotalWishlist" color="red">
              <v-icon icon="$vuetify" size="x-large"></v-icon>
            </v-badge>
            <v-icon>mdi-heart-outline</v-icon>
          </v-btn>
          <v-btn icon to="/cart" class="icon-button ml-2">
            <v-badge :content="productStore.getTotalCart" color="red">
              <v-icon icon="$vuetify" size="x-large"></v-icon>
            </v-badge>
            <v-icon>mdi-cart-outline</v-icon>
          </v-btn>
          <v-btn icon to="/profile" class="icon-button ml-2">
            <v-icon>mdi-account-circle-outline</v-icon>
          </v-btn>
          <v-btn text to="/register" class="icon-button ml-2">Register</v-btn>
          <v-btn text to="/login" class="icon-button ml-2">Sign In</v-btn>
        </v-col>

        <!-- Mobile Menu -->
        <v-col cols="auto" class="d-flex d-md-none">
          <v-menu bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item link to="/" title="Home" />
              <v-list-item link to="/about" title="About" />
              <v-list-item link to="/contact" title="Contact Us" />
              <v-list-item link to="/blog" title="Blog" />
              <v-divider />
              <v-list-item link to="/wishlist" title="Wishlist" />
              <v-list-item link to="/cart" title="Cart" />
              <v-list-item link to="/register" title="Register" />
              <v-list-item link to="/signIn" title="Sign In" />
              <v-list-item link to="/profile" title="Profile" />
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
<script setup>
import { useProductStore } from "@/stores/productStore.ts";
import { ref, onMounted } from "vue";
const productStore = useProductStore();
const searchQuery = ref("");
onMounted(() => {
  // Initialize or fetch any necessary data here
  productStore.loadWishlist();
});
</script>

<style scoped>
.custom-app-bar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 65px;
  min-height: 65px;
  z-index: 10;
}

.video-wrapper {
  width: 200px;
  height: 120sspx;
  overflow: hidden;
  padding: 0;
}

.video-wrapper video {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.search-field {
  max-width: 300px;
  width: 100%;
}

.nav-links > .v-btn {
  margin-left: 1rem;
}

.icon-button {
  min-width: auto;
}
</style>
