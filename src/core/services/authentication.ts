import { HttpBase } from './HttpBase';

import type { Credentials, LoginPayload } from '@/core/models/authentication.model';
import { Authorization } from './authorization';

export class Authentication extends HttpBase {
  constructor() {
    super();
    this.endpoint = '/login';
  }

  public async login(payload: LoginPayload): Promise<void> {
    
    return super.create(payload)
      .then(response => this.processResponse(response.data))
      .then(data => this.setCredentials(data))
      .catch(error => {
        throw error;
      });
  }

  private processResponse(response: any): Credentials {
    const credential: Credentials = {
      access_token: response.message.access_token,
      success: response.success,
    };
    return credential;
  }

  private setCredentials(data: Credentials): void {
    new Authorization().setCredentials(data); 
  }
}
