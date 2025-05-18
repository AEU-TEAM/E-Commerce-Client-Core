<template>
    <v-container fluid class="banner d-flex justify-center align-center">
          <div class="text-section text-center">
            <h1 class="display-1 font-weight-light text-white mb-2">
              Big Summer <strong>Sale</strong>
            </h1>
            <p class="text-grey-lighten-1 text-body-1 mb-6">
                commodo fames vites fitae leo mauris in. Eu consequat.
            </p>
            <v-btn
              color="white"
              variant="outlined"
              class="text-black"
              rounded="lg"
              size="large"
            >
              Shop Now
            </v-btn>
          </div>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'BigSummerSaleBanner'
  }
  </script>
  
  <style scoped>
  .banner {
    background-image: url("/images/BannerBottom.png");
    width: 100%;
    background-size: cover;
    color: white;
    padding: 80px 0; /* Adjust padding as needed */
    position: relative;
    overflow: hidden; /* To contain absolutely positioned elements */
    height: 500px;
  }
  h1 {
    font-size: 72px;
    font-family: 'Arial', 'Helvetica', sans-serif;
}

  </style>