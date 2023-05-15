import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HeaderServiceService } from 'src/app/services/header-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() updateHeader: EventEmitter<any> = new EventEmitter();

  constructor(private headerRefresh:HeaderServiceService) { }
  connected = false
  token = localStorage.getItem('token')

  ngOnInit(): void {

    this.headerRefresh.status$.subscribe((product) => {
      if(product){
        this.connected = product.status
      }
    });

    if(this.token==null){
      this.connected = false
    }else{
      if (this.tokenExpired(this.token)) {
        this.connected = false;
      } else {
        this.connected = true;
      }
    }

  }

  private tokenExpired(token: string) {
    const expiry = (JSON.parse(window.atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

}
