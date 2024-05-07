import type { Credentials, LoggedUser } from '../models';

const credentialsKey = 'credentials';
const usersKey = 'user';

export class Authorization {

  private credentials: Credentials | null = null;
  private user: LoggedUser | null = null;

  constructor() {
    const savedCredentials = localStorage.getItem(credentialsKey);

    if (savedCredentials) {
      this.credentials = JSON.parse(savedCredentials);
    }

    const savedUser = localStorage.getItem(usersKey);
    if (savedUser) {
      this.user = JSON.parse(savedUser);
    }
  }

  isAuthenticated(): boolean {
    const credentialsVal = localStorage.getItem(credentialsKey);
    
    // Nega acesso se não houver credenciais salvas no localStorage
    if (!credentialsVal) {
      return false;
    }    
    const credentials = JSON.parse(credentialsVal);

    return credentials;
  }

  getCredentials() {
    // if (this._tempAccessToken) {
    //   return this._tempAccessToken;
    // }

    // return this._credentials ? this._credentials.access_token : null;
  }

  setCredentials(credentials: Credentials) {
    this.credentials = credentials;

    if (credentials) {
      localStorage.setItem(credentialsKey, JSON.stringify(credentials));
      return;
    } 

    localStorage.removeItem(credentialsKey);
    
  }

}