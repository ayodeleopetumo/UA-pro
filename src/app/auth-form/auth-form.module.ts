import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthFormComponent } from './auth-form.component';
import { AuthRememberComponent } from './auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';
import { AuthFormDirective } from './auth-form.directive';
import { AuthFormPipe } from './auth-form.pipe';

@NgModule({
  imports: [FormsModule, CommonModule],
  exports: [AuthFormComponent, AuthRememberComponent],
  declarations: [
    AuthFormComponent,
    AuthRememberComponent,
    AuthMessageComponent,
    AuthFormDirective,
    AuthFormPipe
  ],
  providers: [],
  entryComponents: [AuthFormComponent]
})
export class AuthFormModule {}
