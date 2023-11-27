import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})

export class StarRatingComponent {
  @Input() value: any; // Current rating value
  @Input() readonly: boolean = false;
  @Output() valueChange = new EventEmitter<number>(); // Event to emit when the rating changes
  stars: number[] = [0, 1, 2, 3, 4]; // Number of stars

  rate(index: number): void {
    this.value = index + 1; // Set the new rating value
    this.valueChange.emit(this.value); // Emit the rating change event
  }
}
