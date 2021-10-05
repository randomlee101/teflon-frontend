import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PaystackService } from '../paystack.service';

@Component({
  selector: 'app-paystack',
  templateUrl: './paystack.component.html',
  styleUrls: ['./paystack.component.scss']
})
export class PaystackComponent implements OnInit {

  listOfBanks:any = []

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
        "NGN","GHC"
      ]
    }
  ]

  constructor(private repo: PaystackService) {

  }

  ngOnInit() {
    this.repo.getAllBanks().subscribe(e => console.log(e))
  }

}
