import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "autenticacion", loadChildren: "./components/auth/auth.module#AuthModule" },
  {path: "pedido", loadChildren: "./components/order/order.module#OrderModule"},
  {path: "producto", loadChildren: "./components/product/product.module#ProductModule"},
  {path: "pedidoDetalle", loadChildren: "./components/order-detail/order-detail.module#OrderDetailModule"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
