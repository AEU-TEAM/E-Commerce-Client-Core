<template>
  <v-snackbar v-model="showSuccess" color="success" buttom right timeout="6000">
    <v-icon start>mdi-check-circle</v-icon>
    Registration successful! Redirecting to login...
  </v-snackbar>

  <v-container class="mt-10">
    <v-row justify="center" align="center">
      <!-- Register Form Section -->
      <v-col cols="12" md="6" lg="6">
        <v-card>
          <v-card-title class="text-h6 font-weight-bold text-primary">Register</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="submitForm" ref="formRef">
              <v-text-field
                v-model="form.name"
                label="Name"
                :error-messages="touched.name ? errors.name : []"
                outlined dense required
                @blur="touched.name = true; validateField('name')"
              />

              <v-text-field
                v-model="form.username"
                label="Username"
                :error-messages="touched.username ? errors.username: []"
                outlined dense required
                @blur="touched.username = true; validateField('username')"
              />

              <v-text-field
                v-model="form.phone"
                label="Phone"
                type="number"
                :error-messages="touched.phone ? errors.phone : []"
                outlined dense required
                @blur="touched.phone = true; validateField('phone')"
              />

              <v-text-field
                v-model="form.email"
                label="Email"
                type="email"
                :error-messages="touched.email ? errors.email : []"
                outlined dense required
                @blur="touched.email = true; validateField('email')"
              />

              <v-text-field
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append-inner="showPassword = !showPassword"
                :error-messages="touched.password ? errors.password : []"
                outlined dense required
                @blur="touched.password = true; validateField('password')"
              />

              <v-text-field
                v-model="form.confirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                label="Confirm Password"
                :append-inner-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append-inner="showConfirmPassword = !showConfirmPassword"
                :error-messages="touched.confirmPassword ? errors.confirmPassword : []"
                outlined dense required
                @blur="touched.confirmPassword = true; validateField('confirmPassword')"
              />

              <v-btn type="submit" color="primary" class="mt-4" block>
                Register
              </v-btn>
            </v-form>
          </v-card-text>

          <v-card-text class="text-center">
            Already have an account?
            <router-link to="/login" class="text-primary">Login</router-link>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Welcome Message Section (Optional) -->
      <!-- <v-col cols="12" md="6" lg="4" class="align-center"
      >
        <h1 class="text-h4 font-weight-bold text-center text-primary"  elevation="12">Welcome to Our Store</h1>
        <p class="mt-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus amet aspernatur dolorum consequatur distinctio repellat quia suscipit vero cumque at?</p>
      </v-col> -->
    </v-row>
  </v-container>
</template>


<script setup>
import { reactive, ref } from 'vue'

const formRef = ref(null)
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const showSuccess = ref(false)

const form = reactive({
  name: '',
  username: '',
  phone: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const errors = reactive({
  name: '',
  username: '',
  phone: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const touched = reactive({
  name: false,
  username: false,
  phone: false,
  email: false,
  password: false,
  confirmPassword: false
})

const validateField = (key) => {
  switch (key) {
    case 'name':
      errors.name = form.name ? '' : 'Name is required'
      break
    case 'username':
      errors.username = form.username ? '' : 'Username is required'
      break
    case 'phone':
      errors.phone = /^\d{9,12}$/.test(form.phone) ? '' : 'Valid phone number is required'
      break
    case 'email':
      errors.email = /\S+@\S+\.\S+/.test(form.email) ? '' : 'Valid email is required'
      break
    case 'password':
      errors.password = form.password.length >= 6 ? '' : 'Password must be at least 6 characters'
      break
    case 'confirmPassword':
      errors.confirmPassword = form.confirmPassword === form.password
        ? ''
        : 'Passwords do not match'
      break
  }
}

const validateForm = () => {
  Object.keys(form).forEach(key => {
    touched[key] = true
    validateField(key)
  })
  return !Object.values(errors).some(error => error)
}

const submitForm = () => {
  if (validateForm()) {
    showSuccess.value = true
        setTimeout(() => {
      router.push('/login')
    }, 6000)
    console.log(form)

    Object.keys(form).forEach(key => {
      form[key] = ''
      touched[key] = false
    })
    formRef.value.resetValidation()
    router.push('/login')
  }
}
</script>
