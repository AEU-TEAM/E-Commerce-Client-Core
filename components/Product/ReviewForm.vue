<template>
  <v-card class="mt-8 pa-4" elevation="2">
    <h3 class="text-h6 font-weight-bold mb-4">Write a Review</h3>
    <v-form @submit.prevent="handleSubmit" v-model="valid">
      <v-rating
        v-model="form.rating"
        color="amber"
        background-color="grey lighten-1"
        hover
      ></v-rating>
      <v-textarea
        v-model="form.comment"
        label="Comment"
        :rules="[v => !!v || 'Comment is required']"
        rows="3"
      />
      <v-btn color="primary" type="submit" :disabled="!valid">Submit Review</v-btn>
    </v-form>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({ productId: String })
const emit = defineEmits(['submit'])

const form = ref({
  rating: 0,
  comment: ''
})

const valid = ref(false)

const handleSubmit = () => {
  if (!form.value.comment || form.value.rating === 0) return
  emit('submit', { ...form.value })
  form.value = { rating: 0, comment: '' }
}
</script>
