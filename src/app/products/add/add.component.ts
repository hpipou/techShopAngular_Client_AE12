import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  myForm!: FormGroup;
  constructor(
                private productService:ProductService,
                private fb: FormBuilder
              ) {
   }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      productName: ['', Validators.required],
      productDetails: ['', [Validators.required]],
      productPrice: ['', Validators.required]
    });
  }


  thumbnailURL!: string | ArrayBuffer | null;
  imgToUpload!: File;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.imgToUpload = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.thumbnailURL = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  errorMsg!:any
  msgFailed ={ error : this.errorMsg}
  uploadSuccess=false
  uploadFailed=false

  onSubmit() {


    const formData = new FormData();
    if(this.imgToUpload){

      formData.append("file", this.imgToUpload, this.imgToUpload.name);
      formData.append("productName", this.myForm.value.productName);
      formData.append("productDetails", this.myForm.value.productDetails);
      formData.append("productPrice", this.myForm.value.productPrice);

      this.productService.addNewProduct(formData).subscribe(
        ()=>{
          this.uploadSuccess=true
          this.uploadFailed=false
        },
        (err:any)=>{
          this.uploadSuccess=false
          this.uploadFailed=true
          this.msgFailed={ error : err.error.error}
        }
      )

    }else{
      this.uploadSuccess=false
      this.uploadFailed=true
      this.msgFailed = { error : "Sélectionnez une image"}
    }

  }

  makeMeRefresh(){
    window.location.reload()
  }

}
