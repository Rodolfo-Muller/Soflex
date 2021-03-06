import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Order} from "../models/order";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  selectedOrder: Order;
  orders: Order[];
  readonly URL_API = "http://localhost:3000/order";

  constructor(private http: HttpClient) {
    this.selectedOrder = new Order();
  }

  postOrder(order: Order) {
    return this.http.post(this.URL_API+'/create', order);
  }

  getOrders() {
    return this.http.get<Order[]>(this.URL_API+'/all');
  }

  putOrder(order: Order) {
    return this.http.put(this.URL_API + `/${order.orderId}`, order);
  }

  deleteOrder(orderId: string) {
    return this.http.delete(this.URL_API + `/${orderId}`);
  }
}