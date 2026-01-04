import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Layout } from './layout/layout';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@NgModule({
  declarations: [Layout, Header, Footer],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [Layout]
})
export class LayoutModule {}
