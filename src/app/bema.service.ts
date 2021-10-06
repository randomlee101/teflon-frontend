import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BemaService {

  constructor(private readonly http:HttpClient) { }

  sendRequest (body: any)
  {
     return this.http.post("https://teflon-hub.herokuapp.com/api/v1/bema/make_payment", body);
    //  return this.http.get<string>("http://localhost:8080/api/v1/flutterwave/make_payment");
  }
}
