import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailLoginComponent } from './email-login/email-login.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [  LoginPageComponent],
  exports: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
