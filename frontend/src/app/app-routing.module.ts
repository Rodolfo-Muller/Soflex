import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "auth", loadChildren: "./components/auth/auth.module#AuthModule" },
  {path: "order", loadChildren: "./components/order/order.module#OrderModule"},
  {path: "product", loadChildren: "./components/product/product.module#ProductModule"},
  {path: "orderDetail", loadChildren: "./components/order-detail/order-detail.module#OrderDetailModule"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
