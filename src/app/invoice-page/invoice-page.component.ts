import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-invoice-page',
  templateUrl: './invoice-page.component.html',
  styleUrls: ['./invoice-page.component.scss']
})
export class InvoicePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  payWithPayStack()
  {
    this.router.navigateByUrl("/paystack")
  }

}
