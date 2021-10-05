import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BemaService {

  constructor(private readonly http:HttpClient) { }

  sendRequest (body: any)
  {
     return this.http.post("https://teflon-hub.herokuapp.com/api/v1/bema/make_payment", body, {headers: {"Authorization": `Basic ${btoa(`teflon:newuser`)}`}});
  }
}
