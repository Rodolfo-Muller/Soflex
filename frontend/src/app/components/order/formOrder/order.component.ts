import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../../services/order.service';
import {Order} from "../../../models/order";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [OrderService],
})
export class OrderComponent implements OnInit {
  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.getOrders();
  }

  addOrder(form?: NgForm) {
    if (form.value._id) {
      this.orderService.putOrder(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getOrders();
      });
    } else {
      this.orderService.postOrder(form.value).subscribe((res) => {
        this.getOrders();
        this.resetForm(form);
      });
    }
  }

  getOrders() {
    this.orderService.getOrders().subscribe((res) => {
      this.orderService.orders = res;
      console.log(res)
    });
  }

  editOrder(order: Order) {
    this.orderService.selectedOrder = order;
  }

  deleteOrder(orderId: string, form: NgForm) {
    if (confirm("Are you sure you want to delete it?")) {
      this.orderService.deleteOrder(orderId).subscribe((res) => {
        this.getOrders();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.orderService.selectedOrder = new Order();
    }
  }

}
