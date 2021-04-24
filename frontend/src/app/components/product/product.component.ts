import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/product';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {
private products:Product[];
  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit() {
    this.getProducts();
  }

  addProduct(form?: NgForm) {
    if (form.value._id) {
      this.productService.putProduct(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getProducts();
      });
    } else {
      this.productService.postProduct(form.value).subscribe((res) => {
        this.getProducts();
        this.resetForm(form);
      });
    }
  }

  getProducts() {
    this.productService.getProducts().subscribe((res) => {
      this.products = res["product"];
    });
  }

  editProduct(product) {
    this.productService.selectedProduct = product;
    this.router.navigate(["/product/crud"]);
  }

  deleteProduct(product, form: NgForm) {
    if (confirm("Are you sure you want to delete it?")) {
      this.productService.deleteProduct(product.productId).subscribe((res) => {
        this.products.splice(this.products.indexOf(product), 1);
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
      this.productService.selectedProduct = new Product();
    }
  }

}
