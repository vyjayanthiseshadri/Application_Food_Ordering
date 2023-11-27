import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should add a new item to the cart', () => {
    const food = {
      id:1,
      price:35,
      name:'Butter Roti',
      favorite:true,
      star:4,
      tags:['roti','butter','tasty'],
      imageUrl:'/assets/north/butterRoti.png',
      cookTime:'10-15',
      origins:['north Indian', 'Rajasthani']
    }; // Replace with your mock data
    service.addToCart(food);

    const cart = service.getCart();
    expect(cart.items.length).toBe(1);
    expect(cart.items[0].food).toEqual(food);
    expect(cart.items[0].quantity).toBe(1);
  });

  it('should increment quantity for existing item in the cart', () => {
    const food = {
      id:1,
      price:35,
      name:'Butter Roti',
      favorite:true,
      star:4,
      tags:['roti','butter','tasty'],
      imageUrl:'/assets/north/butterRoti.png',
      cookTime:'10-15',
      origins:['north Indian', 'Rajasthani']
    }; // Replace with your mock data
    service.addToCart(food);
    service.addToCart(food);

    const cart = service.getCart();
    expect(cart.items.length).toBe(1);
    expect(cart.items[0].food).toEqual(food);
    expect(cart.items[0].quantity).toBe(2);
  });

  it('should remove item from the cart', () => {
    const foodId = 1; // Replace with your mock data
    service.addToCart({
      id:1,
      price:35,
      name:'Butter Roti',
      favorite:true,
      star:4,
      tags:['roti','butter','tasty'],
      imageUrl:'/assets/north/butterRoti.png',
      cookTime:'10-15',
      origins:['north Indian', 'Rajasthani']
    });
    service.removeFromCart(foodId);

    const cart = service.getCart();
    expect(cart.items.length).toBe(0);
  });

  it('should change quantity of an item in the cart', () => {
    const foodId = 1; // Replace with your mock data
    const newQuantity = 3;
    service.addToCart({
      id:1,
      price:35,
      name:'Butter Roti',
      favorite:true,
      star:4,
      tags:['roti','butter','tasty'],
      imageUrl:'/assets/north/butterRoti.png',
      cookTime:'10-15',
      origins:['north Indian', 'Rajasthani']
    });
    service.changeQuantity(foodId, newQuantity);

    const cart = service.getCart();
    expect(cart.items.length).toBe(1);
    expect(cart.items[0].quantity).toBe(newQuantity);
  });

  

});
