// import axios, { type AxiosResponse } from 'axios'

import axios, { type AxiosResponse } from 'axios';
import { Authorization } from './authorization';

export abstract class HttpBase {
  
  protected endpoint: string;

  constructor() {
    this.endpoint = '';

    axios.interceptors.request.use((config) => {
      
      config.baseURL = import.meta.env.VITE_BASE_URL as string;
      config.headers.Accept = 'application/json';
      config.headers['Content-Type'] = 'application/json';
      // const requiresToken = config.url && config.url.includes('/api/protected');

      const credentials = new Authorization().getAuthenticated();

      if (credentials && credentials.access_token) {
        config.headers.Authorization = `Bearer ${credentials.access_token}`;
      }

      return config;
    });
  }  

  async findAll(searchParam?: string): Promise<AxiosResponse> {
    let endpoint = this.endpoint;

    if (searchParam) {
      endpoint += `?search=${searchParam}`;
    }

    const response = await axios.get(endpoint);
    return response;
  }

  async create(payload?: any): Promise<AxiosResponse<any, any>> {
    const response = await axios.post(this.endpoint, payload);
    return response;
  }
}
