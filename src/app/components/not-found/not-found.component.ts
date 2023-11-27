import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit{

  @Input() visible:boolean=false;
  //@Input() notFoundMessage:string = 'Nothing Found!';
  @Input() resetLinkText:string='Reset';
  @Input() resetLinkRoute:string='/details';

  constructor(private router: Router) { }

  navigateToResetLink() {
    this.router.navigateByUrl(this.resetLinkRoute);
  }

  ngOnInit(): void {
    
  }
}