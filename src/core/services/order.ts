import type { Client, OrderItems, purchases } from '../models';
import { HttpBase } from './HttpBase';

export class Order extends HttpBase {
  constructor() {
    super();
    this.endpoint = '/order';
  }

  public async createOrder(payload: Client): Promise<void> {  
    return super.create(payload)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  }

  public async getAll(searchParam?: string) {
    return super.findAll(searchParam)
      .then(response => this.processResponse(response.data))
      .catch(error => {
        throw error;
      });
  }

  private processResponse(response: any) {
    const purchases: purchases[] = response.data.map((item: any) => {
      const orderItems: OrderItems[] = item.order_items.map((orderItem: any) => {
        return {
          name: 'Product 1',
          quantity: orderItem.quantity,
          price: orderItem.price,
          created_at: orderItem.created_at,
        };
      });

      return {
        name: item.name,
        delivery_at: item.delivery_at,
        created_at: item.created_at,
        order_items: orderItems,
      };
    });
  
    return purchases;
  }
}