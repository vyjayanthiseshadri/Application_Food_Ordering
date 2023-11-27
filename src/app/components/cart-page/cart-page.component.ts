import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;

  constructor(private cartService: CartService, private router: Router,private commonService:CommonService) {
    this.setCart();
    // Initializing the cart properly
  }

  ngOnInit(): void {
    this.commonService.showHeader.next(false);
    this.commonService.showFooter.next(false);
  }

  navigateToDetails() {
    this.router.navigateByUrl('/details');
    // navigates to Details page(Orders page)
  }

  navigateToCheckout() {
    this.router.navigateByUrl('/checkout');
    // navigates to Checkout page
  }

  navigateToFood(foodId: number) {
    this.router.navigateByUrl(`/food/${foodId}`);
    //navigates to the page containing the food id
  }

  

  setCart() {
    this.cart = this.cartService.getCart();
    // Initializes the cart property by calling the getCart method of CartService
  }

  // Removes an item from the cart by calling the removeFromCart from CartService
  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  // Decreases the quantity of the cart Item only if the quantity is greater than 1
  decrementQuantity(cartItem: CartItem): void {
    if (cartItem.quantity > 1) {
      cartItem.quantity--;
    }
  }

  // Increases the quantity of the cart Item
  incrementQuantity(cartItem: CartItem): void {
    cartItem.quantity++;
  }


  ngOnDestroy()
  {
    this.commonService.showHeader.next(true);
  }
}
