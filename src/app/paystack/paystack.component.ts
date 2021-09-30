import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PaystackService } from '../paystack.service';

@Component({
  selector: 'app-paystack',
  templateUrl: './paystack.component.html',
  styleUrls: ['./paystack.component.scss']
})
export class PaystackComponent implements OnInit {

 
  email = new FormControl("test@teflonhub.com");
  amount = new FormControl("10");
  transaction_reference = new FormControl("MTU2OTE1NjUxMDI5LjQ2");
  currency = new FormControl("NGN");

  body = {
    "email": this.email.value,
    "amount": 10,
    "transaction_reference": this.transaction_reference.value,
    "currency": this.currency.value,
    "medium": "web"
  }

  constructor(private paystackService:PaystackService) { }

  ngOnInit(): void {
  }

  printSomething()
  {
    console.log(this.email.value)
    console.log(this.amount.value)
    console.log(this.transaction_reference.value)
    console.log(this.currency.value)
  }

  transfer()
  {
    this.paystackService.sendRequest(this.body).subscribe((data:any) => console.log(data))
  }

}
