import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food/food.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { Foods } from 'src/app/shared/models/food';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  // myData = 'Initial Value';
  // Initializing an empty array to store the food items
  foods: Foods[] = [];

  constructor(private fs: FoodService, private route: ActivatedRoute, private router: Router, private common: CommonService) { }
  // The Router service, is used for programmatic navigation between different views or components. 

  navigateToFood(foodId: number) {
    this.router.navigateByUrl(`/food/${foodId}`);
  }


  // The ActivatedRoute service provides access to information about the currently activated route. 
  // Here we are subscribing to changes in route parameters and update the foods array accordingly.
  ngOnInit(): void {
    this.route.params.subscribe(params => {

      this.common.searchText.subscribe(response => {
        // this.searchText = response;
        if (response != '') {
          this.foods = this.fs.getAll().filter(food => food.name.toLowerCase().includes(response.toLowerCase()));
        }
        else {
          this.foods = this.fs.getAll();
        }
      })

      this.common.tag.subscribe(response => {

        if(response == "All") {
          this.foods = this.fs.getAll();
        }
        else if (response != '') {
          console.log(response);
            // this.foods = this.fs.getAll().filter(food => food.tags.toLowerCase().includes(response.toLowerCase()));
            this.foods = this.fs.getAll().filter(food => 
              food.tags && food.tags.some(tag => tag.toLowerCase().includes(response.toLowerCase()))
            ); 
        }
        
          
      })




    })
  }

  // Sorting function

  // Sorting based on price
  sortProducts(sortOrder: string) {
    if (sortOrder === 'priceAsc') {
      this.foods.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'priceDesc') {
      this.foods.sort((a, b) => b.price - a.price);
    }
  }

  // Sorting based on rating
  sortProducts_rating(sortOrder: string) {
    if (sortOrder === 'ratingAsc') {
      this.foods.sort((a, b) => a.star - b.star);
    } else if (sortOrder === 'ratingDesc') {
      this.foods.sort((a, b) => b.star - a.star);
    }
  }

}
