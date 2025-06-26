export interface CartInterface {
  id: number;
  name: string;
  thumbnail: string;
  price: number;
  variant: { name: string };
  quantity: number;
}

