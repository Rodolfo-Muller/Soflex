import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {OrderDetailRoutingModule} from "./order-detail-routing.modules";
import { OrderDetailComponent } from './order-detail.component';
import { OrderDetailService } from '../../services/order-detail.service';


@NgModule({
  declarations: [OrderDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    OrderDetailRoutingModule,
    HttpClientModule
  ],
  providers: [OrderDetailService]

})
export class OrderDetailModule { }
