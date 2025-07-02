<template>
  <v-app>
    <Navbar/>
    <v-main class="bg-grey-lighten-4 d-flex align-center justify-center">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="8" lg="6">
            <v-card class="pa-8 pb-4 rounded-lg elevation-4 text-center">
              <v-icon size="96" color="success" class="mb-6"
                >mdi-check-circle-outline</v-icon
              >

              <h2 class="text-h4 mb-4 text-darken-2 font-weight-bold">
                Payment Confirmed!
              </h2>
              <p class="text-subtitle-1 text-grey-darken-1 mb-6">
                Your order #<span class="font-weight-bold text-darken-2">{{
                  orderDetails.orderId
                }}</span>
                has been successfully placed. A confirmation email has been sent
                to {{ orderDetails.customerEmail }}.
              </p>

              <v-divider class="my-6"></v-divider>

              <h3 class="text-h6 mb-4 text-left text-darken-2">
                Order Summary
              </h3>

              <v-list class="transparent-list mb-4 text-left">
                <v-list-item
                  v-for="item in orderDetails.products"
                  :key="item.id"
                  class="px-0 py-2">
                  <template v-slot:prepend>
                    <v-avatar rounded="lg" size="48">
                      <v-img :src="item.image" :alt="item.name"></v-img>
                    </v-avatar>
                  </template>
                  <v-list-item-title class="font-weight-medium">{{
                    item.name
                  }}</v-list-item-title>
                  <template v-slot:append>
                    <span class="font-weight-bold text-darken-2"
                      >${{ item.price.toFixed(2) }}</span
                    >
                  </template>
                </v-list-item>
              </v-list>

              <div class="d-flex justify-space-between text-body-1 mb-2">
                <span class="text-grey-darken-1">Subtotal</span>
                <span class="font-weight-medium"
                  >${{ orderDetails.subtotal.toFixed(2) }}</span
                >
              </div>
              <div class="d-flex justify-space-between text-body-1 mb-2">
                <span class="text-grey-darken-1">Shipping</span>
                <span class="font-weight-medium">{{
                  orderDetails.shippingCost === 0
                    ? "Free"
                    : "$" + orderDetails.shippingCost.toFixed(2)
                }}</span>
              </div>
              <div class="d-flex justify-space-between text-body-1 mb-4">
                <span class="text-grey-darken-1">Tax</span>
                <span class="font-weight-medium"
                  >${{ orderDetails.tax.toFixed(2) }}</span
                >
              </div>

              <v-divider class="my-4"></v-divider>

              <div
                class="d-flex justify-space-between text-h6 font-weight-bold text-darken-2">
                <span>Total Paid</span>
                <span>${{ orderDetails.totalPaid.toFixed(2) }}</span>
              </div>

              <v-divider class="my-6"></v-divider>

              <h3 class="text-h6 mb-4 text-left text-darken-2">
                Delivery Information
              </h3>
              <div class="text-body-2 text-left mb-2">
                <span class="font-weight-medium">{{
                  orderDetails.deliveryAddress.fullName
                }}</span
                ><br />
                {{ orderDetails.deliveryAddress.addressLine1 }}<br />
                {{ orderDetails.deliveryAddress.city }},
                {{ orderDetails.deliveryAddress.state }}
                {{ orderDetails.deliveryAddress.zip }}<br />
                {{ orderDetails.deliveryAddress.country }}
              </div>
              <div class="text-body-2 text-left text-grey-darken-1 mb-4">
                Expected delivery: {{ orderDetails.expectedDeliveryDate }}
              </div>

              <div class="d-flex flex-column flex-sm-row justify-center mt-6">
                <v-btn
                  color="primary"
                  size="large"
                  class="mb-4 mb-sm-0 mr-sm-4 px-6"
                  @click="trackOrder">
                  <v-icon left>mdi-truck-fast-outline</v-icon>
                  Track Order
                </v-btn>
                <v-btn
                  variant="outlined"
                  size="large"
                  class="px-6"
                  @click="continueShopping">
                  Continue Shopping
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// Placeholder Order Details (In a real app, this would come from an API response
// after successful payment, or a global state manager like Pinia).
const orderDetails = reactive({
  orderId: "ABC-12345-XYZ",
  customerEmail: "customer@example.com",
  products: [
    {
      id: 1,
      name: "Apple iPhone 14 Pro Max 128Gb",
      price: 1399.0,
      image: "https://via.placeholder.com/48/000000/FFFFFF?text=P1",
    },
    {
      id: 2,
      name: "AirPods Max Silver",
      price: 549.0,
      image: "https://via.placeholder.com/48/000000/FFFFFF?text=P2",
    },
    {
      id: 3,
      name: "Apple Watch Series 9 GPS 41mm",
      price: 399.0,
      image: "https://via.placeholder.com/48/000000/FFFFFF?text=P3",
    },
  ],
  subtotal: 2347.0,
  shippingCost: 29.0, // Or 0 for free shipping
  tax: 50.0,
  totalPaid: 2426.0, // Make sure this matches subtotal + shipping + tax
  deliveryAddress: {
    fullName: "John Doe",
    addressLine1: "1131 Dusty Townline",
    city: "Jacksonville",
    state: "TX",
    zip: "40322",
    country: "USA",
  },
  expectedDeliveryDate: "October 25, 2023", // Example, could be calculated
});

const trackOrder = () => {
  console.log("Tracking order:", orderDetails.orderId);
  // Navigate to an order tracking page, passing the order ID
  router.push(`/my-orders/${orderDetails.orderId}`);
};

const continueShopping = () => {
  console.log("Continuing shopping");
  // Navigate to the home page or products page
  router.push("/");
};
</script>

<style scoped>
/* Center the main content vertically and horizontally */
.v-main {
  min-height: 100vh; /* Ensure it takes full viewport height */
}

/* Specific Card Styling */
.v-card {
  max-width: 700px; /* Limit width for readability */
  margin: 0 auto; /* Center the card horizontally */
}

/* Product List Styling */
.transparent-list {
  background-color: transparent !important; /* Remove default list background */
}

/* Action buttons responsiveness */
@media (max-width: 600px) {
  .v-btn {
    width: 100%;
  }
}
</style>
