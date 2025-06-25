<template>
   
  <v-container
    class="fill-height d-flex align-center justify-center black"
    fluid>
       
    <v-row justify="center" align="center">
           
      <v-col cols="12" sm="8" md="4">
               
        <v-card
          elevation="10"
          class="pa-8 rounded-xl white--text black-bg transition">
                   
          <v-icon @click="goHome" class="mb-4 white--text" left
            >mdi-arrow-left</v-icon
          >

                   
          <v-card-title
            class="text-h4 font-weight-bold text-center mb-6 white--text">
                        Welcome Back          
          </v-card-title>

                   
          <v-card-text>
                       
            <v-form @submit.prevent="onLogin" ref="loginForm">
                           
              <v-text-field
                v-model="email"
                label="Email"
                prepend-inner-icon="mdi-email"
                type="email"
                variant="outlined"
                class="white-label"
                color="white"
                required />
                           
              <v-text-field
                v-model="password"
                label="Password"
                prepend-inner-icon="mdi-lock"
                type="password"
                variant="outlined"
                class="white-label"
                color="white"
                required />

                           
              <v-btn
                color="black"
                class="mt-6 text-white font-weight-bold transition"
                type="submit"
                block>
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
import { useRouter } from "vue-router";

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

.black-bg {
  background-color: #fff !important;
}

.white--text {
  color: #000 !important;
}

.white-label input {
  color: black !important;
}
.white-label label {
  color: rgba(255, 255, 255, 0.7) !important;
}
.white-label .v-input__control {
  border-color: white !important;
}

.transition {
  transition: all 0.3s ease-in-out;
}
</style>
