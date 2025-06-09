<template>
  <div class="max-w-md mx-auto mt-10 p-4 border rounded shadow">
    <h2 class="text-xl font-bold mb-4">Register</h2>

    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="name" class="block mb-1">Name</label>
        <input v-model="form.name" type="text" id="name" class="w-full border p-2" />
        <p v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</p>
      </div>

      <div class="mb-4">
        <label for="email" class="block mb-1">Email</label>
        <input v-model="form.email" type="email" id="email" class="w-full border p-2" />
        <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
      </div>

      <div class="mb-4">
        <label for="password" class="block mb-1">Password</label>
        <input v-model="form.password" type="password" id="password" class="w-full border p-2" />
        <p v-if="errors.password" class="text-red-500 text-sm">{{ errors.password }}</p>
      </div>

      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Register
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  password: ''
})

const errors = reactive({
  name: '',
  email: '',
  password: ''
})

const validateForm = () => {
  let isValid = true
  errors.name = form.name ? '' : 'Name is required'
  errors.email = /\S+@\S+\.\S+/.test(form.email) ? '' : 'Valid email is required'
  errors.password = form.password.length >= 6 ? '' : 'Password must be at least 6 characters'

  isValid = !(errors.name || errors.email || errors.password)
  return isValid
}

const submitForm = () => {
  if (validateForm()) {
    alert('Form submitted successfully!')
    console.log(form) // Replace with API call
    // Reset form
    form.name = ''
    form.email = ''
    form.password = ''
  }
}
</script>

<style scoped>
/* Optional styles, especially if you're not using Tailwind */
</style>
