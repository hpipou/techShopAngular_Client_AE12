import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderServiceService {

  constructor() { }

  private loginStatus = new BehaviorSubject<any>(null);
  status$ = this.loginStatus.asObservable();

  updateProduct(status: any) {
    this.loginStatus.next(status);
  }
}
