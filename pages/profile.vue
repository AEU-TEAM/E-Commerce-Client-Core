<template>
    <v-container class="mt-15" fluid>
    <Navbar/>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card elevation="6" class="rounded-xl pa-6">
          <v-icon @click="goHome" class="mb-4" left>mdi-arrow-left</v-icon>
          <v-row no-gutters align="center">
            <!-- Avatar -->
            <v-col cols="12" md="4" class="text-center mb-4 mb-md-0">
              <v-avatar size="120">
                <v-img :src="user.avatar" />
              </v-avatar>
              <div class="mt-2 text-h6 font-weight-medium">
                {{ user.fullName }}
              </div>
              <div class="text-subtitle-2 text-grey">
                {{ user.email }}
              </div>
            </v-col>

            <!-- User Details -->
            <v-col cols="12" md="8">
              <v-form @submit.prevent="saveChanges" ref="profileForm">
                <v-text-field v-model="user.fullName" label="Full Name" outlined />
                <v-text-field v-model="user.email" label="Email" outlined type="email" />
                <v-text-field v-model="user.phone" label="Phone Number" outlined />
                <v-text-field v-model="user.address" label="Address" outlined />
                <v-select
                  v-model="user.gender"
                  :items="['Male', 'Female', 'Other']"
                  label="Gender"
                  outlined
                />
                <v-btn type="submit" color="primary" class="mt-4" block>Save Changes</v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
</v-container>
<Footer/>
</template>

<script setup>
import { ref } from 'vue'
const router = useRouter();
function goHome() {
  router.push("/");
}

const user = ref({
  fullName: 'Jane Doe',
  email: 'jane.doe@example.com',
  phone: '+855 123 456 789',
  address: 'Phnom Penh, Cambodia',
  gender: 'Female',
  avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
})

const saveChanges = () => {
  console.log('Updated profile:', user.value)
  alert('Profile updated successfully!')
}
</script>

<style scoped>
.v-card {
  background-color: #ffffff;
}
.text-grey {
  color: #888;
}
</style>
