import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';


interface res {
  status: string,
  message: string,
  data: any
}

@Injectable({
  providedIn: 'root'
})
export class PaystackService {

  constructor(private readonly http: HttpClient) { }



  getTransactionId()
  {
    return {
      transaction_reference: "1234567890",
      amount: 10,
      currency: "NGN"
    };
  }

  getAllBanks():Observable<res>
  {
     return this.http.get<res>("https://api.paystack.co/bank");
  }
}
