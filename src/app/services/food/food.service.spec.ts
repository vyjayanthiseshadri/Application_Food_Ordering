// import { TestBed } from '@angular/core/testing';
// import { FoodService } from './food.service';

// describe('FoodService', () => {
//   let service: FoodService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(FoodService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
//   it('should return the correct food by ID', () => {
//     const foodId = 1;
//     const result = service.getFoodById(foodId);
    
//     // Replace with the expected food object based on your mock data
//     expect(result).toEqual({
//       id:1,
//         price:35,
//         name:'Butter Roti',
//         favorite:true,
//         star:4,
//         tags:['roti','butter','tasty'],
//         imageUrl:'/assets/north/butterRoti.png',
//         cookTime:'10-15',
//         origins:['north Indian', 'Rajasthani']
//       // Add other properties based on your actual data structure
//     });
//   });

//   it('should return the correct foods by tag', () => {
//     const tag = 'roti';
//     const result = service.getAllFoodsByTag(tag);

//     // Replace with the expected array of foods based on your mock data
//     expect(result).toEqual([
//       {
//         id:1,
//         price:35,
//         name:'Butter Roti',
//         favorite:true,
//         star:4,
//         tags:['roti','butter','tasty'],
//         imageUrl:'/assets/north/butterRoti.png',
//         cookTime:'10-15',
//         origins:['north Indian', 'Rajasthani']
//       },

//       {
//         id:2,
//         price:45,
//         name:'Kulcha',
//         favorite:false,
//         star:3.5,
//         tags:['butter','tasty','roti'],
//         imageUrl:'/assets/north/kulcha.png',
//         cookTime:'10-20',
//         origins:['north Indian', 'Maharashtrian']
//       },


//       // Add other expected foods for the 'roti' tag
//     ]);
//   });

//   it('should return the correct array of tags', () => {
//     const result = service.getAllTag();

//     // Replace with the expected array of tags based on your mock data
//     expect(result).toEqual([
//       {name: 'All', count: 12},
//       {name: 'roti', count: 2},
//       {name: 'butter', count: 4},
//       {name: 'tasty', count: 7},
//       {name: 'gravy', count: 6},
//       {name: 'paneer', count: 3},
//       {name: 'creamy', count: 3},
//       {name: 'paratha', count: 2},
//       {name: 'aloo', count: 4},
//       {name: 'spicy', count: 5},
//       {name: 'mushroom', count: 1},
//       {name: 'onion', count: 3},
//       {name: 'puri', count: 1},
//       // Add other expected tags
//     ]);
//   });

//   it('should return the correct array of foods', () => {
//     const result = service.getAll();

//     // Replace with the expected array of foods based on your mock data
//     expect(result).toEqual([
//       {
//         id:1,
//         price:35,
//         name:'Butter Roti',
//         favorite:true,
//         star:4,
//         tags:['roti','butter','tasty'],
//         imageUrl:'/assets/north/butterRoti.png',
//         cookTime:'10-15',
//         origins:['north Indian', 'Rajasthani']
//       },

//       {
//         id:2,
//         price:45,
//         name:'Kulcha',
//         favorite:false,
//         star:3.5,
//         tags:['butter','tasty','roti'],
//         imageUrl:'/assets/north/kulcha.png',
//         cookTime:'10-20',
//         origins:['north Indian', 'Maharashtrian']
//       },

//       {
//         id:3,
//         price:220,
//         name:'Paneer Butter Masala',
//         favorite:true,
//         star:4.5,
//         tags:['gravy','butter','tasty','paneer','creamy'],
//         imageUrl:'/assets/north/paneerButterMasala.png',
//         cookTime:'20-30',
//         origins:['north Indian', 'Gujarathi']
//       },

//       {
//         id:4,
//         price:200,
//         name:'Aloo Paratha',
//         favorite:true,
//         star:4,
//         tags:['paratha','butter','aloo','spicy'],
//         imageUrl:'/assets/north/AlooParatha.png',
//         cookTime:'10-20',
//         origins:['north Indian', 'Madhya Pradesh']
//       },

//       {
//         id:5,
//         price:240,
//         name:'Mushroom Masala',
//         favorite:false,
//         star:3.5,
//         tags:['gravy','mushroom','creamy','spicy'],
//         imageUrl:'/assets/north/mushroomMasala.png',
//         cookTime:'20-30',
//         origins:['north Indian', 'Bihari']
//       },

//       {
//         id:6,
//         price:240,
//         name:'Paneer Burj',
//         favorite:false,
//         star:4,
//         tags:['paneer','spicy','gravy'],
//         imageUrl:'/assets/north/paneerBurji.png',
//         cookTime:'20-25',
//         origins:['north Indian', 'Jharkandi']
//       },

//       {
//         id:7,
//         price:210,
//         name:'Chole Bature',
//         favorite:true,
//         star:4.5,
//         tags:['gravy','tasty','onion','creamy'],
//         imageUrl:'/assets/north/choleBature.png',
//         cookTime:'15-25',
//         origins:['north Indian', 'Rajasthani']
//       },

//       {
//         id:8,
//         price:190,
//         name:'Puri Aloo',
//         favorite:true,
//         star:4,
//         tags:['puri','aloo','tasty'],
//         imageUrl:'/assets/north/alooPuri.png',
//         cookTime:'15-20',
//         origins:['north Indian', 'Maharashtrian']
//       },

//       {
//         id:9,
//         price:120,
//         name:'Methi Paneer',
//         favorite:false,
//         star:3,
//         tags:['gravy','paneer','onion','spicy'],
//         imageUrl:'/assets/north/methiPaneer.png',
//         cookTime:'20-30',
//         origins:['north Indian', 'Bihar']
//       },

//       {
//         id:10,
//         price:200,
//         name:'Rajma Chole',
//         favorite:true,
//         star:4,
//         tags:['gravy','spicy','tasty'],
//         imageUrl:'/assets/north/rajmaChole.png',
//         cookTime:'20-25',
//         origins:['north Indian', 'Gujarathi']
//       },

//       {
//         id:11,
//         price:240,
//         name:'Aloo Gobi Dry',
//         favorite:true,
//         star:4.5,
//         tags:['aloo','tasty'],
//         imageUrl:'/assets/north/alooGobiDry.png',
//         cookTime:'20-25',
//         origins:['north Indian', 'Rajasthani']
//       },

//       {
//         id:12,
//         price:240,
//         name:'Aloo Pyaza Paratha',
//         favorite:false,
//         star:3,
//         tags:['aloo','paratha','onion'],
//         imageUrl:'/assets/north/alooPyazaParatha.png',
//         cookTime:'10-15',
//         origins:['north Indian', 'Maharashtrian']
//       }
//       // Add other expected foods
//     ]);
//   });
// });
