export interface Client {
    name: string;
    delivery_at: string;
    products: ProductsClient[];
}
export interface ProductsClient {
    id: string;
    quantity: number;
}
export interface purchases {
    name: string;
    delivery_at: string;
    created_at: string;
    order_items: OrderItems[];
}
export interface OrderItems {
    name: string;
    quantity: number;
    price: number;
    created_at: string;
}


