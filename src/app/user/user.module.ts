import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailLoginComponent } from './email-login/email-login.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ EmailLoginComponent, LoginPageComponent],
  exports: [],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
