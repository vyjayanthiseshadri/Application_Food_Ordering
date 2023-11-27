import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { DetailsComponent } from './components/details/details.component';
import { FoodpageComponent } from './components/foodpage/foodpage.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchComponent } from './components/search/search.component';
import { SignupComponent } from './components/signup/signup.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { TagsComponent } from './components/tags/tags.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';  
import { FoodheaderComponent } from './components/foodheader/foodheader.component';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LightOnHoverDirective } from './directives/light-on-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    CartPageComponent,
    DetailsComponent,
    FoodpageComponent,
    GalleryComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    NotFoundComponent,
    SearchComponent,
    SignupComponent,
    StarRatingComponent,
    TagsComponent,
    HeaderComponent,
    CheckoutComponent,
    LightOnHoverDirective,
    FoodheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CommonModule,FormsModule,ReactiveFormsModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,RouterModule
  ],
  exports: [
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }