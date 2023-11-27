import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StarRatingComponent } from './star-rating.component'; 

@NgModule({
  declarations: [StarRatingComponent],
  imports: [CommonModule, StarRatingComponent,],
})
export class StarRatingModule {}