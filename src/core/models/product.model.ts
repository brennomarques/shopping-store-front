export interface ProductsResponse {
    id: string;
    barcode: string;
    name: string;
    price: number;
    stockQuantity: number;
    image: string;
    clicked: boolean;
}
export interface ProductsCart {
    id: string
    name: string;
    price: number;
    quantity: number;
    image: string;
}
