import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing-module';
import { CarList } from './car-list/car-list';
import { CarCard } from './car-card/car-card';
import { CarDetails } from './car-details/car-details';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { SharedModule } from '../../shared/shared-module';


@NgModule({
  declarations: [
    CarList,
    CarCard,
    CarDetails
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    CardModule,
    InputTextModule,
    Select,
    SharedModule
  ],
})
export class CarsModule { }
