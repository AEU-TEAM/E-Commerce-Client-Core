<template>
    <v-footer dark padless class="bg-black">
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="3" class="text-left">
            <div class="video-wrapper">
                <video
                src="/videos/Logo.mp4"
                autoplay
                muted
                loop
                playsinline
                ></video>
            </div>
            <p class="mt-2 body-2">
              We are a residential interior design firm located in Portland. Our
              boutique-studio offers more than...
            </p>
            <div class="social-icons mt-4">
              <v-icon size="24" class="mr-2">mdi-twitter</v-icon>
              <v-icon size="24" class="mr-2">mdi-facebook</v-icon>
              <v-icon size="24" class="mr-2">mdi-pinterest</v-icon>
              <v-icon size="24" class="mr-2">mdi-instagram</v-icon>
              <v-icon size="24">mdi-tiktok</v-icon>
            </div>
          </v-col>
  
          <v-col cols="6" md="3">
            <h6 class="text-uppercase mb-2">Services</h6>
            <v-list dense nav class="transparent">
              <v-list-item link>
                <v-list-item-title class="caption">Bonus program</v-list-item-title>
              </v-list-item>
              <v-list-item link>
                <v-list-item-title class="caption">Gift cards</v-list-item-title>
              </v-list-item>
              <v-list-item link>
                <v-list-item-title class="caption">Credit and payment</v-list-item-title>
              </v-list-item>
              <v-list-item link>
                <v-list-item-title class="caption">Service contracts</v-list-item-title>
              </v-list-item>
              <v-list-item link>
                <v-list-item-title class="caption">Non-cash account</v-list-item-title>
              </v-list-item>
              <v-list-item link>
                <v-list-item-title class="caption">Payment</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
  
          <v-col cols="6" md="3">
            <h6 class="text-uppercase mb-2">Assistance to the buyer</h6>
            <v-list dense nav class="transparent">
              <v-list-item link>
                <v-list-item-title class="caption">Find an order</v-list-item-title>
              </v-list-item>
              <v-list-item link>
                <v-list-item-title class="caption">Terms of delivery</v-list-item-title>
              </v-list-item>
              <v-list-item link>
                <v-list-item-title class="caption">Exchange and return of goods</v-list-item-title>
              </v-list-item>
              <v-list-item link>
                <v-list-item-title class="caption">Guarantee</v-list-item-title>
              </v-list-item>
              <v-list-item link>
                <v-list-item-title class="caption">Frequently asked questions</v-list-item-title>
              </v-list-item>
              <v-list-item link>
                <v-list-item-title class="caption">Terms of use of the site</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
  
          <v-col cols="12" md="3" class="text-left">
            <h6 class="text-uppercase mb-2">Newsletter</h6>
            <p class="caption">
              Enter your email address below to subscribe to our newsletter and
              stay up to date with the latest news and special offers.
            </p>
            <v-text-field
              placeholder="Your email address"
              class="mt-2"
              dense
              outlined
              single-line
            ></v-text-field>
            <v-btn color="primary" class="mt-2">Subscribe</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </template>
  
  <script>
  export default {
    name: 'TheFooter',
  };
  </script>
  
  <style scoped>
    .logo {
        font-size: 1.5rem;
        font-weight: bold;
    }
    
    .transparent {
        background-color: transparent !important;
    }
    .video-wrapper {
    width: 200px; /* container size */
    height: 50px; /* container size */
    overflow: hidden; /* hide anything outside */
    position: relative;
    padding: 10px;
    }

    .video-wrapper video {
    width:200px;
    height: 200px;
    position: relative;
    top:55%;
    left: 50%;
    transform: translate(-50%, -50%);
    }
  </style>