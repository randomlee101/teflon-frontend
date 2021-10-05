import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PaystackService {

  constructor(private readonly http: HttpClient) { }

  sendRequest (body: any)
  {
     return this.http.post("https://teflon-hub.herokuapp.com/api/v1/paystack/make_payment", body, {headers: {"Authorization": `Basic ${btoa(`teflon:newuser`)}`}});
  }
}
