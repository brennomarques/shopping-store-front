// import axios, { type AxiosResponse } from 'axios'

import axios, { AxiosError, type AxiosResponse } from 'axios';

export abstract class HttpBase {
  private baseUrl: string;
  protected endpoint: string;

  constructor() {
    this.baseUrl = import.meta.env.VITE_BASE_URL as string;
    this.endpoint = '';
  }

  async getAsync(): Promise<AxiosResponse> {
    try {
      const response = await axios.get(`${this.baseUrl}${this.endpoint}`);
      return response;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        console.error(axiosError.toJSON());
        throw new Error(`HTTP GET error! ${axiosError.message}`);
      } else {
        console.error('Unknown error:', error);
        throw new Error('Unknown error occurred.');
      }
    }
  }

  async create(payload: any, config?: any) {
    if (!config) {
      // eslint-disable-next-line no-param-reassign
      config = {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      };
    }
    const response = await axios.post(`${this.baseUrl}${this.endpoint}`, payload, config);
    return response;
  }
}
