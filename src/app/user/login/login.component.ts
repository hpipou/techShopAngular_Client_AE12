import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderServiceService } from 'src/app/services/header-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm!: FormGroup;
  constructor(
                private fb: FormBuilder,
                private userService:UserService,
                private route: Router,
                private headerRefresh: HeaderServiceService
              ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  errorMessage = ''
  errorWindow = false
  onSubmit() {
    this.userService.login(this.myForm.value).subscribe(
      (data)=>{
        localStorage.setItem('token', data.token)
        localStorage.setItem('id', data.id)
        localStorage.setItem('email', data.email)
        localStorage.setItem('username', data.username)

        const status = {
          // Les propriétés mises à jour du HEADER
          "status": true
        };

        this.headerRefresh.updateProduct(status);

        this.route.navigateByUrl('/')},
      (error)=>{
        this.errorMessage = error.error.error
        this.errorWindow = true
        console.log(error)}).unsubscribe
  }

}
