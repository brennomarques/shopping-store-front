import type { RegisterPayload } from '../models';
import { HttpBase } from './HttpBase';

export class RegisterUser extends HttpBase {
  constructor() {
    super();
    this.endpoint = '/register';
  }


  public async register(payload: RegisterPayload) {
    
    return super.create(payload)
      .then(response => response.data)
      .catch(error => {
        throw new Error(error);
      });
  }

}