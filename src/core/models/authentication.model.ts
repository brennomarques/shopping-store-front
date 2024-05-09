export interface LoginPayload {
  email: string;
  password: string;
}
export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  c_password: string;
}
export interface Credentials {
  access_token: string;
  success: boolean;
}
export interface LoggedUser {
  id: string;
  name: string;
  email: string;
}

