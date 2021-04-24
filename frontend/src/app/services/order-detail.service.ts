import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {OrderDetail} from "../models/orderDetail"

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {
  selectedOrderDetail: OrderDetail;
  ordersDetails: OrderDetail[];
  readonly URL_API = "http://localhost:3000/orderDetail";

  constructor(private http: HttpClient) {
    this.selectedOrderDetail = new OrderDetail();
  }

  postOrderDetail(orderDetail: OrderDetail) {
    return this.http.post(this.URL_API+'/create',orderDetail);
  }

  getOrdersDetails() {
    return this.http.get<OrderDetail[]>(this.URL_API+'/all');
  }

  putOrderDetail(orderDetail: OrderDetail) {
    return this.http.put(this.URL_API + `/${orderDetail.orderDetailId}`, orderDetail);
  }

  deleteOrderDetail(orderDetailId: string) {
    return this.http.delete(this.URL_API + `/${orderDetailId}`);
  }
}
  
