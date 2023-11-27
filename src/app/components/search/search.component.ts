import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchItem: string = '';
  constructor(private route: ActivatedRoute, private router: Router,private common:CommonService) { }
  ngOnInit(): void {

    // This code subscribes to the route parameters using the ActivatedRoute service. 
    // The subscribe method allows you to react to changes in the route 
    // parameters over time.
    this.route.params.subscribe(params => {
      if (params['searchItem'])
 
        //  This suggests that the component is expecting a
        //  route parameter named 'searchItem' to be passed in the URL
        this.searchItem = params['searchItem'];
    })
  }

  search(): void {
    console.log("search");
    if (this.searchItem)
      // After typing the searchItem and when the search() method is called,
      // then it is navigated to that particular Item page
      // this.router.navigateByUrl('/search/' + this.searchItem)
      this.common.searchText.next(this.searchItem);
      else{
        this.common.searchText.next('');
      }

  }

}