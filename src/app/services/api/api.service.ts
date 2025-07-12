
import { Injectable } from '@angular/core';
import { Http } from '@capacitor-community/http';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseURL = 'http://10.0.2.2:3000';
  constructor() {}

  async createOrder(order: any): Promise<any> {
    const options = {
      url: `${this.baseURL}/orders`,
      headers: { 'Content-Type': 'application/json' },
      data: order
    };
    try {
      const response = await Http.post(options);
      return response.data;
    } catch (err) {
      console.error('Error al crear pedido (Capacitor HTTP):', err);
      throw err;
    }
  }


  async getOrders(): Promise<any[]> {
    const options = { url: `${this.baseURL}/orders` };
    const res = await Http.get(options);
    return res.data;
  }

  async getOrder(id: string): Promise<any> {
    const options = { url: `${this.baseURL}/orders/${id}` };
    const res = await Http.get(options);
    return res.data;
  }

  async updateOrder(id: string, order: any): Promise<any> {
    const options = {
      url: `${this.baseURL}/orders/${id}`,
      headers: { 'Content-Type': 'application/json' },
      data: order
    };
    const res = await Http.put(options);
    return res.data;
  }

  async deleteOrder(id: string): Promise<any> {
    const options = { url: `${this.baseURL}/orders/${id}` };
    const res = await Http.del(options);
    return res.data;
  }
}

