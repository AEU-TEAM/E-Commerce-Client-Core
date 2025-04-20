
<template>
    <v-carousel :show-arrows="false">
        <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        cover
        ></v-carousel-item>
    </v-carousel>
    <!-- <v-container fluid>
      <v-row>
        <v-col cols="12" md="6">
          <v-card flat class="pa-4 d-flex flex-column align-center justify-center" height="100%">
            <v-img :src="ps5Image" max-height="200" contain></v-img>
            <v-img src="@/assets/images/PlayStation.png" max-height="200" contain></v-img>
            <h2 class="mt-4">Playstation 5</h2>
            <p class="text-center">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
          </v-card>
        </v-col>
  
        <v-col cols="12" md="6">
          <v-card flat class="pa-4 d-flex flex-column align-center justify-center" height="100%">
            <v-img :src="macbookImage" max-height="200" contain></v-img>
            <h2 class="mt-4">Macbook Air</h2>
            <p class="text-center">The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
            <v-btn color="black" class="mt-4" variant="outlined">Shop Now</v-btn>
          </v-card>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col cols="12" md="6">
          <v-card flat class="pa-4 d-flex flex-column align-center justify-center" height="100%">
            <v-img :src="airpodsImage" max-height="150" contain></v-img>
            <h3 class="mt-4">Apple AirPods Max</h3>
            <p class="text-center">Computational audio. Listen, it's powerful.</p>
          </v-card>
        </v-col>
  
        <v-col cols="12" md="6">
          <v-card flat class="pa-4 d-flex flex-column align-center justify-center grey darken-4 white--text" height="100%">
            <v-img :src="visionProImage" max-height="150" contain></v-img>
            <h3 class="mt-4">Apple Vision Pro</h3>
            <p class="text-center">An immersive way to experience entertainment.</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container> -->
</template>
<script setup>
    import ps5Image from '@/assets/images/PlayStation.png';
    import macbookImage from '@/assets/images/macbook.png';
    import airpodsImage from '@/assets/images/airpods.png';
    import visionProImage from '@/assets/images/visionpro.png';
    const items = [
        {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
    ]
</script>

<script>
    export default {
    name: 'ProductShowcase',
    data() {
        return {
        ps5Image,
        macbookImage,
        airpodsImage,
        visionProImage,
        };
    },
    };
</script>
  
<style scoped>
  h2, h3 {
    font-weight: bold;
  }
  p {
    max-width: 300px;
  }
</style>
  