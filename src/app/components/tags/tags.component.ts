import { Component, OnInit, Input } from '@angular/core';
import { Tag } from '../../shared/models/Tag';
import { FoodService } from '../../services/food/food.service';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  foodPageTags?:string[];

  @Input()
  justifyContent?:string = 'center';

  tags:Tag[] =[];
  constructor(private fs:FoodService,private router: Router, private common: CommonService) { }


  ngOnInit(): void {
    if(!this.foodPageTags)
    this.tags= this.fs.getAllTag();
  }
  navigateToTag(tag: { name: any; }) {
    this.common.tag.next(tag.name);
  }
  navigateToTagName(tagname: string) {
    this.common.tag.next(tagname);
    this.router.navigate(['/details']);
  }
}

