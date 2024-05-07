import axios, { type AxiosInstance } from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL as string,
  headers: {
    Authorization: 'Bearer token',
    'Content-Type': 'application/json'
  }
})

export default instance
