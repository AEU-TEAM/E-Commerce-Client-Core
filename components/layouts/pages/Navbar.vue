<template>
  <v-app-bar flat>
        <v-container class="mx-auto d-flex align-center justify-center">
          <v-avatar
            class="me-4 "
            color="grey-darken-1"
            size="32"
          ></v-avatar>
  
          <v-btn
            v-for="link in links"
            :key="link"
            :text="link"
            variant="text"
          ></v-btn>
  
          <v-spacer></v-spacer>
  
          <v-responsive max-width="160">
            <v-text-field
              density="compact"
              label="Search"
              rounded="lg"
              variant="solo-filled"
              flat
              hide-details
              single-line
            ></v-text-field>
          </v-responsive>
        </v-container>
      </v-app-bar>
</template>
<script setup>
    const links = [
      'Dashboard',
      'Messages',
      'Profile',
      'Updates',
    ]
  </script>
  
  <script>
    export default {

      data: () => ({
        links: [
          'Dashboard',
          'Messages',
          'Profile',
          'Updates',
        ],
      }),
    }
  </script>