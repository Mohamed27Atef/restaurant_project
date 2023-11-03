export interface UserOrders {
    id: number;
    createdAt: Date;
    totalPrice: number;
    country: string;
    city: string;
    street: string;
    status: string;
}
