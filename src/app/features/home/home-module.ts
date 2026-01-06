import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';
import { Home } from './home/home';
import { LayoutModule } from '../../layout/layout-module';
import { SharedModule } from '../../shared/shared-module';
import { CarsModule } from '../cars/cars-module';
import { LearnMoreModule } from '../learn-more/learn-more-module';


@NgModule({
  declarations: [
    Home
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    SharedModule,
    CarsModule,
    LearnMoreModule
  ],
  
})
export class HomeModule { }
