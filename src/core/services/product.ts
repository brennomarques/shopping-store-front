import type { ProductsResponse } from '../models';
import { HttpBase } from './HttpBase';

export class Product extends HttpBase {
  constructor() {
    super();
    this.endpoint = '/products';
  }

  public async getAll(searchParam?: string) {
    return super.findAll(searchParam)
      .then(response => this.processResponse(response.data))
      .catch(error => {
        throw new Error(error);
      });
  }

  private processResponse(response: any): ProductsResponse[] {
    const products: ProductsResponse[] = response.data.map((item: any) => {
      return {
        id: item.id,
        barcode: item.barcode,
        name: item.name,
        price: item.price,
        stockQuantity: item.qty_stock,
      };
    });
  
    return products;
  }
}