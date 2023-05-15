import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { HeaderServiceService } from 'src/app/services/header-service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  myForm!: FormGroup;

  constructor(
                private fb: FormBuilder,
                private userService:UserService,
                private route: Router,
                private headerRefresh: HeaderServiceService
              ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
            password: ['', Validators.required]
          });
  }

  successWindow = false
  errorMessage = ''
  errorWindow = false
  token= ''
  onSubmit() {

    this.userService.deleteAccount(this.myForm.value).subscribe(
      ()=>{

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
      },
      (error)=>{
        this.errorMessage = error.error.error
        this.errorWindow = true
        this.successWindow = false
      }).unsubscribe

  }

}
