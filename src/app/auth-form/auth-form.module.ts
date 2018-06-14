import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthFormComponent } from './auth-form.component';

@NgModule({
  imports: [FormsModule, CommonModule],
  exports: [AuthFormComponent],
  declarations: [AuthFormComponent],
  providers: []
})
export class AuthFormModule {}
