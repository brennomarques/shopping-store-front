export interface ProductsResponse {
    id: string;
    barcode: string;
    name: string;
    price: number;
    stockQuantity: number;
}

export interface ProductsCart {
    id: string
    name: string;
    price: number;
    quantity: number;
}
