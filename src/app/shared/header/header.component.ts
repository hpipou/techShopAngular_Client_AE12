import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  connected = false
  token = localStorage.getItem('token')

  ngOnInit(): void {

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
