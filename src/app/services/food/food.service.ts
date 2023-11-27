// FOOD SERVICE PAGE

import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  //Gets the list of Food Items with matching ID
  getFoodById(id:number):Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  // Get the list of Food Items with matching tags
  getAllFoodsByTag(tag:string):Foods[]{
    return tag == 'All'? 
    this.getAll():this.getAll().filter(food =>food.tags?.includes(tag));
  }


  // Conists of all food with tags and the count
  getAllTag(): Tag[] {
    return [
      {name: 'All', count: 12},
      {name: 'roti', count: 2},
      {name: 'butter', count: 4},
      {name: 'tasty', count: 7},
      {name: 'gravy', count: 6},
      {name: 'paneer', count: 3},
      {name: 'creamy', count: 3},
      {name: 'paratha', count: 2},
      {name: 'aloo', count: 4},
      {name: 'spicy', count: 5},
      {name: 'mushroom', count: 1},
      {name: 'onion', count: 3},
      {name: 'puri', count: 1},
    ];
  }
  

  //Returns all the food items with details
  getAll():Foods[]{
    return [
      {
        id:1,
        price:35,
        name:'Butter Roti',
        favorite:true,
        star:4,
        tags:['roti','butter','tasty'],
        imageUrl:'/assets/north/butterRoti.png',
        cookTime:'10-15',
        origins:['north Indian', 'Rajasthani']
      },

      {
        id:2,
        price:45,
        name:'Kulcha',
        favorite:false,
        star:3,
        tags:['butter','tasty','roti'],
        imageUrl:'/assets/north/kulcha.png',
        cookTime:'10-20',
        origins:['north Indian', 'Maharashtrian']
      },

      {
        id:3,
        price:220,
        name:'Paneer Butter Masala',
        favorite:true,
        star:5,
        tags:['gravy','butter','tasty','paneer','creamy'],
        imageUrl:'/assets/north/paneerButterMasala.png',
        cookTime:'20-30',
        origins:['north Indian', 'Gujarathi']
      },

      {
        id:4,
        price:200,
        name:'Aloo Paratha',
        favorite:true,
        star:4,
        tags:['paratha','butter','aloo','spicy'],
        imageUrl:'/assets/north/AlooParatha.png',
        cookTime:'10-20',
        origins:['north Indian', 'Madhya Pradesh']
      },

      {
        id:5,
        price:240,
        name:'Mushroom Masala',
        favorite:false,
        star:3,
        tags:['gravy','mushroom','creamy','spicy'],
        imageUrl:'/assets/north/mushroomMasala.png',
        cookTime:'20-30',
        origins:['north Indian', 'Bihari']
      },

      {
        id:6,
        price:240,
        name:'Paneer Burj',
        favorite:false,
        star:3,
        tags:['paneer','spicy','gravy'],
        imageUrl:'/assets/north/paneerBurji.png',
        cookTime:'20-25',
        origins:['north Indian', 'Jharkandi']
      },

      {
        id:7,
        price:210,
        name:'Chole Bature',
        favorite:true,
        star:4,
        tags:['gravy','tasty','onion','creamy'],
        imageUrl:'/assets/north/choleBature.png',
        cookTime:'15-25',
        origins:['north Indian', 'Rajasthani']
      },

      {
        id:8,
        price:190,
        name:'Puri Aloo',
        favorite:true,
        star:4,
        tags:['puri','aloo','tasty'],
        imageUrl:'/assets/north/alooPuri.png',
        cookTime:'15-20',
        origins:['north Indian', 'Maharashtrian']
      },

      {
        id:9,
        price:120,
        name:'Methi Paneer',
        favorite:false,
        star:3,
        tags:['gravy','paneer','onion','spicy'],
        imageUrl:'/assets/north/methiPaneer.png',
        cookTime:'20-30',
        origins:['north Indian', 'Bihar']
      },

      {
        id:10,
        price:200,
        name:'Rajma Chole',
        favorite:true,
        star:4,
        tags:['gravy','spicy','tasty'],
        imageUrl:'/assets/north/rajmaChole.png',
        cookTime:'20-25',
        origins:['north Indian', 'Gujarathi']
      },

      {
        id:11,
        price:240,
        name:'Aloo Gobi Dry',
        favorite:true,
        star:5,
        tags:['aloo','tasty'],
        imageUrl:'/assets/north/alooGobiDry.png',
        cookTime:'20-25',
        origins:['north Indian', 'Rajasthani']
      },

      {
        id:12,
        price:240,
        name:'Aloo Pyaza Paratha',
        favorite:false,
        star:3,
        tags:['aloo','paratha','onion'],
        imageUrl:'/assets/north/alooPyazaParatha.png',
        cookTime:'10-15',
        origins:['north Indian', 'Maharashtrian']
      }
    ]
  }
}

  

// **********

    // [

      // IMAGE_PATHS_OF_ALL
      // '/assets/north/alooGobiDry.png',
      // '/assets/north/AlooParatha.avif',
      // '/assets/north/alooPuri.png',
      // '/assets/north/alooPyazaParatha.png',
      // '/assets/north/butterRoti.png',
      // '/assets/north/choleBature.png',
      // '/assets/north/kulcha.png',
      // '/assets/north/methiPaneer.png',
      // '/assets/north/mushroomMasala.png',
      // '/assets/north/paneerBurji.png',
      // '/assets/north/paneerButterMasala.avif',
      // '/assets/north/rajmaChole.png',


      // '/assets/south/cheeseMasalaDosa.png',
      // '/assets/south/cholePuri.png',
      // '/assets/south/chowChowBath.png',
      // '/assets/south/curdRice.png',
      // '/assets/south/dosa.png',
      // '/assets/south/gheePongal.png',
      // '/assets/south/idly.png',
      // '/assets/south/masalaDosa.png',
      // '/assets/south/meduVada.png',
      // '/assets/south/ravaIdly.png',
      // '/assets/south/uttapam.png',
      // '/assets/south/vegPulav.png',


      // '/assets/sweets/badamHalwa.png',
      // '/assets/sweets/carrotHalwa.png',
      // '/assets/sweets/champakali.png',
      // '/assets/sweets/dharwadPedha.png',
      // '/assets/sweets/jamoon.png',
      // '/assets/sweets/kajuBarfi.png',
      // '/assets/sweets/malaiSandwhich.png',
      // '/assets/sweets/milkPedha.png',
      // '/assets/sweets/rasgulla.png',
      // '/assets/sweets/rasmalai.png',

      // '/assets/chaats/alooTilkkiPuri.png',
      // '/assets/chaats/bhelPuri.png',
      // '/assets/chaats/dahiPuri.png',
      // '/assets/chaats/masalPuri.png',
      // '/assets/chaats/paniPuri.png',
      // '/assets/chaats/papadiChaat.png',
      // '/assets/chaats/pavBhaji.png',
      // '/assets/chaats/rajKachori.png',
      // '/assets/chaats/Samosa.png',
      // '/assets/chaats/sevPuri.png',
      // '/assets/chaats/vegCutlet.png'
      
    // ]

  
// }