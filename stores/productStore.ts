// stores/productStore.ts
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    selectedProduct: null,
    productsShop: [
      {
        id: 1,
        name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
        thumbnail: "/images/iphone-14-pro-gold.png",
        price: 900,
        isFavorite: false,
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
        thumbnail: "/images/productList1.png",
        price: 900,
        isFavorite: true,
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
        thumbnail: "/images/productList2.png",
        price: 900,
        isFavorite: false,
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
        thumbnail: "/images/airpods-max-silver.png",
        price: 900,
        isFavorite: false,
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
        thumbnail: "/images/productList3.png",
        price: 900,
        isFavorite: true,
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
        thumbnail: "/images/productList4.png",
        price: 900,
        isFavorite: false,
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
        thumbnail: "/images/productList5.png",
        price: 900,
        isFavorite: true,
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
        thumbnail: "/images/productList6.png",
        price: 900,
        isFavorite: false,
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
        thumbnail: "/images/productList7.png",
        price: 900,
        isFavorite: true,
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
        thumbnail: "/images/huawei-watch.png",
        price: 900,
        isFavorite: false,
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
        thumbnail: "/images/ipad-pro.png",
        price: 900,
        isFavorite: true,
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
        thumbnail: "/images/galaxy-fold.png",
        price: 900,
        isFavorite: false,
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
    ],
  }),
  actions: {
    setProduct(product: any) {
      this.selectedProduct = product;
    },
  },
});
