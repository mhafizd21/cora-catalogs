export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  is_available: true;
  images: string[];
  category: {
      id: number;
      name: string;
  };
}