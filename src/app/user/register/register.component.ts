import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm!: FormGroup;
  constructor(
                private fb: FormBuilder,
                private userService:UserService,
                private route: Router
              ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  errorMessage = ''
  errorWindow = false
  onSubmit() {
    this.userService.register(this.myForm.value).subscribe(
      (data)=>{
        localStorage.setItem('token', data.token)
        localStorage.setItem('id', data.id)
        localStorage.setItem('email', data.email)
        localStorage.setItem('username', data.username)
        this.route.navigateByUrl('/')},
      (error)=>{
        this.errorMessage = error.error.error
        this.errorWindow = true
        console.log(error)}).unsubscribe
  }

}
