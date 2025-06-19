<template>
  <v-container class="fill-height" fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="4">
        <v-card elevation="8" class="pa-6 rounded-xl">
          <v-icon @click="goHome" class="mb-4" left>mdi-arrow-left</v-icon>
          <v-card-title class="text-h5 font-weight-bold text-center">
            Login
          </v-card-title>

          <v-card-text>
            <v-form @submit.prevent="onLogin" ref="loginForm">
              <v-text-field
                v-model="email"
                label="Email"
                prepend-inner-icon="mdi-email"
                type="email"
                required></v-text-field>

              <v-text-field
                v-model="password"
                label="Password"
                prepend-inner-icon="mdi-lock"
                type="password"
                required></v-text-field>

              <v-btn color="primary" type="submit" class="mt-4" block>
                Login
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
const loginForm = ref(null);
const router = useRouter();
function goHome() {
  router.push("/");
}
const onLogin = () => {
  if (!email.value || !password.value) {
    alert("Please fill in both fields");
    return;
  }
  // Replace with real login logic
  console.log("Logging in with:", {
    email: email.value,
    password: password.value,
  });
};
</script>

<style scoped>
.fill-height {
  height: 100vh;
}
</style>
