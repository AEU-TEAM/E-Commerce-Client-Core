// stores/productStore.ts
import { defineStore } from "pinia";
import type { Product } from "../types/product";
import type { CartInterface } from "@/types/productCard";

export const useProductStore = defineStore("product", {
  state: () => ({
    wishlist: [] as Product[],
    cartList: [] as CartInterface[],
    selectedProduct: null as Product | null,
    productsShop: [
      {
        id: 1,
        name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
        thumbnail: "/images/iphone-14-pro-gold.png",
        price: 900,
        isFavorite: false,
        category: "Electronics",
        brand: "Apple",
        shop: "Shop A",
        branch: "Phnom Penh",
        variant: {
          name: "128GB Deep Purple",
        },
        reviews: [
          {
            id: 1,
            user: {
              name: "John Doe",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 5,
            comment: "Great product! Highly recommend.",
          },
          {
            id: 2,
            user: {
              name: "Jane Smith",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 4,
            comment: "Good value for money.",
          },
          {
            id: 3,
            user: {
              name: "Alice Johnson",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 3,
            comment: "Average performance, but decent.",
          },
          {
            id: 4,
            user: {
              name: "Bob Brown",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 2,
            comment: "Not what I expected, could be better.",
          },
          {
            id: 5,
            user: {
              name: "Charlie Davis",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 1,
            comment: "Very disappointed with this product.",
          },
        ],
      },
      {
        id: 2,
        name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
        thumbnail: "/images/productList1.png",
        price: 900,
        isFavorite: true,
        category: "Electronics",
        brand: "Sony",
        shop: "Shop B",
        branch: "Siem Reap",
        variant: {
          name: "128GB Deep Purple",
        },
        reviews: [
          {
            id: 1,
            user: {
              name: "John Doe",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 5,
            comment: "Great product! Highly recommend.",
          },
          {
            id: 2,
            user: {
              name: "Jane Smith",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 4,
            comment: "Good value for money.",
          },
          {
            id: 3,
            user: {
              name: "Alice Johnson",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 3,
            comment: "Average performance, but decent.",
          },
          {
            id: 4,
            user: {
              name: "Bob Brown",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 2,
            comment: "Not what I expected, could be better.",
          },
          {
            id: 5,
            user: {
              name: "Charlie Davis",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 1,
            comment: "Very disappointed with this product.",
          },
        ],
      },
      {
        id: 3,
        name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
        thumbnail: "/images/productList2.png",
        price: 900,
        isFavorite: false,
        category: "Fashion",
        brand: "Nike",
        shop: "Shop C",
        branch: "Phnom Penh",
        variant: {
          name: "128GB Deep Purple",
        },
        reviews: [
          {
            id: 1,
            user: {
              name: "John Doe",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 5,
            comment: "Great product! Highly recommend.",
          },
          {
            id: 2,
            user: {
              name: "Jane Smith",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 4,
            comment: "Good value for money.",
          },
          {
            id: 3,
            user: {
              name: "Alice Johnson",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 3,
            comment: "Average performance, but decent.",
          },
          {
            id: 4,
            user: {
              name: "Bob Brown",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 2,
            comment: "Not what I expected, could be better.",
          },
          {
            id: 5,
            user: {
              name: "Charlie Davis",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 1,
            comment: "Very disappointed with this product.",
          },
        ],
      },
      {
        id: 4,
        name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
        thumbnail: "/images/airpods-max-silver.png",
        price: 900,
        isFavorite: false,
        category: "Fashion",
        brand: "Adidas",
        shop: "Shop D",
        branch: "Battambang",
        variant: {
          name: "128GB Deep Purple",
        },
        reviews: [
          {
            id: 1,
            user: {
              name: "John Doe",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 5,
            comment: "Great product! Highly recommend.",
          },
          {
            id: 2,
            user: {
              name: "Jane Smith",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 4,
            comment: "Good value for money.",
          },
          {
            id: 3,
            user: {
              name: "Alice Johnson",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 3,
            comment: "Average performance, but decent.",
          },
          {
            id: 4,
            user: {
              name: "Bob Brown",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 2,
            comment: "Not what I expected, could be better.",
          },
          {
            id: 5,
            user: {
              name: "Charlie Davis",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 1,
            comment: "Very disappointed with this product.",
          },
        ],
      },
      {
        id: 5,
        name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
        thumbnail: "/images/productList3.png",
        price: 900,
        isFavorite: true,
        category: "Home",
        brand: "Philips",
        shop: "Shop E",
        branch: "Phnom Penh",
        variant: {
          name: "128GB Deep Purple",
        },
        reviews: [
          {
            id: 1,
            user: {
              name: "John Doe",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 5,
            comment: "Great product! Highly recommend.",
          },
          {
            id: 2,
            user: {
              name: "Jane Smith",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 4,
            comment: "Good value for money.",
          },
          {
            id: 3,
            user: {
              name: "Alice Johnson",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 3,
            comment: "Average performance, but decent.",
          },
          {
            id: 4,
            user: {
              name: "Bob Brown",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 2,
            comment: "Not what I expected, could be better.",
          },
          {
            id: 5,
            user: {
              name: "Charlie Davis",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 1,
            comment: "Very disappointed with this product.",
          },
        ],
      },
      {
        id: 1,
        name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
        thumbnail: "/images/iphone-14-pro-gold.png",
        price: 900,
        isFavorite: false,
        category: "Electronics",
        brand: "Apple",
        shop: "Shop A",
        branch: "Phnom Penh",
        variant: {
          name: "128GB Deep Purple",
        },
        reviews: [
          {
            id: 1,
            user: {
              name: "John Doe",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 5,
            comment: "Great product! Highly recommend.",
          },
          {
            id: 2,
            user: {
              name: "Jane Smith",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 4,
            comment: "Good value for money.",
          },
          {
            id: 3,
            user: {
              name: "Alice Johnson",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 3,
            comment: "Average performance, but decent.",
          },
          {
            id: 4,
            user: {
              name: "Bob Brown",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 2,
            comment: "Not what I expected, could be better.",
          },
          {
            id: 5,
            user: {
              name: "Charlie Davis",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 1,
            comment: "Very disappointed with this product.",
          },
        ],
      },
      {
        id: 2,
        name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
        thumbnail: "/images/productList1.png",
        price: 900,
        isFavorite: true,
        category: "Electronics",
        brand: "Sony",
        shop: "Shop B",
        branch: "Siem Reap",
        variant: {
          name: "128GB Deep Purple",
        },
        reviews: [
          {
            id: 1,
            user: {
              name: "John Doe",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 5,
            comment: "Great product! Highly recommend.",
          },
          {
            id: 2,
            user: {
              name: "Jane Smith",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 4,
            comment: "Good value for money.",
          },
          {
            id: 3,
            user: {
              name: "Alice Johnson",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 3,
            comment: "Average performance, but decent.",
          },
          {
            id: 4,
            user: {
              name: "Bob Brown",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 2,
            comment: "Not what I expected, could be better.",
          },
          {
            id: 5,
            user: {
              name: "Charlie Davis",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 1,
            comment: "Very disappointed with this product.",
          },
        ],
      },
      {
        id: 3,
        name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
        thumbnail: "/images/productList2.png",
        price: 900,
        isFavorite: false,
        category: "Fashion",
        brand: "Nike",
        shop: "Shop C",
        branch: "Phnom Penh",
        variant: {
          name: "128GB Deep Purple",
        },
        reviews: [
          {
            id: 1,
            user: {
              name: "John Doe",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 5,
            comment: "Great product! Highly recommend.",
          },
          {
            id: 2,
            user: {
              name: "Jane Smith",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 4,
            comment: "Good value for money.",
          },
          {
            id: 3,
            user: {
              name: "Alice Johnson",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 3,
            comment: "Average performance, but decent.",
          },
          {
            id: 4,
            user: {
              name: "Bob Brown",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 2,
            comment: "Not what I expected, could be better.",
          },
          {
            id: 5,
            user: {
              name: "Charlie Davis",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 1,
            comment: "Very disappointed with this product.",
          },
        ],
      },
      {
        id: 4,
        name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
        thumbnail: "/images/airpods-max-silver.png",
        price: 900,
        isFavorite: false,
        category: "Fashion",
        brand: "Adidas",
        shop: "Shop D",
        branch: "Battambang",
        variant: {
          name: "128GB Deep Purple",
        },
        reviews: [
          {
            id: 1,
            user: {
              name: "John Doe",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 5,
            comment: "Great product! Highly recommend.",
          },
          {
            id: 2,
            user: {
              name: "Jane Smith",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 4,
            comment: "Good value for money.",
          },
          {
            id: 3,
            user: {
              name: "Alice Johnson",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 3,
            comment: "Average performance, but decent.",
          },
          {
            id: 4,
            user: {
              name: "Bob Brown",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 2,
            comment: "Not what I expected, could be better.",
          },
          {
            id: 5,
            user: {
              name: "Charlie Davis",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 1,
            comment: "Very disappointed with this product.",
          },
        ],
      },
      {
        id: 5,
        name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
        thumbnail: "/images/productList3.png",
        price: 900,
        isFavorite: true,
        category: "Home",
        brand: "Philips",
        shop: "Shop E",
        branch: "Phnom Penh",
        variant: {
          name: "128GB Deep Purple",
        },
        reviews: [
          {
            id: 1,
            user: {
              name: "John Doe",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 5,
            comment: "Great product! Highly recommend.",
          },
          {
            id: 2,
            user: {
              name: "Jane Smith",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 4,
            comment: "Good value for money.",
          },
          {
            id: 3,
            user: {
              name: "Alice Johnson",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 3,
            comment: "Average performance, but decent.",
          },
          {
            id: 4,
            user: {
              name: "Bob Brown",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 2,
            comment: "Not what I expected, could be better.",
          },
          {
            id: 5,
            user: {
              name: "Charlie Davis",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            rating: 1,
            comment: "Very disappointed with this product.",
          },
        ],
      }
    ],
  }),

  getters: {
    getWishlist: (state) => state.wishlist,
    getTotalWishlist: (state) => state.wishlist.length,
    getSelectedProduct: (state) => state.selectedProduct,
    getProductsShop: (state) => state.productsShop,
    getCartList: (state) => state.cartList,
    getTotalCart: (state) => state.cartList.length,
  },

  actions: {
    async setProduct(product: Product) {
      this.selectedProduct = product;
    },

    async toggleFavorite(productId: number) {
      const product = await this.productsShop.find((p) => p.id === productId);
      if (product) {
        product.isFavorite = !product.isFavorite;
        if (product.isFavorite) {
          await this.wishlist.push(product);
        } else {
          await this.wishlist.splice(this.wishlist.indexOf(product), 1);
        }
      }
    },

    async removeFromWishlist(productId: number) {
      const productIndex = this.wishlist.findIndex((p) => p.id === productId);
      if (productIndex !== -1) {
        this.wishlist.splice(productIndex, 1);
      } else {
        alert("This product is not in your wishlist.");
      }
    },

    async addToCart(product: Product) {
      const existingProduct = this.cartList.find((p) => p.id === product.id);
      if (!existingProduct) {
        this.cartList.push({
          id: product.id,
          name: product.name,
          thumbnail: product.thumbnail,
          price: product.price,
          variant: product.variant,
          quantity: 1,
        } as CartInterface);
      } else {
        alert("This product is already in your cart.");
      }
    },

    async loadWishlist() {
      // Simulate loading wishlist from an API or local storage
      this.wishlist = this.productsShop.filter((product) => product.isFavorite);
    },

    clearWishlist() {
      this.wishlist = [];
    },
  },
});
