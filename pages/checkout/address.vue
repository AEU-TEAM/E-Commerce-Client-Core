<template>
  <v-app>
    <Navbar/>
    <v-main class="bg-grey-lighten-4">
      <v-container class="py-12">
        <v-row justify="center" class="mb-12">
          <v-col cols="12" sm="8" md="6">
            <div class="d-flex align-center">
              <div class="stepper-item active">
                <div class="stepper-circle bg-primary text-white">
                  <v-icon size="small">mdi-check</v-icon>
                </div>
                <div class="stepper-text text-primary">
                  <span class="font-weight-bold">Step 1</span> Address
                </div>
              </div>

              <v-divider class="stepper-divider"></v-divider>

              <div class="stepper-item">
                <div
                  class="stepper-circle border-md border-grey-lighten-1 text-grey-darken-1">
                  2
                </div>
                <div class="stepper-text text-grey-darken-1">
                  <span class="font-weight-bold">Step 2</span> Shipping
                </div>
              </div>

              <v-divider class="stepper-divider"></v-divider>

              <div class="stepper-item">
                <div
                  class="stepper-circle border-md border-grey-lighten-1 text-grey-darken-1">
                  3
                </div>
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
              <h2 class="text-h5 mb-6 text-darken-2">Select Address</h2>

              <v-radio-group
                v-model="selectedAddressId"
                hide-details
                class="address-radio-group">
                <v-card
                  v-for="address in addresses"
                  :key="address.id"
                  class="address-card mb-4 pa-4 rounded-lg"
                  :class="{
                    'address-card--selected': selectedAddressId === address.id,
                  }"
                  flat
                  outlined
                  @click="selectedAddressId = address.id">
                  <v-row no-gutters align="center">
                    <v-col cols="auto" class="mr-3">
                      <v-radio :value="address.id" color="primary"></v-radio>
                    </v-col>
                    <v-col>
                      <div class="d-flex align-center mb-1">
                        <div
                          class="text-subtitle-1 font-weight-bold mr-2 text-darken-2">
                          {{ address.nickname || address.street }}
                        </div>
                        <v-chip
                          v-if="address.type"
                          label
                          size="x-small"
                          class="text-uppercase font-weight-medium"
                          :color="getAddressChipColor(address.type)"
                          text-color="white">
                          {{ address.type }}
                        </v-chip>
                      </div>
                      <div class="text-body-2 text-grey-darken-1 mb-1">
                        {{ address.addressLine1 }}, {{ address.city }},
                        {{ address.state }} {{ address.zip }}
                      </div>
                      <div class="text-body-2 text-grey-darken-1">
                        {{ address.phone }}
                      </div>
                    </v-col>
                    <v-col
                      cols="auto"
                      class="ml-auto d-flex flex-column align-end">
                      <v-btn
                        icon
                        flat
                        size="small"
                        class="mb-1"
                        @click.stop="openEditDialog(address)">
                        <v-icon size="small">mdi-pencil-outline</v-icon>
                      </v-btn>
                      <v-btn
                        icon
                        flat
                        size="small"
                        @click.stop="deleteAddress(address.id)">
                        <v-icon size="small">mdi-close</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card>
              </v-radio-group>

              <div class="text-center mt-6 mb-8">
                <v-btn
                  variant="outlined"
                  class="add-address-btn py-3 px-6 rounded-lg text-body-1"
                  block
                  @click="openAddDialog">
                  <v-icon left>mdi-plus-circle-outline</v-icon>
                  Add New Address
                </v-btn>
              </div>

              <v-divider class="my-6"></v-divider>

              <div class="d-flex justify-space-between flex-wrap">
                <v-btn
                  variant="outlined"
                  size="large"
                  class="flex-grow-1 flex-md-grow-0 mb-3 mb-md-0 mr-md-4"
                  @click="goBack"
                  >Back</v-btn
                >
                <v-btn
                  color="black"
                  size="large"
                  class="flex-grow-1 flex-md-grow-0"
                  @click="goToNextStep"
                  >Next</v-btn
                >
              </div>
            </v-card>
          </v-col>
        </v-row>

        <v-dialog v-model="showAddressDialog" max-width="600px" persistent>
          <v-card class="rounded-lg pa-4">
            <v-card-title
              class="headline d-flex justify-space-between align-center">
              {{ isEditing ? "Edit Address" : "Add New Address" }}
              <v-btn icon flat @click="closeAddressDialog">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text>
              <v-form ref="addressForm" v-model="isFormValid">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="currentAddress.nickname"
                      label="Nickname (e.g., Home, Office)"
                      density="compact"
                      variant="outlined"
                      :rules="[rules.required]"
                      required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-select
                      v-model="currentAddress.type"
                      :items="['HOME', 'OFFICE', 'OTHER']"
                      label="Address Type"
                      density="compact"
                      variant="outlined"
                      :rules="[rules.required]"
                      required></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="currentAddress.fullName"
                      label="Full Name"
                      density="compact"
                      variant="outlined"
                      :rules="[rules.required]"
                      required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="currentAddress.addressLine1"
                      label="Address Line 1"
                      density="compact"
                      variant="outlined"
                      :rules="[rules.required]"
                      required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="currentAddress.addressLine2"
                      label="Address Line 2 (Optional)"
                      density="compact"
                      variant="outlined"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="currentAddress.city"
                      label="City"
                      density="compact"
                      variant="outlined"
                      :rules="[rules.required]"
                      required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="currentAddress.state"
                      label="State / Province"
                      density="compact"
                      variant="outlined"
                      :rules="[rules.required]"
                      required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="currentAddress.zip"
                      label="Zip / Postal Code"
                      density="compact"
                      variant="outlined"
                      :rules="[rules.required, rules.numeric]"
                      required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="currentAddress.country"
                      label="Country"
                      density="compact"
                      variant="outlined"
                      :rules="[rules.required]"
                      required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="currentAddress.phone"
                      label="Phone Number"
                      density="compact"
                      variant="outlined"
                      :rules="[rules.required, rules.phone]"
                      required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-switch
                      v-model="currentAddress.isDefault"
                      label="Set as default address"
                      color="primary"
                      hide-details></v-switch>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
            <v-card-actions class="pt-0 pr-4 pb-4 pl-4 d-flex justify-end">
              <v-btn variant="outlined" @click="closeAddressDialog"
                >Cancel</v-btn
              >
              <v-btn
                color="primary"
                @click="saveAddress"
                :disabled="!isFormValid"
                >{{ isEditing ? "Save Changes" : "Add Address" }}</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script setup>
import { ref, reactive, computed, nextTick } from "vue";
import { useRouter } from "vue-router"; // For Nuxt 3 routing

const router = useRouter();

// Reactive state for the dialog
const showAddressDialog = ref(false);
const isEditing = ref(false);
const currentAddress = reactive({
  id: null,
  nickname: "",
  type: "HOME",
  fullName: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  zip: "",
  country: "United States", // Default or fetch from user profile
  phone: "",
  isDefault: false,
});

// Ref for the form component to access validation methods
const addressForm = ref(null);
const isFormValid = ref(false); // To track form validity

// Validation Rules
const rules = {
  required: (value) => !!value || "Required field.",
  numeric: (value) => /^\d+$/.test(value) || "Must be numeric.",
  phone: (value) =>
    /^\+?(\d[\d\s-()]{7,}\d)$/.test(value) || "Invalid phone number format.", // Basic phone regex
};

// Example data for addresses (updated to match new form fields)
const addresses = ref([
  {
    id: 1,
    nickname: "My Home",
    type: "HOME",
    fullName: "John Doe",
    addressLine1: "2118 Thornridge Cir.",
    addressLine2: "",
    city: "Syracuse",
    state: "Connecticut",
    zip: "35624",
    country: "United States",
    phone: "(209) 555-0104",
    isDefault: true,
  },
  {
    id: 2,
    nickname: "Work HQ",
    type: "OFFICE",
    fullName: "Jane Smith",
    addressLine1: "2715 Ash Dr.",
    addressLine2: "Suite 100",
    city: "San Jose",
    state: "South Dakota",
    zip: "83475",
    country: "United States",
    phone: "(704) 555-0127",
    isDefault: false,
  },
]);

const selectedAddressId = ref(
  addresses.value.find((addr) => addr.isDefault)?.id ||
    (addresses.value.length > 0 ? addresses.value[0].id : null)
); // Default to default address or first one

// Function to determine chip color based on address type
const getAddressChipColor = (type) => {
  switch (type) {
    case "HOME":
      return "blue-grey-darken-2";
    case "OFFICE":
      return "indigo-darken-2";
    default:
      return "grey";
  }
};

// --- Dialog Management ---
const resetForm = () => {
  Object.assign(currentAddress, {
    id: null,
    nickname: "",
    type: "HOME",
    fullName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
    phone: "",
    isDefault: false,
  });
  // Reset form validation state if ref is available
  if (addressForm.value) {
    addressForm.value.resetValidation();
  }
};

const openAddDialog = () => {
  isEditing.value = false;
  resetForm();
  showAddressDialog.value = true;
};

const openEditDialog = (address) => {
  isEditing.value = true;
  // Deep copy the address object to avoid directly modifying the original in the form
  Object.assign(currentAddress, JSON.parse(JSON.stringify(address)));
  showAddressDialog.value = true;
  // Ensure validation resets after dialog opens and fields are populated
  nextTick(() => {
    if (addressForm.value) {
      addressForm.value.resetValidation();
    }
  });
};

const closeAddressDialog = () => {
  showAddressDialog.value = false;
  resetForm(); // Always reset form on close
};

const saveAddress = async () => {
  // Validate the form before saving
  const { valid } = await addressForm.value.validate();

  if (valid) {
    if (isEditing.value) {
      // Find the address and update it
      const index = addresses.value.findIndex(
        (addr) => addr.id === currentAddress.id
      );
      if (index !== -1) {
        addresses.value[index] = { ...currentAddress };
      }
    } else {
      // Add new address
      const newId = Math.max(0, ...addresses.value.map((a) => a.id)) + 1; // Simple ID generation
      addresses.value.push({ ...currentAddress, id: newId });
    }

    // Handle default address logic
    if (currentAddress.isDefault) {
      addresses.value.forEach((addr) => {
        if (addr.id !== currentAddress.id) {
          addr.isDefault = false; // Unset default for others
        }
      });
      selectedAddressId.value = currentAddress.id; // Select the new/edited default
    } else if (
      selectedAddressId.value === currentAddress.id &&
      !currentAddress.isDefault &&
      addresses.value.length > 0
    ) {
      // If the current selected was the default and it's now not default, and other addresses exist
      // Consider re-evaluating default selection, maybe select the first available
      if (!addresses.value.some((addr) => addr.isDefault)) {
        selectedAddressId.value = addresses.value[0].id;
        addresses.value[0].isDefault = true; // Optionally set first as new default
      }
    }

    closeAddressDialog();
    alert(`Address ${isEditing.value ? "updated" : "added"} successfully!`);
  } else {
    alert("Please correct the errors in the form.");
  }
};

const deleteAddress = (id) => {
  if (confirm("Are you sure you want to delete this address?")) {
    addresses.value = addresses.value.filter((addr) => addr.id !== id);
    if (selectedAddressId.value === id) {
      // If the deleted address was selected, select the first available or null
      if (addresses.value.length > 0) {
        selectedAddressId.value = addresses.value[0].id;
        addresses.value[0].isDefault = true; // Optionally set first as new default
      } else {
        selectedAddressId.value = null;
      }
    }
  }
};

const goBack = () => {
  console.log("Going back");
  // Use Nuxt's navigateTo or router.back()
};

const goToNextStep = () => {
  if (selectedAddressId.value) {
    console.log(
      "Going to next step with selected address:",
      selectedAddressId.value
    );
    // Example: navigateTo('/checkout/shipping');
    alert(`Proceeding to Shipping with Address ID: ${selectedAddressId.value}`);
    router.push("/checkout/shipping");
  } else {
    alert("Please select an address to proceed.");
  }
};
</script>

<style scoped>
/* Base Styling for Stepper (unchanged) */
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

.stepper-item.active .stepper-circle {
  border-color: var(--v-theme-primary);
}

.stepper-item.active .stepper-text {
  color: var(--v-theme-primary);
}

.stepper-divider {
  flex-grow: 1;
  margin: 0 16px;
  border-top: 1px solid #e0e0e0;
}

/* Address Card Enhancements (unchanged except for nickname/full address display) */
.address-card {
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
  position: relative;
}

.address-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08) !important;
}

.address-card--selected {
  border-color: var(--v-theme-primary) !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05) !important;
  background-color: rgba(var(--v-theme-primary-rgb), 0.05);
}

.address-radio-group .v-selection-control-group {
  padding-top: 0 !important;
}

/* Custom Add New Address Button (unchanged) */
.add-address-btn {
  border: 1.5px dashed #bdbdbd;
  color: #616161;
  transition: all 0.2s ease-in-out;
}

.add-address-btn:hover {
  background-color: #f5f5f5;
  border-color: #9e9e9e;
}

/* Ensure action buttons wrap nicely on small screens (unchanged) */
@media (max-width: 600px) {
  .v-btn.flex-grow-1 {
    width: 100%;
  }
}
</style>
