import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component'; 
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component'; 
import { DetailsComponent } from './components/details/details.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { FoodpageComponent } from './components/foodpage/foodpage.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { authguardGuard } from './shared/models/guard/authguard.guard';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'gallery', component: GalleryComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'details', component: DetailsComponent,canActivate:[authguardGuard]},
  { path:'search/:searchItem',component:DetailsComponent},
  { path:'starRating', component: StarRatingComponent},
  { path:'tag/:tag', component:DetailsComponent},
  { path:'food/:id', component: FoodpageComponent},
  { path:'cart-page', component:CartPageComponent},
  { path:'signup', component:SignupComponent},
  { path: 'header', component:HeaderComponent},
  { path: 'checkout', component:CheckoutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }