import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaystackComponent } from './paystack/paystack.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { PaystackService } from './paystack.service';
import { BemaComponent } from './bema/bema.component';
import { InvoicePageComponent } from './invoice-page/invoice-page.component';
import { TransactionCompleteComponent } from './transaction-complete/transaction-complete.component';
import { TransactionFailedComponent } from './transaction-failed/transaction-failed.component';

@NgModule({
  declarations: [
    AppComponent,
    PaystackComponent,
    LoginComponent,
    BemaComponent,
    InvoicePageComponent,
    TransactionCompleteComponent,
    TransactionFailedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PaystackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
