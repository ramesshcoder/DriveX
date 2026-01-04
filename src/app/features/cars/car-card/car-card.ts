import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car-card',
  standalone: false,
  templateUrl: './car-card.html',
  styleUrl: './car-card.scss',
})
export class CarCard {
  @Input() car: any;
  constructor() {}
  public ngOnInit(): void {
   
    
  }
}
