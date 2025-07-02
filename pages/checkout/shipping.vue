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

              <div class="stepper-item active">
                <div class="stepper-circle bg-primary text-white">
                  <v-icon size="small">mdi-truck-outline</v-icon> </div>
                <div class="stepper-text text-primary">
                  <span class="font-weight-bold">Step 2</span> Shipping
                </div>
              </div>

              <v-divider class="stepper-divider"></v-divider>

              <div class="stepper-item">
                <div class="stepper-circle border-md border-grey-lighten-1 text-grey-darken-1">3</div>
                <div class="stepper-text text-grey-darken-1">
                  <span class="font-weight-bold">Step 3</span> Payment
                </div>
              </div>
            </div>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12" sm="10" md="8" lg="7">
            <v-card class="pa-8 pb-4 rounded-lg elevation-2">
              <h2 class="text-h5 mb-6 text-darken-2">Shipment Method</h2>

              <v-radio-group v-model="selectedShipmentMethod" hide-details class="shipment-radio-group">
                <v-card
                  class="shipment-card mb-4 pa-4 rounded-lg"
                  :class="{ 'shipment-card--selected': selectedShipmentMethod === 'regular' }"
                  flat
                  outlined
                  @click="selectedShipmentMethod = 'regular'"
                >
                  <v-row no-gutters align="center">
                    <v-col cols="auto" class="mr-3">
                      <v-radio value="regular" color="primary"></v-radio>
                    </v-col>
                    <v-col>
                      <div class="text-subtitle-1 font-weight-bold text-darken-2">Free <span class="font-weight-regular text-body-1 ml-2">Regular shipment</span></div>
                    </v-col>
                    <v-col cols="auto" class="text-subtitle-1 text-grey-darken-1 ml-auto">
                      17 Oct, 2023
                    </v-col>
                  </v-row>
                </v-card>

                <v-card
                  class="shipment-card mb-4 pa-4 rounded-lg"
                  :class="{ 'shipment-card--selected': selectedShipmentMethod === 'express' }"
                  flat
                  outlined
                  @click="selectedShipmentMethod = 'express'"
                >
                  <v-row no-gutters align="center">
                    <v-col cols="auto" class="mr-3">
                      <v-radio value="express" color="primary"></v-radio>
                    </v-col>
                    <v-col>
                      <div class="text-subtitle-1 font-weight-bold text-darken-2">$8.50 <span class="font-weight-regular text-body-1 ml-2">Get your delivery as soon as possible</span></div>
                    </v-col>
                    <v-col cols="auto" class="text-subtitle-1 text-grey-darken-1 ml-auto">
                      1 Oct, 2023
                    </v-col>
                  </v-row>
                </v-card>

                <v-card
                  class="shipment-card mb-4 pa-4 rounded-lg"
                  :class="{ 'shipment-card--selected': selectedShipmentMethod === 'schedule' }"
                  flat
                  outlined
                  @click="selectedShipmentMethod = 'schedule'"
                >
                  <v-row no-gutters align="center">
                    <v-col cols="auto" class="mr-3">
                      <v-radio value="schedule" color="primary"></v-radio>
                    </v-col>
                    <v-col>
                      <div class="text-subtitle-1 font-weight-bold text-darken-2">Schedule <span class="font-weight-regular text-body-1 ml-2">Pick a date when you want to get your delivery</span></div>
                    </v-col>
                    <v-col cols="auto" class="ml-auto">
                      <v-menu
                        v-model="showDatePicker"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ props }">
                          <v-text-field
                            :model-value="formattedScheduledDate"
                            label="Select Date"
                            readonly
                            variant="outlined"
                            density="compact"
                            append-inner-icon="mdi-calendar"
                            hide-details
                            v-bind="props"
                            class="scheduled-date-input"
                            :class="{ 'border-primary': selectedShipmentMethod === 'schedule' }"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="scheduledDate"
                          :min="minDate"
                          @update:model-value="showDatePicker = false"
                          color="primary"
                        ></v-date-picker>
                      </v-menu>
                    </v-col>
                  </v-row>
                  <v-alert
                    v-if="selectedShipmentMethod === 'schedule' && !scheduledDate"
                    type="error"
                    density="compact"
                    variant="tonal"
                    class="mt-4"
                  >
                    Please select a date for scheduled delivery.
                  </v-alert>
                </v-card>
              </v-radio-group>

              <v-divider class="my-6"></v-divider>

              <div class="d-flex justify-space-between flex-wrap">
                <v-btn
                  variant="outlined"
                  size="large"
                  class="flex-grow-1 flex-md-grow-0 mb-3 mb-md-0 mr-md-4"
                  @click="goBack"
                >
                  Back
                </v-btn>
                <v-btn color="black" size="large" class="flex-grow-1 flex-md-grow-0" @click="goToNextStep">
                  Next
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
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router'; // For Nuxt 3 routing

const router = useRouter();

const selectedShipmentMethod = ref('regular'); // Default selection

const showDatePicker = ref(false);
const scheduledDate = ref(null); // Will hold a Date object
const minDate = computed(() => {
  const today = new Date();
  today.setDate(today.getDate() + 1); // Minimum date is tomorrow
  return today;
});

// Watch for changes in scheduledDate to ensure the scheduled option is selected
watch(scheduledDate, (newVal) => {
  if (newVal && selectedShipmentMethod.value !== 'schedule') {
    selectedShipmentMethod.value = 'schedule';
  }
});

// Format the date for display in the text field
const formattedScheduledDate = computed(() => {
  if (!scheduledDate.value) return '';
  const date = new Date(scheduledDate.value);
  return date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
});

const goBack = () => {
  console.log('Going back to Address selection');
  router.push('/checkout/address'); // Navigate back to the address selection page
};

const goToNextStep = () => {
  console.log('Proceeding with shipment method:', selectedShipmentMethod.value);

  if (selectedShipmentMethod.value === 'schedule' && !scheduledDate.value) {
    alert('Please select a date for scheduled delivery.');
    router.push('checkout/payment.vue')
    return;
  }

  // Here you would save the selected shipment method and scheduled date (if any)
  // to your state management (e.g., Pinia store) or a temporary object.

  // Example of passing data (for demonstration purposes, in a real app use state management)
  const shipmentData = {
    method: selectedShipmentMethod.value,
    scheduledDate: selectedShipmentMethod.value === 'schedule' ? scheduledDate.value?.toISOString() : null,
  };
  console.log('Shipment data to save:', shipmentData);

  // Navigate to the next step (Payment)
  router.push('/checkout/payment'); // Assuming '/checkout/payment' is your next route
};
</script>

<style scoped>
/* Base Styling for Stepper (modified for 'completed' state) */
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
  border-color: var(--v-theme-primary);
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

/* Shipment Card Interaction */
.shipment-card {
  cursor: pointer;
  border: 1px solid transparent; /* Default transparent border */
  transition: all 0.2s ease-in-out;
  position: relative;
}

.shipment-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08) !important;
}

.shipment-card--selected {
  border-color: var(--v-theme-primary) !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05) !important;
  background-color: rgba(var(--v-theme-primary-rgb), 0.05);
}

/* Hide default radio group padding */
.shipment-radio-group .v-selection-control-group {
  padding-top: 0 !important;
}

/* Styling for the scheduled date input */
.scheduled-date-input {
  max-width: 150px; /* Adjust as needed */
  transition: all 0.2s ease-in-out;
}

.scheduled-date-input.border-primary :deep(.v-field__outline) {
  border-color: var(--v-theme-primary);
}

.scheduled-date-input :deep(.v-field__overlay) {
    background-color: transparent; /* Remove default text-field overlay */
}

.scheduled-date-input :deep(.v-label) {
    color: inherit !important; /* Keep label color consistent */
}

/* Ensure action buttons wrap nicely on small screens */
@media (max-width: 600px) {
  .v-btn.flex-grow-1 {
    width: 100%;
  }
}
</style>