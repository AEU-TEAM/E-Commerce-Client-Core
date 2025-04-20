<template>
    <v-card>
      <v-tabs
        v-model="tab"
        align-tabs="center"
        color="deep-purple-accent-4"
      >
        <v-tab :value="1">Landscape</v-tab>
        <v-tab :value="2">City</v-tab>
        <v-tab :value="3">Abstract</v-tab>
      </v-tabs>
  
      <v-tabs-window v-model="tab">
        <v-tabs-window-item
          v-for="n in 3"
          :key="n"
          :value="n"
        >
          <v-container>
            <v-row>
              <v-col
                v-for="i in 8"
                :key="i"
                cols="5"
                md="3"
              >
              <v-card class="mx-auto my-4" max-width="400" elevation="4" rounded="xl">
                <v-img
                src="data:image/jpeg;base64,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"
                height="400"
                class="pa-4"
                cover
                ></v-img>

                <v-card-title class="text-center text-subtitle-1 font-weight-medium">
                Apple iPhone 14 Pro Max<br>128GB Deep Purple
                </v-card-title>

                <v-card-subtitle class="text-center text-h6 font-weight-bold">
                $900
                </v-card-subtitle>

                <v-card-actions class="justify-center pb-4">
                    <v-btn color="white" class="white--text px-8 bg-black" rounded="lg">
                        Buy Now
                    </v-btn>
                </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card>
  </template>
  <script setup>
  import { ref } from 'vue'

  const tab = ref(null)
</script>

<style scoped>
.v-card {
  position: relative;
}

.v-img::after {
  content: "♡";
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 50px;
  color: #ccc;
}
</style>