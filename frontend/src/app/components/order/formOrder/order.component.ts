import { Component, OnInit } from "@angular/core";
import { OrderService } from "../../../services/order.service";
import { Order } from "../../../models/order";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"],
  providers: [OrderService],
})
export class OrderComponent implements OnInit {
  private orders: Order[];
  constructor(private orderService: OrderService, private router: Router) {}

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
      this.orders = res["order"];
    });
  }

  editOrder(order) {
    this.orderService.selectedOrder = order;
    this.router.navigate(["/order/crud"]);
  }

  deleteOrder(order, form: NgForm) {
    if (confirm("Are you sure you want to delete it?")) {
      this.orderService.deleteOrder(order.orderId).subscribe((res) => {
        this.orders.splice(this.orders.indexOf(order), 1);
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
      this.orderService.selectedOrder = new Order();
    }
  }
}
