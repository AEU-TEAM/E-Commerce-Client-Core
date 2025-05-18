<template>
  <v-container fluid class="pa-4">
    <v-row dense>
      <!-- Left Column -->
      <v-col cols="12" md="6" class="d-flex flex-column gap-4">
        <!-- Playstation 5 -->
        <v-hover v-slot="{ isHovering, props }">
          <v-sheet
            v-bind="props"
            color="#f8f8f8"
            class="pa-4 d-flex align-center justify-space-between flex-wrap transition-smooth"
            :elevation="isHovering ? 8 : 2"
          >
            <v-img
              src="/images/ps5.png"
              alt="Playstation 5"
              max-width="200"
              height="150"
              contain
              class="mr-4 image-wrapper"
            />
            <div class="text-left">
              <h2 class="text-h6 font-weight-bold mb-1">Playstation 5</h2>
              <p class="text-body-2">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
              </p>
            </div>
          </v-sheet>
        </v-hover>

        <!-- Bottom: AirPods Max + Vision Pro -->
        <v-row dense>
          <!-- AirPods Max -->
          <v-col cols="12" sm="6" align-self="end">
            <v-hover v-slot="{ isHovering, props }">
              <v-sheet
                v-bind="props"
                color="#f1f1f1"
                class="pa-4 d-flex align-center flex-wrap transition-smooth"
                :elevation="isHovering ? 6 : 1"
              >
                <v-img
                  src="/images/airpods-max.png"
                  alt="AirPods Max"
                  max-width="100"
                  height="150"
                  contain
                  class="mr-3 image-wrapper"
                />
                <div class="text-left">
                  <h3 class="text-subtitle-1 font-weight-bold mb-1">AirPods Max</h3>
                  <p class="text-caption">Computational audio. Listen, it's powerful.</p>
                </div>
              </v-sheet>
            </v-hover>
          </v-col>

          <!-- Vision Pro -->
          <v-col cols="12" sm="6" align-self="end">
            <v-hover v-slot="{ isHovering, props }">
              <v-sheet
                v-bind="props"
                color="#121212"
                class="pa-4 d-flex align-center white--text flex-wrap transition-smooth"
                :elevation="isHovering ? 6 : 1"
              >
                <v-img
                  src="/images/vision-pro.png"
                  alt="Vision Pro"
                  max-width="100"
                  height="150"
                  contain
                  class="mr-3 image-wrapper"
                />
                <div class="text-left">
                  <h3 class="text-subtitle-1 font-weight-bold mb-1">Vision Pro</h3>
                  <p class="text-caption">An immersive way to experience entertainment.</p>
                </div>
              </v-sheet>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>

      <!-- Right Column: MacBook Air -->
      <v-col cols="12" md="6">
        <v-hover v-slot="{ isHovering, props }">
          <v-sheet
            v-bind="props"
            color="#eeeeee"
            class="pa-5 d-flex flex-column flex-md-row align-center justify-space-between transition-smooth"
            :elevation="isHovering ? 8 : 2"
          >
            <div class="text-left mb-4 mb-md-0">
              <h2 class="text-h5 font-weight-bold mb-2">
                MacBook <span class="font-weight-bold">Air</span>
              </h2>
              <p class="text-body-2 mb-4">
                The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
              </p>
              <v-btn color="primary" class="white--text" elevation="1" rounded>Shop Now</v-btn>
            </div>
            <v-img
              src="/images/macbook.png"
              alt="MacBook Air"
              contain
              max-width="200"
              class="ml-md-4"
            />
          </v-sheet>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>


<style scoped>
h1, h2, h3 {
  font-family: 'SF Pro Display', sans-serif;
  margin: 0;
  line-height: 1.2;
}

.transition-smooth {
  transition: all 0.3s ease-in-out;
  transform: scale(1);
}

.v-hover--is-hovering .transition-smooth {
  transform: scale(1.02);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.image-wrapper {
  object-fit: contain;
}

.text-left h2,
.text-left h3 {
  margin-bottom: 0.25rem;
}

.text-left p {
  color: #555;
  line-height: 1.5;
}

.v-btn {
  text-transform: none;
  font-weight: 600;
  padding: 10px 24px;
  transition: background-color 0.3s ease;
}

.v-btn:hover {
  filter: brightness(1.1);
}


</style>
