import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PaystackService {

  constructor(private readonly http: HttpClient) { }

  getAllBanks ()
  {
     return this.http.get("https://teflon-hub.herokuapp.com/api/v1/paystack/banks", {headers: {"Authorization": `Basic ${btoa(`teflon:newuser`)}`}});
  }
}
