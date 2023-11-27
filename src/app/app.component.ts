import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'food_order_latest';
  showHeader: boolean = true;
  showFooter: boolean =true ;
  constructor(private commonService: CommonService){

  }
  ngOnInit(): void {
    this.commonService.showHeader.subscribe(res=>
    {      
       console.log(res);
        this.showHeader = res;
    });

    this.commonService.showFooter.subscribe(resFooter =>{
      console.log(resFooter);
      this.showFooter=resFooter;
    })
  }

}
