import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  myForm!: FormGroup;
  constructor(
                private fb: FormBuilder,
                private userService:UserService,
                private route: Router
              ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      oldpassword: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  errorMessage = ''
  errorWindow = false
  onSubmit() {
    this.userService.register(this.myForm.value).subscribe(
      (data)=>{
        this.route.navigateByUrl('/')},
      (error)=>{
        this.errorMessage = error.error.error
        this.errorWindow = true
        console.log(error)}).unsubscribe
  }

}
