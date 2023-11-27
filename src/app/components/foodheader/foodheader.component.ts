import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foodheader',
  templateUrl: './foodheader.component.html',
  styleUrls: ['./foodheader.component.css']
})
export class FoodheaderComponent {
  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigateByUrl('/');
  }
  navigateToGallery() {
    this.router.navigateByUrl('/gallery');
  }
  navigateToMenu() {
    this.router.navigateByUrl('/menu');
  }
  navigateToOrders() {
    this.router.navigateByUrl('/details');
  }
  navigateToLogIn() {
    this.router.navigateByUrl('/login');
  }

}
