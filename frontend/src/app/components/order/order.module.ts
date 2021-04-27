import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {OrderRoutingModule} from "./order-routing.module";
import { OrderComponent } from './order.component';
import { OrderService } from '../../services/order.service';


@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    FormsModule,
    OrderRoutingModule,
    HttpClientModule,
  
  ],
  providers: [OrderService]

})
export class OrderModule { }
