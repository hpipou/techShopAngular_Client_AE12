import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  backlink = "http://localhost:3000/user/"

  register(form:any): Observable<any>{
    return this.http.post(this.backlink + "register", form)
  }

  login(form:any): Observable<any>{
    return this.http.post(this.backlink + "login", form)
  }

  changePassword(form:any): Observable<any>{
    return this.http.post(this.backlink + "password", form)
  }

  deleteAccount(form:any): Observable<any>{
    return this.http.post(this.backlink + "delete", form)
  }
}
