import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PaystackService } from '../paystack.service';
import { Router } from '@angular/router';

interface bank {
  name: string,
  code: string
}

@Component({
  selector: 'app-paystack',
  templateUrl: './paystack.component.html',
  styleUrls: ['./paystack.component.scss']
})


export class PaystackComponent implements OnInit {

  initialBank:bank ={
    name: "Select Bank",
    code: "000"
  }
  listOfBanks:bank[] = [this.initialBank]

  inputs: any = [
    {
      type: "text",
      placeholder: "Account Number"
    },
    {
      type: "select",
      placeholder: "Bank Name",
      options: this.listOfBanks
    },
    {
      type: "select",
      placeholder: "Currency",
      options: [
        {
          name: "Select Currency",
          code: null
        },
        {
          name: "NGN",
          code: "NGN"
        },
        {
          name: "GHC",
          code: "GHC"
        }
      ]
    }
  ]

  constructor(private repo: PaystackService, private router: Router) {

  }

  toFailedPage()
  {
    this.router.navigateByUrl('/transaction_failed')
  }

  printCode(code: string)
  {
    console.log("What I paid for "+code)
  }

  ngOnInit() {
    this.repo.getAllBanks().subscribe(f => f.data.map((d: any) => this.listOfBanks.push({"name": d.name, "code": d.code})))
    console.log(this.listOfBanks)
  }

}
