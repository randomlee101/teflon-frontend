import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PaystackService } from '../paystack.service'
import { BemaService } from '../bema.service';
import { FormControl, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-bema',
  templateUrl: './bema.component.html',
  styleUrls: ['./bema.component.scss']
})
export class BemaComponent implements OnInit {

  @Input()
  email = new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(new RegExp('@+.+'))]);

  constructor(private router: Router, private readonly paystack: PaystackService, private bema: BemaService) { }

  completeTransfer()
  {
  
    if(!this.email.invalid) 
    {
      let body = {
        "amount": this.paystack.getTransactionId().amount,
        "email": this.email.value,
        "currency":this.paystack.getTransactionId().currency,
        "transaction_reference":this.paystack.getTransactionId().transaction_reference,
        "medium":"web"
      }
      this.bema.sendRequest(body).subscribe(e => {
        console.log(e)
        this.router.navigateByUrl("/transaction_complete")
      })
    }
    else
    {
      console.log("Enter email")
    }


    
  }

  ngOnInit(): void {
  }

}
