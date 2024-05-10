import { HttpBase } from './HttpBase';
import { Authorization } from './authorization';

export class Logout extends HttpBase {
  constructor() {
    super();
    this.endpoint = '/logout';
  }

  public async logout(): Promise<void> {
    return super.create()
      .then(() => this.cleanCredentials())
      .then(() => this.cleanUser())
      .catch(error => {
        throw error;
      });
  }

  private cleanCredentials(): void {
    new Authorization().cleanCredentials(); 
  }

  private cleanUser(): void {
    new Authorization().cleanUser(); 
  }
  
}