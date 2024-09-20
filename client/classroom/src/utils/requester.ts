import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

class Requester {
  private static api = axios.create({
    baseURL: process.env.BACKEND_SERVER || 'http://localhost:3000', // Altere para a URL do seu backend
    headers: {
      'Content-Type': 'application/json',
    },
  });

  private static handleErrors(error: AxiosError) {
    return Promise.reject(error);
  }

  static get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.api.get<T>(url, config).catch(this.handleErrors);
  }

  static post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.api.post<T>(url, data, config).catch(this.handleErrors);
  }

  static put<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.api.put<T>(url, data, config).catch(this.handleErrors);
  }

  static delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.api.delete<T>(url, config).catch(this.handleErrors);
  }
}

export default Requester;
