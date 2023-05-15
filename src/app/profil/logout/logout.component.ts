import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderServiceService } from 'src/app/services/header-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
                private route:Router,
                private headerRefresh: HeaderServiceService
              ) { }

  ngOnInit(): void {
    setTimeout(()=>{
      localStorage.removeItem('token')
      localStorage.removeItem('id')
      localStorage.removeItem('username')
      localStorage.removeItem('email')

      const status = {
        // Les propriétés mises à jour du HEADER
        "status": false
      };

      this.headerRefresh.updateProduct(status);

      this.route.navigateByUrl('/')
    }, 2000)
  }

}
