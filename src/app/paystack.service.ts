import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http'
import { catchError } from 'rxjs/operators'
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaystackService {

  constructor(private readonly http: HttpClient) { }

  sendRequest (body: any)
  {
    console.log(btoa(`teflon:newuser`))
    // const headers = new HttpHeaders({Authorization: `Basic ${btoa("teflon"+":"+"newuser")}`, 'Content-Type':'multipart/form-data', "Access-Control-Allow-Origin":"*"})
     return this.http.post("https://teflon-hub.herokuapp.com/api/v1/bema/make_payment", body, {headers: {"Authorization": `Basic ${btoa(`teflon:newuser`)}`}});
  }
}
