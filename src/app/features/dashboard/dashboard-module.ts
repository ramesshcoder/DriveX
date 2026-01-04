import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { UserDashboard } from './components/user-dashboard/user-dashboard';
import { Carlist } from './components/carlist/carlist';
import { CarCard } from './components/car-card/car-card';
import { CarList } from './components/car-list/car-list';


@NgModule({
  declarations: [
    UserDashboard,
    Carlist,
    CarCard,
    CarList
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
