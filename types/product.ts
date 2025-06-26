export interface ReviewUser {
  name: string;
  avatar: string;
}

export interface ProductReview {
  id: number;
  user: ReviewUser;
  rating: number;
  comment: string;
}

export interface ProductVariant {
  name: string;
}

export interface Product {
  id: number;
  name: string;
  thumbnail: string;
  price: number;
  isFavorite: boolean;
  variant: ProductVariant;
  reviews: ProductReview[];
}
