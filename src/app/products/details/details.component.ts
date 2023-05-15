import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  productName = "produit 01"
  productDescription= "produit 01 description"
  productQuantity: number = 1;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }

  addToCart() {
    const product = {
      name: this.productName,
      quantity: this.productQuantity
    };

    this.cartService.addToCart(product);
  }

}
