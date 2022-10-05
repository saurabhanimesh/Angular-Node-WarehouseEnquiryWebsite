import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FormSubmitService {
  headers: HttpHeaders

  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json', Accept: 'application/json;' })
  }

  signUpSubmit(value:any){
    const options = { headers: this.headers, method: 'post' }
      return this.http.post('https://secret-river-15869.herokuapp.com/register/signup', value, options )
  }
}
