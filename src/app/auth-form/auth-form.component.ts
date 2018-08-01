import { Component, Output, EventEmitter } from '@angular/core';

import { User } from './auth-form.interface';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'auth-form',
  styles: [
    `
      .email {
        border-color: #9f72e6;
      }
    `
  ],
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <h3>{{ title }}</h3>
        <label>
          Email address
          <input type="email" name="email" ngModel #email appFormatPassword>
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>
        <button>{{ title }}</button>
      </form>
    </div>
  `
})
export class AuthFormComponent {
  title = 'Login';

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor() {}

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
