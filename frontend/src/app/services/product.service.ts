import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  selectedProduct: Product;
  product: Product[];
  readonly URL_API = "http://localhost:3000/product";

  constructor(private http: HttpClient) {
    this.selectedProduct = new Product();
  }

  postProduct(product: Product) {
    return this.http.post(this.URL_API+'/create', product);
  }

  getProducts() {
    return this.http.get<Product[]>(this.URL_API+'/all');
  }

  putProduct(product: Product) {
    return this.http.put(this.URL_API + `/${product.productId}`, product);
  }

  deleteProduct(productId: string) {
    return this.http.delete(this.URL_API + `/${productId}`);
  }
}
