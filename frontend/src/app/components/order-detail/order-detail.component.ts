import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import {OrderDetailService} from "../../services/order-detail.service";
import {OrderDetail} from "../../models/orderDetail";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
  providers:[OrderDetailService]
})
export class OrderDetailComponent implements OnInit {
  private ordersDetails:OrderDetail[];
  constructor(private orderDetailService: OrderDetailService, private router:Router) { }

  ngOnInit() {
    this.getOrdersDetails();
  }

  addOrderDetail(form?: NgForm) {
    if (form.value._id) {
      this.orderDetailService.putOrderDetail(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getOrdersDetails();
      });
    } else {
      this.orderDetailService.postOrderDetail(form.value).subscribe((res) => {
        this.getOrdersDetails();
        this.resetForm(form);
      });
    }
  }

  getOrdersDetails() {
    this.orderDetailService.getOrdersDetails().subscribe((res) => {
      this.ordersDetails = res["orderDetail"];
    });
  }

  editOrderDetail(orderDetail) {
    this.orderDetailService.selectedOrderDetail = orderDetail;
    this.router.navigate(["/orderDetail/crud"]);
  }

  deleteProduct(orderDetail, form: NgForm) {
    if (confirm("Are you sure you want to delete it?")) {
      this.orderDetailService.deleteOrderDetail(orderDetail.orderDetailId).subscribe((res) => {
        this.ordersDetails.splice(this.ordersDetails.indexOf(orderDetail), 1);
        this.refresh;
      });
    }
  }
  refresh(): void {
    window.location.reload();
}
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.orderDetailService.selectedOrderDetail = new OrderDetail();
    }
  }
}
