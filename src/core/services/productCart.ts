import type { ProductsCart } from '../models';

const productCartKey = 'productCart';

export class ProductCart {

  private productInCart: ProductsCart[];

  constructor() {
    this.productInCart = this.loadCartFromStorage();    
  }

  private loadCartFromStorage(): ProductsCart[] {
    const cartData = localStorage.getItem(productCartKey);
    if (cartData) {
      return JSON.parse(cartData);
    }
    return [];
  }

  private saveCartToStorage(): void {
    localStorage.setItem(productCartKey, JSON.stringify(this.productInCart));
  }

  public addProductToCart(product: ProductsCart) {

    const existingProduct = this.productInCart.find(item => item.id === product.id);

    if (!existingProduct) {
      this.productInCart.push(product);
      this.saveCartToStorage();
      return;
    }

    existingProduct.quantity += product.quantity;
    this.saveCartToStorage();

  }

  public updateProductToCart(products: ProductsCart[]) {
    this.cleanCart();
    this.productInCart = products;
    this.saveCart();
  }

  private saveCart(): void {
    localStorage.setItem(productCartKey, JSON.stringify(this.productInCart));
  }

  public getProductsCart(): ProductsCart[] {
    return this.productInCart;
  }

  public cleanCart(): void {
    localStorage.removeItem(productCartKey);
    this.productInCart = [];
  }

}