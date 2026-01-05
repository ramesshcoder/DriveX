import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarList } from './car-list/car-list';
import { CarDetails } from './car-details/car-details';

const routes: Routes = [
  {
    path:'list',
    component : CarList
  },
  {
    path:'car-details',
    component:CarDetails
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
