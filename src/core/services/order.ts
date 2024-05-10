import type { Client } from '../models';
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
}