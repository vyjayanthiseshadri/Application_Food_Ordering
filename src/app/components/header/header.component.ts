import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(private router: Router,
              private firebase: FirebaseService) { }
  ngOnInit(): void {
    
  }

  navigateToHome() {
    this.router.navigateByUrl('/home');
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
  navigateToLogout() {
    const status = sessionStorage.getItem('LoginStatus');
    if(status == 'true')
    {
      if (window.confirm("Are you sure you want to log out?")) {
        this.firebase.logout();
      }
    }
  }

}