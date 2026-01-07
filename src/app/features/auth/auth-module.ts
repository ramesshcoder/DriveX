import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing-module';
import { SignUp } from './sign-up/sign-up';
import { Login } from './login/login';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { SharedModule } from "../../shared/shared-module";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SignUp, Login],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    SharedModule,
    HttpClientModule
],
})
export class AuthModule {}
