import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from './components/button/button';
import { ButtonModule } from 'primeng/button';
import { Loader } from './components/loader/loader';
import { ProgressSpinner, ProgressSpinnerModule } from 'primeng/progressspinner';


@NgModule({
  declarations: [
    Button,
    Loader
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ProgressSpinner
  ],
  exports:[
    Button,
    ProgressSpinner,
    Loader
  ]
})
export class SharedModule { }
