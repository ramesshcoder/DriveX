import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing-module';
import { About } from './about';
import { SharedModule } from '../../shared/shared-module';
import { Contacts } from './contacts/contacts';
import { TextareaModule } from 'primeng/textarea';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    About,
    Contacts
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    TextareaModule,
    InputTextModule
  ]
})
export class AboutModule { }
