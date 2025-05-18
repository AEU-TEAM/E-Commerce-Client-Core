<template>
  <v-card>
    <v-container>
      <v-tabs
        v-model="tab"
        align-tabs="start"
        color="deep-purple-accent-4"
      >
        <v-tab v-for="tab in tabOptions" :value="tab.id">{{ tab.name }}</v-tab>
      </v-tabs>
    </v-container>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item
        v-for="tab in tabOptions"
        :key="tab.id"
        :value="tab.id"
      >
        <v-container>
          <v-row>
            <v-col
              v-for="product in productList"
              :key="product.id"
              cols="5"
              xxl="2"
              xl="2"
              lg="4"
              md="5"
              sm="6"
            >
            <ProductCard
              :image="product.thumbnail"
              :title="product.name"
              :price="product.price"
              :isFavorite="product.isFavorite"
              @buy="handleBuy"
              @favorite="toggleFavorite"
            />
            </v-col>
          </v-row>
        </v-container>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card>
</template>
<script>
  export default {
    data() {
      return {
        tabOptions:[
          {id: 1, name: "New Arrival"},
          {id: 2, name: "BestSeller"},
          {id: 3, name: "Featured Products"},
        ],
        productList: [
          {
            id: 1,
            name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
            thumbnail: "/images/iphone-14-pro-gold.png",
            price: 900,
            isFavorite: false,
            variant: {
              name: "128GB Deep Purple"
            }
          },
          {
            id: 1,
            name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
            thumbnail: "/images/productList1.png",
            price: 900,
            isFavorite: true,
            variant: {
              name: "128GB Deep Purple"
            }
          },
          {
            id: 1,
            name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
            thumbnail: "/images/productList2.png",
            price: 900,
            isFavorite: false,
            variant: {
              name: "128GB Deep Purple"
            }
          },
          {
            id: 1,
            name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
            thumbnail: "/images/airpods-max-silver.png",
            price: 900,
            isFavorite: false,
            variant: {
              name: "128GB Deep Purple"
            }
          },
          {
            id: 1,
            name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
            thumbnail: "/images/productList3.png",
            price: 900,
            isFavorite: true,
            variant: {
              name: "128GB Deep Purple"
            }
          },
          {
            id: 1,
            name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
            thumbnail: "/images/productList4.png",
            price: 900,
            isFavorite: false,
            variant: {
              name: "128GB Deep Purple"
            }
          },
          {
            id: 1,
            name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
            thumbnail: "/images/productList5.png",
            price: 900,
            isFavorite: true,
            variant: {
              name: "128GB Deep Purple"
            }
          },
          {
            id: 1,
            name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
            thumbnail: "/images/productList6.png",
            price: 900,
            isFavorite: false,
            variant: {
              name: "128GB Deep Purple"
            }
          },
          {
            id: 1,
            name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
            thumbnail: "/images/productList7.png",
            price: 900,
            isFavorite: true,
            variant: {
              name: "128GB Deep Purple"
            }
          },
          {
            id: 1,
            name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
            thumbnail: "/images/huawei-watch.png",
            price: 900,
            isFavorite: false,
            variant: {
              name: "128GB Deep Purple"
            }
          },
          {
            id: 1,
            name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
            thumbnail: "/images/ipad-pro.png",
            price: 900,
            isFavorite: true,
            variant: {
              name: "128GB Deep Purple"
            }
          },
          {
            id: 1,
            name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
            thumbnail: "/images/galaxy-fold.png",
            price: 900,
            isFavorite: false,
            variant: {
              name: "128GB Deep Purple"
            }
          },
        ]
      }
    }

  }
</script>
<script setup>
  import { ref } from 'vue'

  const tab = ref(null)
</script>

<style scoped>
.v-card {
  position: relative;
}
</style>