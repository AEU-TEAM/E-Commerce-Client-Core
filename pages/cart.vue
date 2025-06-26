<template>
  <v-app id="inspire">
    <Navbar />
    <v-container class="mt-15 h-100" fluid>
      <v-row>
        <v-col cols="12" md="8" v-if="cart.length">
          <v-card v-for="item in cart" :key="item.id" class="mb-4 rounded-xl">
            <v-row no-gutters>
              <v-col cols="4">
                <v-img :src="item.thumbnail" height="120px" width="30%" cover />
              </v-col>

              <v-col cols="8">
                <v-card-title>{{ item.name }}</v-card-title>
                <v-card-subtitle>{{ item.variant.name }}</v-card-subtitle>

                <v-card-text>
                  <div class="d-flex align-center justify-space-between">
                    <div class="font-weight-bold text-primary">
                      ${{ item.price }}
                    </div>

                    <div class="d-flex align-center">
                      <v-btn icon size="small" @click="decrease(item)">
                        <v-icon>mdi-minus</v-icon>
                      </v-btn>
                      <span class="mx-2">{{ item.quantity }}</span>
                      <v-btn icon size="small" @click="increase(item)">
                        <v-icon>mdi-plus</v-icon>
                      </v-btn>
                    </div>

                    <v-btn icon color="red" @click="remove(item.id)">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </div>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" md="8" v-else>
          <v-alert type="info" class="text-center">
            Your cart is empty. Start shopping!
          </v-alert>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="pa-4 rounded-xl elevation-2">
            <h3 class="text-lg mb-4">Order Summary</h3>
            <div class="d-flex justify-space-between mb-2">
              <span>Subtotal</span>
              <span>${{ subtotal.toFixed(2) }}</span>
            </div>
            <div class="d-flex justify-space-between mb-2">
              <span>Shipping</span>
              <span>${{ shipping.toFixed(2) }}</span>
            </div>
            <hr class="my-2" />
            <div class="d-flex justify-space-between font-weight-bold">
              <span>Total</span>
              <span>${{ total.toFixed(2) }}</span>
            </div>

            <!-- 🏷️ Coupon input -->
            <v-text-field
              v-model="couponCode"
              label="Coupon Code"
              outlined
              dense
              hide-details />
            <v-btn class="my-2" color="secondary" @click="applyCoupon"
              >Apply</v-btn
            >
            <div v-if="couponMessage" class="text-success mt-1 text-sm">
              {{ couponMessage }}
            </div>
            <div v-if="couponError" class="text-error mt-1 text-sm">
              {{ couponError }}
            </div>

            <v-btn
              class="mt-4"
              color="primary"
              block
              :disabled="!cart.length"
              @click="checkout">
              Proceed to Checkout
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </v-app>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
// Update the import path below if your productStore file is in a different location
import { useProductStore } from "../stores/productStore";
import type { CartInterface } from "@/types/productCard";

const userProductStore = useProductStore();
const cart = ref<CartInterface[]>(userProductStore.getCartList);

// 💳 Coupon logic
const couponCode = ref("");
const discount = ref(0);
const couponMessage = ref("");
const couponError = ref("");
const VALID_COUPONS: Record<string, number> = {
  SUMMER20: 0.2,
  SAVE10: 0.1,
};
const subtotal = computed(() =>
  cart.value.reduce(
    (total: number, item: CartInterface) => total + item.price * item.quantity,
    0
  )
);
const shipping = computed(() => (cart.value.length ? 50 : 0));
const total = computed(() => subtotal.value + shipping.value);

function applyCoupon() {
  const code = couponCode.value.toUpperCase();
  const discountRate = VALID_COUPONS[code];

  if (discountRate) {
    discount.value = subtotal.value * discountRate;
    couponMessage.value = `Coupon applied: ${discountRate * 100}% off`;
    couponError.value = "";
  } else {
    discount.value = 0;
    couponMessage.value = "";
    couponError.value = "Invalid coupon code.";
  }
}

function increase(item: CartInterface) {
  item.quantity++;
}

function decrease(item: CartInterface) {
  if (item.quantity > 1) item.quantity--;
}

function remove(id: number) {
  cart.value = cart.value.filter((item) => item.id !== id);
}

function checkout() {
  alert("Proceeding to checkout...");
}
</script>
