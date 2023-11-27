// CART SERVICE PAGE
import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { Foods } from '../shared/models/food';
import { CartItem } from '../shared/models/CartItem';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();

  // Adds a Food Item to the cart
  addToCart(food: Foods): void {

    // Adds the food Item into the cart
    let cartItem = this.cart.items.find(item => item.food.id === food.id)
    if (cartItem) {
      // If the same food Item is added then the quantity increases
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    // If the food Item is not already present in the cart,
    // this new food item is pushed to the cart or added newly to the cart
    this.cart.items.push(new CartItem(food));
  }


  // Removing a Food Item from the cart
  removeFromCart(foodId: number): void {

  
    // Here the filter method creates a new array eith food Items except the ones removed
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId)
  }

  // As the quantity changes even the price changes
  changeQuantity(foodId: number, quantity: number) {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    // If there are no Food Items in the cart then not found message is displayed
    if (!cartItem) return;
    // Otherwise if the item is already present, then change the quantity
    cartItem.quantity = quantity;
  }

  // It returns the current state of cart
  getCart(): Cart {
    return this.cart;
  }

}


