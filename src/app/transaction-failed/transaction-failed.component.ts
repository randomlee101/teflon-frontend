import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-transaction-failed',
  templateUrl: './transaction-failed.component.html',
  styleUrls: ['./transaction-failed.component.scss']
})
export class TransactionFailedComponent implements OnInit {



  constructor(private router: Router) { }

  proceedToBankTransfer()
  {
    this.router.navigateByUrl('/bema')
  }

  ngOnInit(): void {
  }

}
