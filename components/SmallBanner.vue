<template>
    <v-container fluid class="pa-0">
      <v-row no-gutters>
        <!-- Left Column -->
        <v-col cols="12" md="6">
          <v-row no-gutters>
            <!-- Playstation 5 Top -->
            <v-col cols="12" class="d-flex" style="height: 50%;">
              <v-sheet color="#f8f8f8" class="d-flex align-center w-100">
                <v-img
                  src="/images/ps5.png"
                  alt="Playstation 5"
                  width="50%"
                  contain
                />
                <div>
                  <h1 class="text-h4 font-weight-bold mb-2">Playstation 5</h1>
                  <p>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                </div>
              </v-sheet>
            </v-col>
  
            <!-- AirPods Max and Vision Pro Bottom Split -->
            <v-col cols="12" class="d-flexn" style="height: 50%;">
              <v-row no-gutters class="w-100">
                <!-- AirPods Max -->
                <v-col cols="6">
                  <v-sheet color="#f1f1f1" class="d-flex align-center h-100">
                    <v-img
                      src="/images/airpods-max.png"
                      alt="AirPods Max"
                      contain
                      width="50%"
                    />
                    <div class="text-center">
                      <h2 class="text-h6 font-weight-bold">Apple AirPods Max</h2>
                      <p class="mt-2">Computational audio. Listen, it's powerful.</p>
                    </div>
                  </v-sheet>
                </v-col>
  
                <!-- Vision Pro -->
                <v-col cols="6">
                  <v-sheet color="#121212" class="d-flex align-center white--text h-100">
                    <v-img
                      src="/images/vision-pro.png"
                      alt="Vision Pro"
                      contain
                      width="50%"
                    />
                    <div class="text-center">
                      <h2 class="text-h6 font-weight-bold">Apple Vision Pro</h2>
                      <p class="mt-2">An immersive way to experience entertainment.</p>
                    </div>
                  </v-sheet>
                </v-col>
  
              </v-row>
            </v-col>
  
          </v-row>
        </v-col>
  
        <!-- Right Column -->
        <v-col cols="12" md="6">
          <v-sheet color="#eeeeee" class="d-flex align-center h-100">
            <div class="text-center">
              <h1 class="text-h3 font-weight-bold mb-2">Macbook <span class="font-weight-bold">Air</span></h1>
              <p class="mb-6">
                The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
              </p>
              <v-btn color="black" class="white--text" outlined>Shop Now</v-btn>
            </div>
            <v-img
              src="/public/images/macbook.png"
              alt="Macbook Air"
              contain
              width="50%"
              class="mt-8"
            />
          </v-sheet>
        </v-col>
  
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  // no script needed
  </script>
  
  <style scoped>
  h1, h2 {
    font-family: 'SF Pro Display', sans-serif;
  }
  </style>
  