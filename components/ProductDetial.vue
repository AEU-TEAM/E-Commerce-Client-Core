<template>
  <v-app id="inspire">
    <Navbar />
    <!-- ProductPage.vue -->
    <v-container>
      <v-row>
        <!-- Left Column: Images -->
        <v-col cols="12" md="5">
          <ProductImage />
        </v-col>

        <!-- Right Column: Details -->
        <v-col cols="12" md="7">
          <v-card flat>
            <v-row>
              <v-col>
                <h2 class="text-h4 font-weight-bold">
                  $1499 <s class="text-grey">$1499</s>
                </h2>
                <ColorSelector />
                <StorageSelector />
                <SpecsGrid />
                <Description />
                <v-row class="mt-4">
                  <v-col cols="6">
                    <v-btn block color="primary">Add to Wishlist</v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-btn block color="success">Add to Cart</v-btn>
                  </v-col>
                </v-row>
                <v-row class="mt-4" justify="space-around">
                  <v-icon>mdi-truck-fast</v-icon> Free Delivery
                  <v-icon>mdi-store</v-icon> In Stock
                  <v-icon>mdi-shield-check</v-icon> Guaranteed
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </v-app>
</template>

<script setup>
import ProductImage from "@/components/ProductImage.vue";
import ColorSelector from "@/components/ColorSelector.vue";
import StorageSelector from "@/components/StorageSelector.vue";
import SpecsGrid from "@/components/SpecsGrid.vue";
import Description from "@/components/Description.vue";
</script>
