export interface Recipe {
  id: number;
  name: string;
  rating: number;
  restaurantName: string;
  description: string;
  menuName: string;
  price: number;
  imageUrl: string;
  images: string[];
  category: string;
  menuId: Number;
}
