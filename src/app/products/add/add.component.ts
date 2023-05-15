import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() {

   }

  ngOnInit(): void {
  }

  thumbnailURL!: string | ArrayBuffer | null;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.thumbnailURL = e.target.result;
    };

    reader.readAsDataURL(file);
  }

  uploadImage() {
    // Ajoutez ici votre logique pour envoyer l'image
    // Vous pouvez utiliser un service ou effectuer une requête HTTP
  }

}
