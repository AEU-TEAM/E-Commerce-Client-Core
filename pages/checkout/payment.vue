<template>
  <v-app>
    <Navbar/>
    <v-main class="bg-grey-lighten-4">
      <v-container class="py-12">
        <v-row justify="center" class="mb-12">
          <v-col cols="12" sm="8" md="6">
            <div class="d-flex align-center">
              <div class="stepper-item completed">
                <div class="stepper-circle bg-primary text-white">
                  <v-icon size="small">mdi-check</v-icon>
                </div>
                <div class="stepper-text text-primary">
                  <span class="font-weight-bold">Step 1</span> Address
                </div>
              </div>

              <v-divider class="stepper-divider"></v-divider>

              <div class="stepper-item completed">
                <div class="stepper-circle bg-primary text-white">
                  <v-icon size="small">mdi-check</v-icon>
                </div>
                <div class="stepper-text text-primary">
                  <span class="font-weight-bold">Step 2</span> Shipping
                </div>
              </div>

              <v-divider class="stepper-divider"></v-divider>

              <div class="stepper-item active">
                <div class="stepper-circle bg-primary text-white">
                  <v-icon size="small">mdi-credit-card-outline</v-icon>
                </div>
                <div class="stepper-text text-primary">
                  <span class="font-weight-bold">Step 3</span> Payment
                </div>
              </div>
            </div>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12" md="10" lg="9">
            <v-row>
              <v-col cols="12" md="5">
                <v-card class="pa-6 rounded-lg elevation-2 summary-card">
                  <h3 class="text-h6 mb-4 text-darken-2">Summary</h3>

                  <v-list class="transparent-list">
                    <v-list-item
                      v-for="item in summaryData.products"
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

                  <v-divider class="my-4"></v-divider>

                  <div class="text-subtitle-2 text-grey-darken-1 mb-2">
                    Address
                  </div>
                  <div class="text-body-2 font-weight-medium mb-4">
                    {{ summaryData.address.addressLine1 }},
                    {{ summaryData.address.city }},
                    {{ summaryData.address.state }}
                    {{ summaryData.address.zip }}
                  </div>

                  <div class="text-subtitle-2 text-grey-darken-1 mb-2">
                    Shipment method
                  </div>
                  <div class="text-body-2 font-weight-medium mb-4">
                    {{ summaryData.shipmentMethod.label }}
                  </div>

                  <v-divider class="my-4"></v-divider>

                  <div class="d-flex justify-space-between text-body-1 mb-2">
                    <span>Subtotal</span>
                    <span class="font-weight-medium"
                      >${{ summaryData.subtotal.toFixed(2) }}</span
                    >
                  </div>
                  <div class="d-flex justify-space-between text-body-1 mb-2">
                    <span>Estimated Tax</span>
                    <span class="font-weight-medium"
                      >${{ summaryData.estimatedTax.toFixed(2) }}</span
                    >
                  </div>
                  <div class="d-flex justify-space-between text-body-1 mb-4">
                    <span>Estimated Shipping & Handling</span>
                    <span class="font-weight-medium"
                      >${{ summaryData.estimatedShipping.toFixed(2) }}</span
                    >
                  </div>

                  <v-divider class="my-4"></v-divider>

                  <div
                    class="d-flex justify-space-between text-h6 font-weight-bold text-darken-2">
                    <span>Total</span>
                    <span>${{ summaryData.total.toFixed(2) }}</span>
                  </div>
                </v-card>
              </v-col>

              <v-col cols="12" md="7">
                <v-card class="pa-6 rounded-lg elevation-2 payment-card">
                  <h3 class="text-h6 mb-4 text-darken-2">Payment</h3>

                  <v-tabs
                    v-model="paymentTab"
                    bg-color="transparent"
                    color="primary"
                    class="mb-4">
                    <v-tab value="credit-card" class="text-capitalize"
                      >Credit Card</v-tab
                    >
                    <v-tab value="paypal" class="text-capitalize">PayPal</v-tab>
                    <v-tab value="paypal-credit" class="text-capitalize"
                      >PayPal Credit</v-tab
                    >
                  </v-tabs>

                  <v-window v-model="paymentTab">
                    <v-window-item value="credit-card">
                      <v-form
                        ref="paymentForm"
                        v-model="isFormValid"
                        @submit.prevent="processPayment">
                        <div class="credit-card-mock mb-6">
                          <v-img
                            src="/images/visa.png"
                            cover
                            class="rounded-lg">
                            <div class="d-flex justify-end pr-4 pt-4">
                              <v-icon color="white">mdi-wifi</v-icon>
                            </div>
                            <div
                              class="credit-card-numbers text-white font-weight-bold text-h6 px-8 mt-12">
                              {{
                                formatCardNumber(creditCard.cardNumber) ||
                                "4085 9536 8475 9530"
                              }}
                            </div>
                            <div class="text-white text-caption ml-8 mt-2">
                              Cardholder
                            </div>
                            <div
                              class="text-white text-subtitle-2 font-weight-medium ml-8">
                              {{
                                creditCard.cardholderName || "Cardholder Name"
                              }}
                            </div>
                          </v-img>
                        </div>

                        <v-row>
                          <v-col cols="12">
                            <v-text-field
                              v-model="creditCard.cardholderName"
                              label="Cardholder Name"
                              density="compact"
                              variant="outlined"
                              :rules="[rules.required]"
                              required></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              v-model="creditCard.cardNumber"
                              label="Card Number"
                              density="compact"
                              variant="outlined"
                              type="text"
                              inputmode="numeric"
                              maxlength="19"
                              @input="formatCardNumberInput"
                              :rules="[rules.required, rules.cardNumber]"
                              required></v-text-field>
                          </v-col>
                          <v-col cols="6">
                            <v-text-field
                              v-model="creditCard.expDate"
                              label="Exp Date"
                              placeholder="MM/YY"
                              density="compact"
                              variant="outlined"
                              maxlength="5"
                              @input="formatExpiryDate"
                              :rules="[rules.required, rules.expiryDate]"
                              required></v-text-field>
                          </v-col>
                          <v-col cols="6">
                            <v-text-field
                              v-model="creditCard.cvv"
                              label="CVV"
                              density="compact"
                              variant="outlined"
                              type="text"
                              inputmode="numeric"
                              maxlength="4"
                              :rules="[rules.required, rules.cvv]"
                              required></v-text-field>
                          </v-col>
                        </v-row>

                        <v-checkbox
                          v-model="sameAsBillingAddress"
                          label="Same as billing address"
                          color="primary"
                          class="mt-0 pt-0"></v-checkbox>
                      </v-form>
                    </v-window-item>
                    <v-window-item value="paypal">
                      <div class="text-center py-10 text-grey-darken-1">
                        PayPal integration would go here.
                      </div>
                    </v-window-item>
                    <v-window-item value="paypal-credit">
                      <div class="text-center py-10 text-grey-darken-1">
                        PayPal Credit integration would go here.
                      </div>
                    </v-window-item>
                  </v-window>

                  <v-divider class="my-6"></v-divider>

                  <div class="d-flex justify-space-between flex-wrap">
                    <v-btn
                      variant="outlined"
                      size="large"
                      class="flex-grow-1 flex-md-grow-0 mb-3 mb-md-0 mr-md-4"
                      @click="goBack">
                      Back
                    </v-btn>
                    <v-btn
                      color="black"
                      size="large"
                      class="flex-grow-1 flex-md-grow-0"
                      type="submit"
                      @click="processPayment">
                      Pay
                    </v-btn>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// --- Placeholder Summary Data (Ideally from Pinia/Vuex store or props) ---
const summaryData = reactive({
  products: [
    {
      id: 1,
      name: "Apple iPhone 14 Pro Max 128Gb",
      price: 1399.0,
      image: "/images/iphone-14-pro-gold.png",
    },
    {
      id: 2,
      name: "AirPods Max Silver",
      price: 549.0,
      image: "/images/iphone-14-pro-gold.png",
    },
    {
      id: 3,
      name: "Apple Watch Series 9 GPS 41mm",
      price: 399.0,
      image: "/images/iphone-14-pro-gold.png",
    },
  ],
  address: {
    addressLine1: "1131 Dusty Townline",
    city: "Jacksonville",
    state: "TX",
    zip: "40322",
  },
  shipmentMethod: {
    label: "Free - Regular shipment",
    cost: 0,
  },
  subtotal: 2347.0,
  estimatedTax: 50.0,
  estimatedShipping: 29.0,
  total: 2426.0, // Calculated value (subtotal + tax + shipping)
});

// --- Payment Form State ---
const paymentTab = ref("credit-card"); // Controls active tab
const sameAsBillingAddress = ref(true); // Checkbox state

const creditCard = reactive({
  cardholderName: "",
  cardNumber: "",
  expDate: "", // MM/YY
  cvv: "",
});

const paymentForm = ref(null); // Ref for v-form
const isFormValid = ref(false); // To track form validity

// --- Validation Rules ---
const rules = {
  required: (value) => !!value || "Required.",
  cardNumber: (value) => {
    // Basic Luhn algorithm check (not a full validation, but helps)
    if (!value) return "Card number is required.";
    const cleaned = value.replace(/\s/g, "");
    if (!/^\d{16}$/.test(cleaned)) return "Card number must be 16 digits."; // Assuming 16-digit cards
    let sum = 0;
    let double = false;
    for (let i = cleaned.length - 1; i >= 0; i--) {
      let digit = parseInt(cleaned[i], 10);
      if (double) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
      double = !double;
    }
    return sum % 10 === 0 || "Invalid card number.";
  },
  expiryDate: (value) => {
    if (!value) return "Expiry date is required.";
    if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(value)) return "Format MM/YY.";
    const [month, year] = value.split("/").map(Number);
    const fullYear = 2000 + year; // Assumes 21st century
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;

    if (
      fullYear < currentYear ||
      (fullYear === currentYear && month < currentMonth)
    ) {
      return "Card has expired.";
    }
    return true;
  },
  cvv: (value) => {
    if (!value) return "CVV is required.";
    if (!/^\d{3,4}$/.test(value)) return "CVV must be 3 or 4 digits.";
    return true;
  },
};

// --- Credit Card Input Formatting ---
const formatCardNumberInput = (event) => {
  let value = event.target.value.replace(/\D/g, ""); // Remove non-digits
  value = value.match(/.{1,4}/g)?.join(" ") || ""; // Add spaces every 4 digits
  if (value.length > 19) value = value.substring(0, 19); // Max length for 16 digits + 3 spaces
  creditCard.cardNumber = value;
};

const formatExpiryDate = (event) => {
  let value = event.target.value.replace(/\D/g, ""); // Remove non-digits
  if (value.length > 2) {
    value = `${value.substring(0, 2)}/${value.substring(2, 4)}`; // Add '/' after 2 digits
  }
  if (value.length > 5) value = value.substring(0, 5); // MM/YY (5 chars)
  creditCard.expDate = value;
};

// --- Computed property for card number display on mock card ---
const formatCardNumber = (number) => {
  if (!number) return "XXXX XXXX XXXX XXXX";
  const cleaned = number.replace(/\s/g, "");
  const masked = cleaned.slice(0, 4) + " **** **** " + cleaned.slice(-4);
  return masked;
};

// --- Navigation & Payment Logic ---
const goBack = () => {
  console.log("Going back to Shipping Method");
  router.push("/checkout/shipping"); // Navigate back to the shipping page
};

const processPayment = async () => {
  // Only attempt payment if Credit Card tab is active and form is valid
  if (paymentTab.value === "credit-card") {
    // const { valid } = await paymentForm.value.validate();
    // if (!valid) {
    //   alert("Please correct the errors in your payment details.");
    //   return;
    // }
  }

  // Here you would integrate with your payment gateway (e.g., Stripe, PayPal API)
  // This is a placeholder for the actual payment processing logic.
  console.log("Processing payment...");
  console.log("Selected Payment Method:", paymentTab.value);
  if (paymentTab.value === "credit-card") {
    console.log("Credit Card Details:", creditCard);
    console.log("Same as billing address:", sameAsBillingAddress.value);
  } else {
    // Logic for PayPal or PayPal Credit
    console.log("Redirecting to PayPal or processing PayPal Credit...");
  }

  // Simulate payment success
  alert("Payment successful! Your order has been placed.");

  // After successful payment, redirect to an order confirmation page
    router.push("/checkout/order-confirmation"); // Navigate back to the shipping page

};
</script>

<style scoped>
/* Stepper Styles (updated for 'completed' and 'active' states) */
.stepper-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-shrink: 0;
}

.stepper-circle {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
  transition: all 0.3s ease-in-out;
}

.stepper-text {
  margin-top: 8px;
  font-size: 0.85rem;
  white-space: nowrap;
  transition: color 0.3s ease-in-out;
}

/* Active State */
.stepper-item.active .stepper-circle {
  background-color: var(--v-theme-primary);
  color: white;
}
.stepper-item.active .stepper-text {
  color: var(--v-theme-primary);
}

/* Completed State */
.stepper-item.completed .stepper-circle {
  background-color: var(--v-theme-primary);
  color: white;
}
.stepper-item.completed .stepper-text {
  color: var(--v-theme-primary);
}

.stepper-divider {
  flex-grow: 1;
  margin: 0 16px;
  border-top: 1px solid #e0e0e0;
}

/* Specific Card Styling */
.summary-card,
.payment-card {
  height: 100%; /* Make cards fill their column height */
}

/* Product List Styling */
.transparent-list {
  background-color: transparent !important; /* Remove default list background */
}

/* Credit Card Mockup */
.credit-card-mock {
  position: relative;
  width: 100%;
  padding-bottom: 60%; /* Aspect ratio for a typical credit card (approx 1.6:1) */
}

.credit-card-mock .v-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.credit-card-numbers {
  position: absolute;
  bottom: 60px; /* Adjust based on image and text positioning */
  letter-spacing: 2px !important; /* Spacing for card numbers */
}
</style>
