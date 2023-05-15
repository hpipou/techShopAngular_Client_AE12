import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor() { }
  id! : any
  email! : any
  username! : any

  ngOnInit(): void {
    this.id = localStorage.getItem('id')
    this.email = localStorage.getItem('email')
    this.username = localStorage.getItem('username')
  }

}
