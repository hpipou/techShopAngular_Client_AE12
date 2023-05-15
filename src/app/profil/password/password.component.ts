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
      password: ['', Validators.required],
      newpassword: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    });

  }

  successWindow = false
  errorMessage = ''
  errorWindow = false
  token= ''
  onSubmit() {
    if(this.myForm.value.newpassword!=this.myForm.value.confirmpassword)
    {
      this.errorMessage = "NEW PASSWORD CONFIRMATION ERROR"
      this.errorWindow = true
    }else{

      this.userService.changePassword(this.myForm.value).subscribe(
        ()=>{
          this.successWindow = true
        },
        (error)=>{
          this.errorMessage = error.error.error
          this.errorWindow = true
          this.successWindow = false
        }).unsubscribe
    }

  }

}
