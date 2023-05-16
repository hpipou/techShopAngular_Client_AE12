import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  backlink = 'http://localhost:3000/product/'

  addNewProduct(formData:any): Observable<any>{
    return this.http.post(this.backlink + 'new', formData)
  }

}
