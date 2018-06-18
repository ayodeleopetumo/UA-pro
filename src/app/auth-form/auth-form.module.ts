import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthFormComponent } from './auth-form.component';
import { AuthRememberComponent } from './auth-remember.component';

@NgModule({
  imports: [FormsModule, CommonModule],
  exports: [AuthFormComponent, AuthRememberComponent],
  declarations: [AuthFormComponent, AuthRememberComponent],
  providers: []
})
export class AuthFormModule {}
