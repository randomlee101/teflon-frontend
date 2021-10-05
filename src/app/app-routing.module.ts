import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BemaComponent } from './bema/bema.component';
import { InvoicePageComponent } from './invoice-page/invoice-page.component';
import { PaystackComponent } from './paystack/paystack.component'
import { TransactionCompleteComponent } from './transaction-complete/transaction-complete.component';
import { TransactionFailedComponent } from './transaction-failed/transaction-failed.component';

const routes: Routes = [
  {path: "", redirectTo: "/invoice_page", pathMatch: 'full'},
  {path: "invoice_page", component: InvoicePageComponent},
  {path: "paystack", component: PaystackComponent},
  {path: "bema", component: BemaComponent},
  {path: "transaction_complete", component: TransactionCompleteComponent},
  {path: "transaction_failed", component: TransactionFailedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
