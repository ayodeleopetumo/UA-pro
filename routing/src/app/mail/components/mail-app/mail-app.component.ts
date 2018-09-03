import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mail-app',
  styleUrls: ['mail-app.component.scss'],
  template: `
    <div class="mail">
      <router-outlet></router-outlet>
    </div>
  `
})
export class MailAppComponent {}
