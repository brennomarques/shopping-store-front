import type { LoggedUser } from '../models';
import { HttpBase } from './HttpBase';

export class User extends HttpBase {
  constructor() {
    super();
    this.endpoint = '/me';
  }

  public async me() {
    return super.findAll()
      .then(response => this.processResponse(response.data))
      .catch(error => {
        throw error;
      });
  }

  private processResponse(response: any): LoggedUser {
    return  {
      id: response.data.id,
      name: response.data.name,
      email:response.data.email,
    };
  }
}