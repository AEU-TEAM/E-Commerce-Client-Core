<template>
   
  <div>
       
    <h2 class="text-h5 font-weight-bold mb-4">Customer Reviews</h2>
       
    <v-list>
           
      <v-list-item v-for="(review, index) in reviews" :key="index">
               
        <!-- Avatar slot -->
               
        <template #prepend>
                   
          <v-avatar size="40">
                       
            <v-img
              :src="review.user.avatar || defaultAvatar"
              alt="User Avatar" />
                     
          </v-avatar>
                 
        </template>

               
        <v-list-item-content>
                   
          <v-list-item-title class="font-weight-bold">{{
            review.user.name
          }}</v-list-item-title>
                   
          <v-rating
            :model-value="review.rating"
            color="amber"
            dense
            readonly></v-rating>
                   
          <v-list-item-subtitle class="mt-1">{{
            review.comment
          }}</v-list-item-subtitle>
                 
        </v-list-item-content>
             
      </v-list-item>
         
    </v-list>
     
  </div>
</template>

<script setup>
defineProps({
  reviews: {
    type: Array,
    required: true,
  },
});

// Provide a fallback image if avatar is missing
const defaultAvatar = "/image/default-avatar.png";
</script>
