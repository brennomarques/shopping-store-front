import { HttpBase } from './HttpBase';

import type { LoginPayload } from '@/core/models/authentication.model';

export class AuthenticationService extends HttpBase {
  constructor() {
    super();
    this.endpoint = '/login';
  }

  public async login(payload: LoginPayload) {
    console.log(payload);
    return await super.crete(payload);
  }
}
