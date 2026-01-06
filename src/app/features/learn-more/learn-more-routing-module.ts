import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnMore } from './learn-more/learn-more';
import { Contacts } from '../about/contacts/contacts';

const routes: Routes = [
  {
    path: '',
    component: LearnMore,
  },
  {
    path:'contact',
    component:Contacts
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearnMoreRoutingModule {}
