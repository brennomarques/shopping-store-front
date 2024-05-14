import type { ProductsResponse } from '../models';
import { HttpBase } from './HttpBase';
import arrozImage from '@/assets/productImage/arroz-branco.webp';
import cafeImage from '@/assets/productImage/cafe-soluvel-40g.webp';
import cafe1Image from '@/assets/productImage/cafe1.webp';
import feijao1Image from '@/assets/productImage/feijao1.webp';
import feijao2Image from '@/assets/productImage/feijao2.webp';
import feijao3Image from '@/assets/productImage/feijao3.webp';
import feijao4Image from '@/assets/productImage/feijao4.webp';
import oleoImage from '@/assets/productImage/oleo.webp';
import refrigerantePepsiLataImage from '@/assets/productImage/refrigerante-pepsi-lata-269ml.webp';
import refrigerantePepsiZeroImage from '@/assets/productImage/refrigerante-pepsi-zero.webp';
import refrigerante1Image from '@/assets/productImage/refrigerante1.webp';


export class Product extends HttpBase {
  constructor() {
    super();
    this.endpoint = '/products';
  }

  public async getAll(searchParam?: string) {
    return super.findAll(searchParam)
      .then(response => this.processResponse(response.data))
      .catch(error => {
        throw error;
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
        image: this.getRandomImage(),
        clicked: false,
      };
    });
  
    return products;
  }

  private getRandomImage(): string {
    const images = [
      arrozImage,
      cafeImage,
      cafe1Image,
      feijao1Image,
      feijao2Image,
      feijao3Image,
      feijao4Image,
      oleoImage,
      refrigerantePepsiLataImage,
      refrigerantePepsiZeroImage,
      refrigerante1Image
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }

}