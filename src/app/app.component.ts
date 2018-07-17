import { Component } from '@angular/core';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div>
      <auth-form></auth-form>
    </div>
  `
})
export class AppComponent {
  loginUser(user: User) {
    console.log('Login', user);
  }
}
