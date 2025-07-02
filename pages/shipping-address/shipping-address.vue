<template>
  <v-app>
    <v-main>
      <v-container>
        <div class="d-flex align-center justify-center mb-10">
          <div class="d-flex align-center text-subtitle-1">
            <v-icon class="mr-2" color="primary">mdi-checkbox-marked-circle-outline</v-icon>
            <span class="font-weight-bold text-primary">Step 1</span>
            <span class="ml-1 text-primary">Address</span>
          </div>
          <v-divider class="mx-4" style="width: 100px;"></v-divider>
          <div class="d-flex align-center text-subtitle-1 text-grey-darken-1">
            <v-icon class="mr-2" color="grey-darken-1">mdi-circle-outline</v-icon>
            <span>Step 2</span>
            <span class="ml-1">Shipping</span>
          </div>
          <v-divider class="mx-4" style="width: 100px;"></v-divider>
          <div class="d-flex align-center text-subtitle-1 text-grey-darken-1">
            <v-icon class="mr-2" color="grey-darken-1">mdi-circle-outline</v-icon>
            <span>Step 3</span>
            <span class="ml-1">Payment</span>
          </div>
        </div>

        <h2 class="text-h5 mb-6">Select Address</h2>

        <v-radio-group v-model="selectedAddressId" class="mb-8">
          <v-card
            v-for="address in addresses"
            :key="address.id"
            class="mb-4 pa-4"
            outlined
            :class="{ 'selected-card': selectedAddressId === address.id }"
            @click="selectedAddressId = address.id"
          >
            <v-row no-gutters align="center">
              <v-col cols="auto" class="mr-3">
                <v-radio :value="address.id" hide-details></v-radio>
              </v-col>
              <v-col>
                <div class="d-flex align-center">
                  <div class="text-subtitle-1 font-weight-bold mr-2">{{ address.street }}</div>
                  <v-chip
                    v-if="address.type"
                    label
                    small
                    class="text-uppercase"
                    :color="address.type === 'HOME' ? 'grey-darken-2' : 'black'"
                    text-color="white"
                    size="small"
                  >
                    {{ address.type }}
                  </v-chip>
                </div>
                <div class="text-body-2 text-grey-darken-1">{{ address.fullAddress }}</div>
                <div class="text-body-2 text-grey-darken-1">{{ address.phone }}</div>
              </v-col>
              <v-col cols="auto" class="ml-auto">
                <v-btn icon flat size="small" class="mr-2" @click.stop="editAddress(address.id)">
                  <v-icon size="small">mdi-pencil-outline</v-icon>
                </v-btn>
                <v-btn icon flat size="small" @click.stop="deleteAddress(address.id)">
                  <v-icon size="small">mdi-close</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-radio-group>

        <div class="text-center mb-10">
          <v-btn variant="text" @click="addNewAddress" class="add-address-btn">
            <v-icon left>mdi-plus-circle-outline</v-icon>
            Add New Address
          </v-btn>
        </div>

        <div class="d-flex justify-end mt-10">
          <v-btn variant="outlined" size="large" class="mr-4" @click="goBack">Back</v-btn>
          <v-btn color="black" size="large" @click="goToNextStep">Next</v-btn>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

// Example data for addresses
const addresses = ref([
  {
    id: 1,
    street: '2118 Thornridge',
    fullAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    phone: '(209) 555-0104',
    type: 'HOME',
  },
  {
    id: 2,
    street: 'HeadOffice',
    fullAddress: '2715 Ash Dr. San Jose, South Dakota 83475',
    phone: '(704) 555-0127',
    type: 'OFFICE',
  },
]);

const selectedAddressId = ref(1); // Default to the first address

const editAddress = (id) => {
  console.log('Edit address:', id);
  // Implement navigation to an edit address page/modal
};

const deleteAddress = (id) => {
  console.log('Delete address:', id);
  // Implement logic to remove the address from the list
};

const addNewAddress = () => {
  console.log('Add new address');
  // Implement navigation to an add new address page/modal
};

const goBack = () => {
  console.log('Going back');
  // Use Nuxt's navigateTo or router.back()
};

const goToNextStep = () => {
  console.log('Going to next step with selected address:', selectedAddressId.value);
  // Use Nuxt's navigateTo to the next step (e.g., '/checkout/shipping')
};
</script>

<style scoped>
.selected-card {
  border: 1px solid #1976D2 !important; /* Vuetify's default primary color */
}

/* Custom styling for the stepper elements if not using v-stepper */
.v-divider {
  border-top: 1px solid #e0e0e0;
}

.add-address-btn {
  border: 1px dashed #e0e0e0;
  border-radius: 4px;
  padding: 10px 20px;
  color: #616161; /* Adjust color for the icon and text */
}

.add-address-btn .v-icon {
    color: #616161; /* Ensure icon color matches text */
}
</style>