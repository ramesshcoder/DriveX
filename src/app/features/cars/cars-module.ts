import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing-module';
import { CarList } from './car-list/car-list';
import { CarCard } from './car-card/car-card';
import { CarDetails } from './car-details/car-details';


@NgModule({
  declarations: [
    CarList,
    CarCard,
    CarDetails
  ],
  imports: [
    CommonModule,
    CarsRoutingModule
  ]
})
export class CarsModule { }
