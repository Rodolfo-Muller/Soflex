import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ProductRoutingModule} from "./product-routing.module";
import { ProductComponent } from './product.component';
import { ProductService } from '../../services/product.service';


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService]

})
export class ProductModule { }
