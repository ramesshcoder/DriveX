import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnMoreRoutingModule } from './learn-more-routing-module';
import { LearnMore } from './learn-more/learn-more';
import { SharedModule } from "../../shared/shared-module";


@NgModule({
  declarations: [
    LearnMore
  ],
  imports: [
    CommonModule,
    LearnMoreRoutingModule,
    SharedModule
]
})
export class LearnMoreModule { }
