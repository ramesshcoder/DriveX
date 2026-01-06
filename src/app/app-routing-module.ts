import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home-module').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth-module').then((m) => m.AuthModule),
  },
  {
    path: 'cars',
    loadChildren: () => import('./features/cars/cars-module').then((m) => m.CarsModule),
  },
  {
    path: 'learn-more',
    loadChildren: () =>
      import('./features/learn-more/learn-more-module').then((m) => m.LearnMoreModule),
  },
  {
    path:'about',
    loadChildren:()=> import('./features/about/about-module').then((m)=>m.AboutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
