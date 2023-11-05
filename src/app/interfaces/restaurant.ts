export interface Restaurant {
  id: number;
  name: string;
  email: string;
  Password: string;
  Description: string;
  address: string;
  phone: string;
  cusinetype: string;
  longitude: number;
  latitude: number;
  rate: number;
  openHours: number;
  ClosingHours: number;
  image: string;
  images: string[];
  restaurantCategories: number[];
}
