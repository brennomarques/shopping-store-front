export interface Client {
    name: string;
    delivery_at: string;
    products: ProductsClient[];
}

export interface ProductsClient {
    id: string
    quantity: number;
}