import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from './components/button/button';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    Button
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports:[
    Button
  ]
})
export class SharedModule { }
