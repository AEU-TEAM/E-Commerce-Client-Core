<template>
   
  <v-snackbar
    v-model="showSuccess"
    color="success"
    location="bottom right"
    timeout="6000">
        <v-icon start>mdi-check-circle</v-icon>     Registration successful!
    Redirecting to login...  
  </v-snackbar>

   
  <v-container class="mt-10">
       
    <v-row justify="center" align="center">
           
      <v-col cols="12" md="6" lg="5">
               
        <v-card
          elevation="10"
          class="pa-6 rounded-xl border"
          style="background-color: white; color: black">
                   
          <div class="d-flex align-center mb-4">
                       
            <v-icon @click="goHome" class="me-2 cursor-pointer"
              >mdi-arrow-left</v-icon
            >
                       
            <h2 class="text-h6 font-weight-bold">Register</h2>
                     
          </div>

                   
          <v-form @submit.prevent="submitForm" ref="formRef">
                       
            <v-text-field
              v-model="form.name"
              label="Name"
              :error-messages="touched.name ? errors.name : []"
              variant="outlined"
              density="comfortable"
              class="mb-3"
              color="black"
              @blur="onBlur('name')" />

                       
            <v-text-field
              v-model="form.username"
              label="Username"
              :error-messages="touched.username ? errors.username : []"
              variant="outlined"
              density="comfortable"
              class="mb-3"
              color="black"
              @blur="onBlur('username')" />

                       
            <v-text-field
              v-model="form.phone"
              label="Phone"
              type="number"
              :error-messages="touched.phone ? errors.phone : []"
              variant="outlined"
              density="comfortable"
              class="mb-3"
              color="black"
              @blur="onBlur('phone')" />

                       
            <v-text-field
              v-model="form.email"
              label="Email"
              type="email"
              :error-messages="touched.email ? errors.email : []"
              variant="outlined"
              density="comfortable"
              class="mb-3"
              color="black"
              @blur="onBlur('email')" />

                       
            <v-text-field
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              label="Password"
              :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              @click:append-inner="showPassword = !showPassword"
              :error-messages="touched.password ? errors.password : []"
              variant="outlined"
              density="comfortable"
              class="mb-3"
              color="black"
              @blur="onBlur('password')" />

                       
            <v-text-field
              v-model="form.confirmPassword"
              :type="showConfirmPassword ? 'text' : 'password'"
              label="Confirm Password"
              :append-inner-icon="
                showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'
              "
              @click:append-inner="showConfirmPassword = !showConfirmPassword"
              :error-messages="
                touched.confirmPassword ? errors.confirmPassword : []
              "
              variant="outlined"
              density="comfortable"
              class="mb-3"
              color="black"
              @blur="onBlur('confirmPassword')" />

                       
            <v-btn
              type="submit"
              block
              size="large"
              class="mt-4 text-white"
              color="black">
                            Register            
            </v-btn>
                     
          </v-form>

                   
          <div class="text-center mt-6">
                        Already have an account?            
            <router-link
              to="/login"
              class="text-black text-decoration-underline">
                            Login            
            </router-link>
                     
          </div>
                 
        </v-card>
             
      </v-col>
         
    </v-row>
     
  </v-container>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const formRef = ref(null);
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const showSuccess = ref(false);

const form = reactive({
  name: "",
  username: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const errors = reactive({
  name: "",
  username: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const touched = reactive({
  name: false,
  username: false,
  phone: false,
  email: false,
  password: false,
  confirmPassword: false,
});

function goHome() {
  router.push("/");
}

function onBlur(field) {
  touched[field] = true;
  validateField(field);
}

function validateField(key) {
  switch (key) {
    case "name":
      errors.name = form.name ? "" : "Name is required";
      break;
    case "username":
      errors.username = form.username ? "" : "Username is required";
      break;
    case "phone":
      errors.phone = /^\d{9,12}$/.test(form.phone)
        ? ""
        : "Valid phone is required";
      break;
    case "email":
      errors.email = /\S+@\S+\.\S+/.test(form.email)
        ? ""
        : "Valid email is required";
      break;
    case "password":
      errors.password = form.password.length >= 6 ? "" : "Min 6 characters";
      break;
    case "confirmPassword":
      errors.confirmPassword =
        form.confirmPassword === form.password ? "" : "Passwords do not match";
      break;
  }
}

function validateForm() {
  Object.keys(form).forEach((key) => {
    touched[key] = true;
    validateField(key);
  });
  return !Object.values(errors).some((error) => error);
}

function submitForm() {
  if (validateForm()) {
    showSuccess.value = true;
    console.log({ ...form });

    setTimeout(() => {
      router.push("/login");
    }, 6000);

    Object.keys(form).forEach((key) => {
      form[key] = "";
      touched[key] = false;
    });

    formRef.value?.resetValidation?.();
  }
}
</script>
