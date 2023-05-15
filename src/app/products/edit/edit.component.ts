import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor() { }

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
