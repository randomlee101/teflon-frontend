import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaystackComponent } from './paystack/paystack.component'

const routes: Routes = [
  {path: "", redirectTo: "/paystack", pathMatch: 'full'},
  {path: "paystack", component: PaystackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
