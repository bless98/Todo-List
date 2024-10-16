import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { registerLocaleData } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient) { }

  TokenAPI = environment.URL;

 login(formData:any){}
 

 registerUser(user: any): Observable<any> {
   return this.http.post(`${this.TokenAPI}/auth/signup/`,user)
 }
getUser(){
 return this.http.get(`${this.TokenAPI}/auth/me`)
}
}
