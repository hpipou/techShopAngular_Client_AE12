import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey = 'cart';

  constructor() { }

  addToCart(product: any) {
    const cartItems = this.getCartItems();

    // Recherche si le produit existe déjà dans le panier
    const existingProduct = cartItems.find(item => item.name === product.name);

    if (existingProduct) {
      // Si le produit existe, additionne la quantité
      existingProduct.quantity += product.quantity;
    } else {
      // Si le produit n'existe pas, ajoute-le au panier
      cartItems.push(product);
    }

    this.saveCartItems(cartItems);
  }

  getCartItems(): any[] {
    const cart = localStorage.getItem(this.cartKey);
    return cart ? JSON.parse(cart) : [];
  }

  private saveCartItems(items: any[]) {
    localStorage.setItem(this.cartKey, JSON.stringify(items));
  }
}
